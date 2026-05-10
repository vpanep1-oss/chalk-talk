import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPracticePlanById } from '../data/practicePlans';
import { getDrillById, getDrillsByCategory } from '../data/drillLibrary';
import { savePracticeScheduleEntry, getPracticeHistory, getDrillEffectivenessMap } from '../firebase/firestore';
import DrillSelectorModal from '../components/DrillSelectorModal';
import DrillRecommendation from '../components/DrillRecommendation';
import { exportPracticePlanToPDF } from '../utils/exportPDF';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './PlanEditor.css';
import './PlanEditor.print.css';

// Sortable Drill Block Component
const SortableDrillBlock = ({
  block,
  index,
  drill,
  onDurationChange,
  onSwap,
  onRemove,
  isSwapping,
  drillRecommendation,
  uniqueId,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: uniqueId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="drill-block-card">
      <div className="drill-block-header">
        <div className="drag-handle" {...attributes} {...listeners}>
          <span className="drag-icon">⋮⋮</span>
        </div>
        <div className="drill-info">
          <h3 className="drill-name">
            {index + 1}. {drill?.name || 'Unknown Drill'}
          </h3>
          <p className="drill-category">{drill?.category}</p>
        </div>
        <div className="drill-controls">
          <div className="duration-input" data-duration={block.duration}>
            <input
              type="number"
              min="1"
              max="90"
              value={block.duration}
              onChange={(e) => onDurationChange(index, e.target.value)}
            />
            <span>min</span>
          </div>
          <button
            className="swap-drill-btn"
            onClick={() => onSwap(index)}
            title="Swap drill"
          >
            🔄
          </button>
          <button
            className="remove-drill-btn"
            onClick={() => onRemove(index)}
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
      {drillRecommendation}
    </div>
  );
};

