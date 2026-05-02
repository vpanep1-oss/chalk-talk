import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { practicePlans, getPracticePlansByLevel, getPracticePlansByDuration } from '../data/practicePlans';
import { SKILL_LEVELS } from '../data/drillLibrary';
import './PlanLibrary.css';

const PlanLibrary = ({ onSelectPlan }) => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');

  const getFilteredPlans = () => {
    let filtered = practicePlans;

    if (selectedLevel !== 'all') {
      filtered = filtered.filter(plan => plan.level === selectedLevel);
    }

    if (selectedDuration !== 'all') {
      filtered = filtered.filter(plan => plan.duration === parseInt(selectedDuration));
    }

    return filtered;
  };

  const handlePlanClick = (plan) => {
    onSelectPlan(plan);
    navigate(`/plan/${plan.id}`);
  };

  const filteredPlans = getFilteredPlans();

  return (
    <div className="page plan-library-page">
      <div className="page-header">
        <h1 className="page-title">Practice Plans</h1>
        <p className="page-subtitle">32 pre-loaded Breakthrough Basketball practice plans</p>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label>Skill Level</label>
          <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
            <option value="all">All Levels</option>
            <option value={SKILL_LEVELS.BEGINNER}>Beginner</option>
            <option value={SKILL_LEVELS.INTERMEDIATE}>Intermediate</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Duration</label>
          <select value={selectedDuration} onChange={(e) => setSelectedDuration(e.target.value)}>
            <option value="all">All Durations</option>
            <option value="60">60 minutes</option>
            <option value="75">75 minutes</option>
            <option value="90">90 minutes</option>
          </select>
        </div>
      </div>

      <div className="plan-count">
        Showing {filteredPlans.length} plan{filteredPlans.length !== 1 ? 's' : ''}
      </div>

      <div className="plans-grid">
        {filteredPlans.map(plan => (
          <div
            key={plan.id}
            className="plan-card"
            onClick={() => handlePlanClick(plan)}
          >
            <div className="plan-header">
              <h3 className="plan-name">{plan.name}</h3>
              <span className={`level-badge ${plan.level.toLowerCase()}`}>
                {plan.level}
              </span>
            </div>
            <div className="plan-meta">
              <span className="duration">⏱️ {plan.duration} min</span>
              <span className="drill-count">🏀 {plan.drillBlocks.length} drills</span>
            </div>
            <div className="focus-areas">
              {plan.focusAreas.slice(0, 3).map((area, idx) => (
                <span key={idx} className="focus-tag">{area}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanLibrary;
