import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPracticePlanById } from '../data/practicePlans';
import { getDrillById } from '../data/drillLibrary';
import { getPracticeSchedule, subscribeToPracticeSchedule, deletePracticeScheduleEntry } from '../firebase/firestore';
import { exportPracticePlanToPDF } from '../utils/exportPDF';
import './PracticeSchedule.css';

const PracticeSchedule = ({ teamCode }) => {
  const [schedule, setSchedule] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let unsubscribe = null;

    const loadSchedule = async () => {
      if (teamCode) {
        unsubscribe = subscribeToPracticeSchedule(teamCode, (entries) => {
          const sorted = entries.sort((a, b) => new Date(a.date) - new Date(b.date));
          setSchedule(sorted);
        });
      } else {
        const savedSchedule = JSON.parse(localStorage.getItem('practiceSchedule') || '[]');
        const sortedSchedule = savedSchedule.sort((a, b) => new Date(a.date) - new Date(b.date));
        setSchedule(sortedSchedule);
      }
    };

    loadSchedule();
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [teamCode]);

  const handleRemove = async (id) => {
    if (!confirm('Remove this scheduled practice?')) return;

    if (teamCode) {
      try {
        await deletePracticeScheduleEntry(teamCode, id);
      } catch (error) {
        console.error(error);
        alert('Unable to remove scheduled practice from Firestore.');
        return;
      }
    } else {
      const updated = schedule.filter(entry => entry.id !== id);
      localStorage.setItem('practiceSchedule', JSON.stringify(updated));
      setSchedule(updated);
    }
  };

  const handleLoadCurrent = (entry) => {
    // Use the modified plan from schedule if it exists, otherwise load the template
    const plan = entry.modifiedPlan || getPracticePlanById(entry.planId);
    if (!plan) {
      alert('Practice plan not found.');
      return;
    }
    localStorage.setItem('currentPractice', JSON.stringify({ plan, date: entry.date }));
    navigate('/current');
  };

  const handleEditPlan = (entry) => {
    // Store the scheduled entry temporarily so PlanEditor can load it
    if (entry.modifiedPlan) {
      localStorage.setItem('tempScheduledPlan', JSON.stringify({
        plan: entry.modifiedPlan,
        date: entry.date
      }));
    }
    navigate(`/plan/${entry.planId}`);
  };

  const handleDownloadPDF = (entry) => {
    // Use the modified plan from schedule if it exists, otherwise load the template
    const plan = entry.modifiedPlan || getPracticePlanById(entry.planId);
    if (!plan) {
      alert('Practice plan not found.');
      return;
    }

    // Use the custom name from the schedule entry
    const planWithDrills = {
      ...plan,
      name: entry.planName, // Use the scheduled name (which may be custom)
      drillBlocks: plan.drillBlocks.map(block => ({
        ...block,
        drill: getDrillById(block.drillId)
      }))
    };

    exportPracticePlanToPDF(planWithDrills, entry.date);
  };

  return (
    <div className="page practice-schedule-page">
      <div className="page-header">
        <h1 className="page-title">Practice Schedule</h1>
        <p className="page-subtitle">See upcoming practices and load a plan for today.</p>
      </div>

      {schedule.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🗓️</div>
          <h2 className="empty-state-title">No scheduled practices</h2>
          <p className="empty-state-text">Schedule a plan from the editor to see it here.</p>
        </div>
      ) : (
        <div className="schedule-list">
          {schedule.map((entry) => (
            <div key={entry.id} className="schedule-card card">
              <div className="schedule-main">
                <div>
                  <h3>{entry.planName}</h3>
                  <p className="text-muted">{entry.level} • {entry.duration} min</p>
                </div>
                <div className="schedule-date">
                  <span>{new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>

              <div className="schedule-actions">
                <button className="btn btn-primary" onClick={() => handleEditPlan(entry)}>
                  Edit Plan
                </button>
                <button className="btn btn-secondary" onClick={() => handleLoadCurrent(entry)}>
                  Load Current
                </button>
                <button className="btn btn-outline" onClick={() => handleDownloadPDF(entry)}>
                  📥 PDF
                </button>
                <button className="btn btn-outline" onClick={() => handleRemove(entry.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PracticeSchedule;
