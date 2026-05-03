import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { practicePlans } from '../data/practicePlans';
import { getNotes } from '../firebase/firestore';
import './Home.css';

const Home = ({ teamCode }) => {
  const [suggestedPlan, setSuggestedPlan] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadSuggestions = async () => {
      let notes = [];
      if (teamCode) {
        notes = await getNotes(teamCode);
      } else {
        notes = JSON.parse(localStorage.getItem('practiceNotes') || '[]');
      }

      const currentPractice = JSON.parse(localStorage.getItem('currentPractice') || 'null');
      if (isMounted) {
        setSuggestedPlan(getSuggestedPlan(currentPractice, notes));
      }
    };

    loadSuggestions();
    return () => {
      isMounted = false;
    };
  }, [teamCode]);

  const getSuggestedPlan = (currentPractice, notes) => {
    const lastPracticeNote = [...notes]
      .filter(note => note.type === 'practice')
      .sort((a, b) => new Date(b.timestamp || b.date) - new Date(a.timestamp || a.date))[0];

    const currentLevel = currentPractice?.plan?.level || 'Beginner';

    if (lastPracticeNote?.category) {
      const focusMatch = practicePlans.find(plan =>
        plan.level === currentLevel &&
        plan.focusAreas.some(area => area.toLowerCase().includes(lastPracticeNote.category.toLowerCase()))
      );
      if (focusMatch) return focusMatch;
    }

    if (currentPractice?.plan) {
      const currentIndex = practicePlans.findIndex(plan => plan.id === currentPractice.plan.id);
      const nextPlan = practicePlans.slice(currentIndex + 1).find(plan => plan.level === currentPractice.plan.level);
      if (nextPlan) return nextPlan;
    }

    return practicePlans.find(plan => plan.level === currentLevel) || practicePlans[0];
  };

  return (
    <div className="page home-page">
      <div className="home-header">
        <div className="logo">🏀</div>
        <h1 className="app-title">Basketball Practice Builder</h1>
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

        <Link to="/notes" className="action-card">
          <div className="action-icon">📝</div>
          <h3>Game & Practice Notes</h3>
          <p>Track progress and observations</p>
        </Link>
      </div>

      {suggestedPlan && (
        <div className="suggestion-card card">
          <h3>Suggested Next Plan</h3>
          <p>{suggestedPlan.name}</p>
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
