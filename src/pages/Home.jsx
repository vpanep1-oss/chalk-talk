import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { practicePlans } from '../data/practicePlans';
import { getNotes, getPracticeHistory, getRecommendedNextPlan, getLowRatedDrills } from '../firebase/firestore';
import './Home.css';

const Home = ({ teamCode }) => {
  const [suggestedPlan, setSuggestedPlan] = useState(null);
  const [effectivenessInfo, setEffectivenessInfo] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadSuggestions = async () => {
      let notes = [];
      let sessions = [];

      if (teamCode) {
        notes = await getNotes(teamCode);
        sessions = await getPracticeHistory(teamCode, 50);
      } else {
        notes = JSON.parse(localStorage.getItem('practiceNotes') || '[]');
        sessions = JSON.parse(localStorage.getItem('practiceHistory') || '[]');
      }

      const currentPractice = JSON.parse(localStorage.getItem('currentPractice') || 'null');
      if (isMounted) {
        const result = getSuggestedPlan(currentPractice, notes, sessions);
        setSuggestedPlan(result.plan);
        setEffectivenessInfo(result.reason);
      }
    };

    loadSuggestions();
    return () => {
      isMounted = false;
    };
  }, [teamCode]);

  const getSuggestedPlan = (currentPractice, notes, sessions) => {
    const currentLevel = currentPractice?.plan?.level || 'Beginner';
    const lowRatedDrills = getLowRatedDrills(sessions);

    // Get recently completed plan IDs to avoid suggesting the same ones
    const recentPlanIds = new Set(
      sessions
        .slice(0, 5) // Last 5 practices
        .map(s => s.planId)
        .filter(Boolean)
    );

    // Check for high-performing sessions (avg rating >= 4)
    const recentRatings = sessions
      .slice(0, 3)
      .map(s => s.rating)
      .filter(r => r != null);
    const avgRating = recentRatings.length > 0
      ? recentRatings.reduce((a, b) => a + b, 0) / recentRatings.length
      : 0;
    const shouldLevelUp = avgRating >= 4 && currentLevel === 'Beginner';

    // Try smart recommendation engine first (game notes)
    const gameNotes = notes.filter(n => n.type === 'game');
    if (gameNotes.length > 0) {
      const smartRec = getRecommendedNextPlan(sessions, practicePlans, notes, currentLevel);
      if (smartRec && !recentPlanIds.has(smartRec.id)) {
        return { plan: smartRec, reason: '💡 Based on recent game performance' };
      }
    }

    // Level up if performing well
    if (shouldLevelUp) {
      const intermediatePlan = practicePlans
        .filter(p => p.level === 'Intermediate' && !recentPlanIds.has(p.id))[0];
      if (intermediatePlan) {
        return { plan: intermediatePlan, reason: '🎯 Ready for next level - great performance!' };
      }
    }

    // Try progression (next plan in sequence, avoiding recent ones)
    const lastSession = sessions[0];
    if (lastSession?.planId) {
      const lastPlanIndex = practicePlans.findIndex(plan => plan.id === lastSession.planId);
      if (lastPlanIndex >= 0) {
        // Find next plan at same or higher level that wasn't recently done
        const nextPlans = practicePlans
          .slice(lastPlanIndex + 1)
          .filter(plan =>
            (plan.level === currentLevel || (shouldLevelUp && plan.level === 'Intermediate')) &&
            !recentPlanIds.has(plan.id)
          );
        if (nextPlans.length > 0) {
          return { plan: nextPlans[0], reason: '⏭️ Natural progression' };
        }
      }
    }

    // Fall back to focus area matching from recent practice notes
    const lastPracticeNote = [...notes]
      .filter(note => note.type === 'practice')
      .sort((a, b) => new Date(b.timestamp || b.date) - new Date(a.timestamp || a.date))[0];

    if (lastPracticeNote?.category) {
      const focusMatch = practicePlans.find(plan =>
        plan.level === currentLevel &&
        !recentPlanIds.has(plan.id) &&
        plan.focusAreas.some(area => area.toLowerCase().includes(lastPracticeNote.category.toLowerCase()))
      );
      if (focusMatch) {
        return { plan: focusMatch, reason: `📌 Focuses on ${lastPracticeNote.category}` };
      }
    }

    // Default: first plan at current level that wasn't recently done
    const defaultPlan = practicePlans.find(plan =>
      plan.level === currentLevel && !recentPlanIds.has(plan.id)
    ) || practicePlans[0];
    return { plan: defaultPlan, reason: '' };
  };

  return (
    <div className="page home-page">
      <div className="home-header">
        <div className="logo">🏀</div>
        <h1 className="app-title">Chalk Talk</h1>
        <p className="app-subtitle">Coach Jim Huber's Breakthrough Basketball Practice Plans</p>
      </div>

      <div className="quick-actions">
        <Link to="/plans" className="action-card">
          <div className="action-icon">📋</div>
          <h3>Practice Plans</h3>
          <p>Browse 32 pre-loaded practice plans</p>
        </Link>

        <Link to="/current" className="action-card">
          <div className="action-icon">🏃</div>
          <h3>Current Practice</h3>
          <p>Open the practice you confirmed for today</p>
        </Link>

        <Link to="/schedule" className="action-card">
          <div className="action-icon">🗓️</div>
          <h3>Practice Schedule</h3>
          <p>Review upcoming practice plans by date</p>
        </Link>

        <Link to="/drills" className="action-card">
          <div className="action-icon">🏀</div>
          <h3>Drill Library</h3>
          <p>Search and filter basketball drills</p>
        </Link>

        <Link to="/timer" className="action-card">
          <div className="action-icon">⏱️</div>
          <h3>Practice Timer</h3>
          <p>Run your confirmed practice live</p>
        </Link>

        <Link to="/history" className="action-card">
          <div className="action-icon">📚</div>
          <h3>Practice History</h3>
          <p>View completed practices and your notes</p>
        </Link>

        <Link to="/notes" className="action-card">
          <div className="action-icon">📝</div>
          <h3>Game & Practice Notes</h3>
          <p>Track progress and observations</p>
        </Link>
      </div>

      {suggestedPlan && (
        <div className="suggestion-card card">
          <h3>Suggested Next Plan</h3>
          <p className="suggested-plan-name">{suggestedPlan.name}</p>
          {effectivenessInfo && (
            <p className="effectiveness-info">{effectivenessInfo}</p>
          )}
          <div className="suggestion-actions">
            <Link to={`/plan/${suggestedPlan.id}`} className="btn btn-primary">
              View Plan
            </Link>
          </div>
        </div>
      )}

      <div className="home-footer">
        <p className="text-muted text-center">
          Youth basketball practice planning made simple
        </p>
      </div>
    </div>
  );
};

export default Home;