const PlanEditor = ({ currentPractice, saveCurrentPractice, teamCode }) => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [practiceDate, setPracticeDate] = useState(new Date().toISOString().split('T')[0]);
  const [customPlanName, setCustomPlanName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [drillEffectiveness, setDrillEffectiveness] = useState({});
  const [swappingBlockIndex, setSwappingBlockIndex] = useState(null);
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: null, // 'swap' or 'add'
    blockIndex: null,
    initialCategory: 'all'
  });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    if (planId) {
      if (planId === 'new') {
        // Create a new empty custom plan
        const emptyPlan = {
          id: 'custom-' + Date.now(),
          name: 'Custom Practice Plan',
          level: 'Beginner',
          duration: 0,
          focusAreas: ['Custom'],
          drillBlocks: []
        };
        setPlan(emptyPlan);
        setPracticeDate(new Date().toISOString().split('T')[0]);
        setCustomPlanName('');
        setIsEditing(true);
      } else {
        // Load the original template plan
        const originalPlan = getPracticePlanById(planId);

        if (originalPlan) {
          setPlan(JSON.parse(JSON.stringify(originalPlan))); // Deep clone the original
          setPracticeDate(currentPractice?.plan?.id === planId ? currentPractice.date : new Date().toISOString().split('T')[0]);
          setCustomPlanName(''); // Reset custom name when loading a new plan
          setIsEditing(false);
        }
      }
    }
  }, [planId]);

  // Load drill effectiveness data
  useEffect(() => {
    const loadEffectiveness = async () => {
      let sessions = [];
      if (teamCode) {
        sessions = await getPracticeHistory(teamCode, 50);
      } else {
        sessions = JSON.parse(localStorage.getItem('practiceHistory') || '[]');
      }

      const effectiveness = getDrillEffectivenessMap(sessions);
      setDrillEffectiveness(effectiveness);
    };

    loadEffectiveness();
  }, [teamCode]);

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

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      // Extract index from uniqueId format: "drill-{index}-{drillId}"
      const oldIndex = Number(active.id.split('-')[1]);
      const newIndex = Number(over.id.split('-')[1]);

      setPlan((currentPlan) => {
        return {
          ...currentPlan,
          drillBlocks: arrayMove(currentPlan.drillBlocks, oldIndex, newIndex)
        };
      });
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
    const displayName = customPlanName.trim() || plan.name;
    const entry = {
      id: `${plan.id}_${practiceDate}`,
      planId: plan.id,
      planName: displayName,
      level: plan.level,
      duration: getTotalTime(),
      date: practiceDate
    };

    if (teamCode) {
      try {
        await savePracticeScheduleEntry(teamCode, entry);
        alert(`"${displayName}" scheduled for ${practiceDate} and synced to your team.`);
      } catch (error) {
        console.error(error);
        alert('Unable to save schedule to Firestore. Your plan was not scheduled.');
      }
    } else {
      const scheduleKey = 'practiceSchedule';
      const schedule = JSON.parse(localStorage.getItem(scheduleKey) || '[]');
      const updatedSchedule = [...schedule.filter(item => item.planId !== plan.id || item.date !== practiceDate), entry];
      localStorage.setItem(scheduleKey, JSON.stringify(updatedSchedule));
      alert(`"${displayName}" scheduled for ${practiceDate}`);
    }
  };

  const handlePrintExport = () => {
    // Create a plan object with full drill data for PDF export
    const displayName = customPlanName.trim() || plan.name;
    const planWithDrills = {
      ...plan,
      name: displayName, // Use custom name if provided
      drillBlocks: plan.drillBlocks.map(block => ({
        ...block,
        drill: getDrillById(block.drillId)
      }))
    };

    exportPracticePlanToPDF(planWithDrills, practiceDate);
  };

  const handleSwapDrill = (blockIndex) => {
    const currentDrill = getDrillById(plan.drillBlocks[blockIndex].drillId);
    setSwappingBlockIndex(blockIndex);
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
        <div className="header-content">
          <h1 className="page-title">{customPlanName.trim() || plan.name}</h1>
          <p className="template-note">
            {planId === 'new'
              ? 'Custom plan • Add drills from the library below'
              : 'Original template plan • Make changes and save as current practice'
            }
          </p>
        </div>
        <div className="plan-meta-header">
          <span className={`level-badge ${plan.level.toLowerCase()}`}>{plan.level}</span>
          <span className="total-time">⏱️ {getTotalTime()} min total</span>
          <div className="focus-tags-inline">
            {plan.focusAreas.map((area, idx) => (
              <span key={idx} className="focus-tag">{area}</span>
            ))}
          </div>
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

      <div className="practice-name-section">
        <label htmlFor="custom-name">
          {planId === 'new' ? 'Practice Name' : 'Custom Practice Name (Optional)'}
        </label>
        <input
          id="custom-name"
          type="text"
          placeholder={plan.name}
          value={customPlanName}
          onChange={(e) => setCustomPlanName(e.target.value)}
        />
        <p className="custom-name-hint">
          {planId === 'new'
            ? 'Give your custom practice a descriptive name (e.g., "Week 1 - Ball Handling")'
            : 'Leave blank to use the default template name. Custom names appear in your schedule and exported PDFs.'
          }
        </p>
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
        <button className="btn btn-outline" onClick={handlePrintExport}>
          📥 Download PDF
        </button>
      </div>

      <div className="add-drill-section">
        <button className="btn btn-outline" onClick={handleAddDrill}>
          ➕ Add Drill
        </button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="drill-blocks">
          {plan.drillBlocks.length === 0 ? (
            <div className="empty-drill-blocks">
              <div className="empty-icon">🏀</div>
              <h3>No drills added yet</h3>
              <p>Click "➕ Add Drill" above to start building your practice plan</p>
            </div>
          ) : (
            <SortableContext
              items={plan.drillBlocks.map((block, index) => `drill-${index}-${block.drillId}`)}
              strategy={verticalListSortingStrategy}
            >
              {plan.drillBlocks.map((block, index) => {
                const drill = getDrillById(block.drillId);
                const uniqueId = `drill-${index}-${block.drillId}`;
                return (
                  <SortableDrillBlock
                    key={uniqueId}
                    uniqueId={uniqueId}
                    block={block}
                    index={index}
                    drill={drill}
                    onDurationChange={handleDurationChange}
                    onSwap={handleSwapDrill}
                    onRemove={handleRemoveDrill}
                    isSwapping={swappingBlockIndex === index}
                    drillRecommendation={
                      swappingBlockIndex === index && Object.keys(drillEffectiveness).length > 0 && (
                        <DrillRecommendation
                          drillsData={getDrillsByCategory(drill?.category || 'all')
                            .filter(d => d.id !== block.drillId)
                            .map(d => ({
                              drillId: d.id,
                              effectiveness: drillEffectiveness[d.id] || null
                            }))
                            .sort((a, b) => (b.effectiveness || 0) - (a.effectiveness || 0))}
                          currentDrillId={block.drillId}
                          onSwap={(newDrillId) => {
                            const updatedPlan = { ...plan };
                            updatedPlan.drillBlocks[index].drillId = newDrillId;
                            setPlan(updatedPlan);
                            setIsEditing(true);
                            setSwappingBlockIndex(null);
                          }}
                        />
                      )
                    }
                  />
                );
              })}
            </SortableContext>
          )}
        </div>
      </DndContext>

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
