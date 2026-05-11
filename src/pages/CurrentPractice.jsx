import { Link, useNavigate } from 'react-router-dom';
import { getDrillById } from '../data/drillLibrary';
import { exportPracticePlanToPDF } from '../utils/exportPDF';
import './CurrentPractice.css';

const CurrentPractice = ({ currentPractice, clearCurrentPractice }) => {
  const navigate = useNavigate();
  const currentPlan = currentPractice?.plan;

  const formatPracticeDate = (dateString) => {
    if (!dateString) return 'No date set';
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleDownloadPDF = () => {
    if (!currentPlan) return;

    const planWithDrills = {
      ...currentPlan,
      drillBlocks: currentPlan.drillBlocks.map(block => ({
        ...block,
        drill: getDrillById(block.drillId)
      }))
    };

    exportPracticePlanToPDF(planWithDrills, currentPractice.date);
  };

  return (
    <div className="page current-practice-page">
      <div className="page-header">
        <h1 className="page-title">Current Practice</h1>
        <p className="page-subtitle">Work from the plan you confirmed for today or your next practice date.</p>
      </div>

      {!currentPlan ? (
        <div className="empty-state">
          <div className="empty-state-icon">📌</div>
          <h2 className="empty-state-title">No current practice loaded</h2>
          <p className="empty-state-text">Choose a plan and set it as current practice from the plan editor.</p>
          <div className="empty-actions">
            <Link to="/plans" className="btn btn-primary">Browse Plans</Link>
            <Link to="/schedule" className="btn btn-outline">View Schedule</Link>
          </div>
        </div>
      ) : (
        <div className="current-practice-card card">
          <div className="practice-summary">
            <div>
              <span className="text-muted">Plan</span>
              <h2>{currentPlan.name}</h2>
            </div>
            <div>
              <span className="text-muted">Date</span>
              <p>{formatPracticeDate(currentPractice.date)}</p>
            </div>
          </div>

          <div className="practice-meta">
            <span className={`level-badge ${currentPlan.level.toLowerCase()}`}>{currentPlan.level}</span>
            <span>Drills: {currentPlan.drillBlocks.length}</span>
            <span>Duration: {currentPlan.drillBlocks.reduce((sum, block) => sum + block.duration, 0)} min</span>
          </div>

          <div className="current-actions">
            <button className="btn btn-primary" onClick={() => navigate('/timer')}>
              ▶️ Run Current Practice
            </button>
            <button className="btn btn-secondary" onClick={() => navigate(`/plan/${currentPlan.id}`)}>
              ✏️ Edit Plan
            </button>
            <button className="btn btn-outline" onClick={handleDownloadPDF}>
              📥 Download PDF
            </button>
            <button className="btn btn-outline" onClick={clearCurrentPractice}>
              ❌ Clear Current Practice
            </button>
          </div>
        </div>
      )}

      <div className="schedule-link-row">
        <Link to="/schedule" className="btn btn-outline">Open Practice Schedule</Link>
      </div>
    </div>
  );
};

export default CurrentPractice;
