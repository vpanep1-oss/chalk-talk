import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPracticePlanById } from '../data/practicePlans';
import { getDrillById } from '../data/drillLibrary';
import { savePracticeScheduleEntry } from '../firebase/firestore';
import DrillSelectorModal from '../components/DrillSelectorModal';
import './PlanEditor.css';

const PlanEditor = ({ currentPractice, saveCurrentPractice, teamCode }) => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [practiceDate, setPracticeDate] = useState(new Date().toISOString().split('T')[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: null, // 'swap' or 'add'
    blockIndex: null,
    initialCategory: 'all'
  });

  useEffect(() => {
    if (planId) {
      const loadedPlan = currentPractice?.plan?.id === planId
        ? currentPractice.plan
        : getPracticePlanById(planId);

      if (loadedPlan) {
        setPlan(JSON.parse(JSON.stringify(loadedPlan))); // Deep clone
        setPracticeDate(currentPractice?.plan?.id === planId ? currentPractice.date : new Date().toISOString().split('T')[0]);
        setIsEditing(false);
      }
    }
  }, [planId, currentPractice]);

  const handleDurationChange = (blockIndex, newDuration) => {
    const updatedPlan = { ...plan };
    updatedPlan.drillBlocks[blockIndex].duration = parseInt(newDuration, 10);
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

    const newTotal = updatedPlan.drillBlocks.reduce((sum, block) => sum + block.duration, 0);
    const diff = targetMinutes - newTotal;

    if (diff !== 0 && updatedPlan.drillBlocks.length > 0) {
      const longestIndex = updatedPlan.drillBlocks.reduce((maxIdx, block, idx, arr) =>
        block.duration > arr[maxIdx].duration ? idx : maxIdx, 0);
      updatedPlan.drillBlocks[longestIndex].duration = Math.max(1,
        updatedPlan.drillBlocks[longestIndex].duration + diff);
    }

    setPlan(updatedPlan);
    setIsEditing(true);
  };

  const handleSaveAsCurrentPractice = () => {
    saveCurrentPractice({ plan, date: practiceDate });
    setIsEditing(false);
    alert(`Plan set as current practice for ${practiceDate}`);
  };

  const handleStartPractice = () => {
    saveCurrentPractice({ plan, date: practiceDate });
    navigate('/timer');
  };

  const handleSchedulePractice = async () => {
    const entry = {
      id: `${plan.id}_${practiceDate}`,
      planId: plan.id,
      planName: plan.name,
      level: plan.level,
      duration: getTotalTime(),
      date: practiceDate
    };

    if (teamCode) {
      try {
        await savePracticeScheduleEntry(teamCode, entry);
        alert(`Practice plan scheduled for ${practiceDate} and synced to your team.`);
      } catch (error) {
        console.error(error);
        alert('Unable to save schedule to Firestore. Your plan was not scheduled.');
      }
    } else {
      const scheduleKey = 'practiceSchedule';
      const schedule = JSON.parse(localStorage.getItem(scheduleKey) || '[]');
      const updatedSchedule = [...schedule.filter(item => item.planId !== plan.id || item.date !== practiceDate), entry];
      localStorage.setItem(scheduleKey, JSON.stringify(updatedSchedule));
      alert(`Practice plan scheduled for ${practiceDate}`);
    }
  };

  const handleSwapDrill = (blockIndex) => {
    const currentDrill = getDrillById(plan.drillBlocks[blockIndex].drillId);
    setModalState({
      isOpen: true,
      mode: 'swap',
      blockIndex,
      initialCategory: currentDrill?.category || 'all'
    });
  };

  const handleAddDrill = () => {
    setModalState({
      isOpen: true,
      mode: 'add',
      blockIndex: null,
      initialCategory: 'all'
    });
  };

  const handleDrillSelected = (selectedDrill) => {
    if (modalState.mode === 'swap') {
      const updatedPlan = { ...plan };
      updatedPlan.drillBlocks[modalState.blockIndex] = {
        drillId: selectedDrill.id,
        duration: updatedPlan.drillBlocks[modalState.blockIndex].duration
      };
      setPlan(updatedPlan);
      setIsEditing(true);
    } else if (modalState.mode === 'add') {
      const currentTotal = getTotalTime();
      const newDrillDuration = Math.min(selectedDrill.duration, 10);
      const targetTotal = currentTotal;
      const updatedPlan = { ...plan };

      if (currentTotal > 0) {
        const remainingTime = targetTotal - newDrillDuration;
        const ratio = remainingTime / currentTotal;

        updatedPlan.drillBlocks = updatedPlan.drillBlocks.map(block => ({
          ...block,
          duration: Math.max(1, Math.round(block.duration * ratio))
        }));

        const scaledTotal = updatedPlan.drillBlocks.reduce((sum, block) => sum + block.duration, 0);
        const diff = remainingTime - scaledTotal;

        if (diff !== 0 && updatedPlan.drillBlocks.length > 0) {
          const longestIndex = updatedPlan.drillBlocks.reduce((maxIdx, block, idx, arr) =>
            block.duration > arr[maxIdx].duration ? idx : maxIdx, 0);
          updatedPlan.drillBlocks[longestIndex].duration = Math.max(1,
            updatedPlan.drillBlocks[longestIndex].duration + diff);
        }
      }

      updatedPlan.drillBlocks.push({
        drillId: selectedDrill.id,
        duration: newDrillDuration
      });

      setPlan(updatedPlan);
      setIsEditing(true);
    }

    setModalState({ isOpen: false, mode: null, blockIndex: null, initialCategory: 'all' });
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

      <div className="practice-date-section">
        <label htmlFor="practice-date">Practice Date</label>
        <input
          id="practice-date"
          type="date"
          value={practiceDate}
          onChange={(e) => setPracticeDate(e.target.value)}
        />
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
        <button className="btn btn-secondary" onClick={handleSaveAsCurrentPractice}>
          💾 Set as Current Practice
        </button>
        <button className="btn btn-outline" onClick={handleSchedulePractice}>
          🗓️ Schedule for {practiceDate}
        </button>
      </div>

      <div className="add-drill-section">
        <button className="btn btn-outline" onClick={handleAddDrill}>
          ➕ Add Drill
        </button>
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
                    className="swap-drill-btn"
                    onClick={() => handleSwapDrill(index)}
                    title="Swap drill"
                  >
                    🔄
                  </button>
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

      <DrillSelectorModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, mode: null, blockIndex: null, initialCategory: 'all' })}
        onSelectDrill={handleDrillSelected}
        initialCategory={modalState.initialCategory}
      />
    </div>
  );
};

export default PlanEditor;

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
                    className="swap-drill-btn"
                    onClick={() => handleSwapDrill(index)}
                    title="Swap drill"
                  >
                    🔄
                  </button>
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

      <DrillSelectorModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, mode: null, blockIndex: null, initialCategory: 'all' })}
        onSelectDrill={handleDrillSelected}
        initialCategory={modalState.initialCategory}
      />
    </div>
  );
};

export default PlanEditor;
