import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPracticePlanById } from '../data/practicePlans';
import { getDrillById } from '../data/drillLibrary';
import './PlanEditor.css';

const PlanEditor = ({ currentPlan, setCurrentPlan }) => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (planId) {
      const loadedPlan = currentPlan && currentPlan.id === planId
        ? currentPlan
        : getPracticePlanById(planId);

      if (loadedPlan) {
        setPlan(JSON.parse(JSON.stringify(loadedPlan))); // Deep clone
      }
    }
  }, [planId, currentPlan]);

  const handleDurationChange = (blockIndex, newDuration) => {
    const updatedPlan = { ...plan };
    updatedPlan.drillBlocks[blockIndex].duration = parseInt(newDuration);
    setPlan(updatedPlan);
    setIsEditing(true);
  };

  const handleRemoveDrill = (blockIndex) => {
    if (confirm('Remove this drill from the practice plan?')) {
      const updatedPlan = { ...plan };
      updatedPlan.drillBlocks.splice(blockIndex, 1);
      setPlan(updatedPlan);
      setIsEditing(true);
    }
  };

  const handleAdjustToTime = (targetMinutes) => {
    const currentTotal = getTotalTime();
    if (currentTotal === 0 || currentTotal === targetMinutes) return;

    const ratio = targetMinutes / currentTotal;
    const updatedPlan = { ...plan };

    updatedPlan.drillBlocks = updatedPlan.drillBlocks.map(block => ({
      ...block,
      duration: Math.max(1, Math.round(block.duration * ratio))
    }));

    // Fine-tune to hit exact target
    const newTotal = updatedPlan.drillBlocks.reduce((sum, block) => sum + block.duration, 0);
    const diff = targetMinutes - newTotal;

    if (diff !== 0 && updatedPlan.drillBlocks.length > 0) {
      // Add/subtract difference from longest drill
      const longestIndex = updatedPlan.drillBlocks.reduce((maxIdx, block, idx, arr) =>
        block.duration > arr[maxIdx].duration ? idx : maxIdx, 0);
      updatedPlan.drillBlocks[longestIndex].duration = Math.max(1,
        updatedPlan.drillBlocks[longestIndex].duration + diff);
    }

    setPlan(updatedPlan);
    setIsEditing(true);
  };

  const handleSavePlan = () => {
    setCurrentPlan(plan);
    // TODO: Save to Firebase
    setIsEditing(false);
    alert('Plan saved!');
  };

  const handleStartPractice = () => {
    setCurrentPlan(plan);
    navigate('/timer');
  };

  const getTotalTime = () => {
    return plan?.drillBlocks.reduce((total, block) => total + block.duration, 0) || 0;
  };

  if (!plan) {
    return (
      <div className="page">
        <div className="empty-state">
          <div className="empty-state-icon">📋</div>
          <h2 className="empty-state-title">Plan not found</h2>
          <button className="btn btn-primary" onClick={() => navigate('/plans')}>
            Browse Plans
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page plan-editor-page">
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate('/plans')}>
          ← Back
        </button>
        <h1 className="page-title">{plan.name}</h1>
        <div className="plan-meta-header">
          <span className={`level-badge ${plan.level.toLowerCase()}`}>{plan.level}</span>
          <span className="total-time">⏱️ {getTotalTime()} min total</span>
        </div>
      </div>

      <div className="time-adjustment-section">
        <h3>Adjust Practice Duration</h3>
        <div className="time-buttons">
          <button
            className={`time-btn ${getTotalTime() === 60 ? 'active' : ''}`}
            onClick={() => handleAdjustToTime(60)}
          >
            60 min
          </button>
          <button
            className={`time-btn ${getTotalTime() === 75 ? 'active' : ''}`}
            onClick={() => handleAdjustToTime(75)}
          >
            75 min
          </button>
          <button
            className={`time-btn ${getTotalTime() === 90 ? 'active' : ''}`}
            onClick={() => handleAdjustToTime(90)}
          >
            90 min
          </button>
        </div>
        <p className="time-adjustment-hint">
          Click to proportionally adjust all drill times to fit the target duration
        </p>
      </div>

      <div className="editor-actions">
        <button className="btn btn-primary" onClick={handleStartPractice}>
          ▶️ Start Practice
        </button>
        {isEditing && (
          <button className="btn btn-secondary" onClick={handleSavePlan}>
            💾 Save Changes
          </button>
        )}
      </div>

      <div className="drill-blocks">
        {plan.drillBlocks.map((block, index) => {
          const drill = getDrillById(block.drillId);
          return (
            <div key={index} className="drill-block-card">
              <div className="drill-block-header">
                <div className="drill-info">
                  <h3 className="drill-name">
                    {index + 1}. {drill?.name || 'Unknown Drill'}
                  </h3>
                  <p className="drill-category">{drill?.category}</p>
                </div>
                <div className="drill-controls">
                  <div className="duration-input">
                    <input
                      type="number"
                      min="1"
                      max="90"
                      value={block.duration}
                      onChange={(e) => handleDurationChange(index, e.target.value)}
                    />
                    <span>min</span>
                  </div>
                  <button
                    className="remove-drill-btn"
                    onClick={() => handleRemoveDrill(index)}
                    title="Remove drill"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              {drill?.description && (
                <p className="drill-description">{drill.description}</p>
              )}
              {drill?.details && (
                <details className="drill-details">
                  <summary>View Details</summary>
                  <p>{drill.details}</p>
                </details>
              )}
            </div>
          );
        })}
      </div>

      <div className="focus-areas-section">
        <h3>Focus Areas</h3>
        <div className="focus-tags">
          {plan.focusAreas.map((area, idx) => (
            <span key={idx} className="focus-tag">{area}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanEditor;
