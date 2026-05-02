import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
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

        <Link to="/drills" className="action-card">
          <div className="action-icon">🏀</div>
          <h3>Drill Library</h3>
          <p>Search and filter basketball drills</p>
        </Link>

        <Link to="/timer" className="action-card">
          <div className="action-icon">⏱️</div>
          <h3>Practice Timer</h3>
          <p>Run your practice with live timer</p>
        </Link>

        <Link to="/notes" className="action-card">
          <div className="action-icon">📝</div>
          <h3>Game & Practice Notes</h3>
          <p>Track progress and observations</p>
        </Link>
      </div>

      <div className="home-footer">
        <p className="text-muted text-center">
          Youth basketball practice planning made simple
        </p>
      </div>
    </div>
  );
};

export default Home;
