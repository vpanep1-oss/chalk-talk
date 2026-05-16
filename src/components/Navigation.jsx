import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="nav-item" end>
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Home</span>
      </NavLink>
      <NavLink to="/plans" className="nav-item">
        <span className="nav-icon">📋</span>
        <span className="nav-label">Plans</span>
      </NavLink>
      <NavLink to="/current" className="nav-item">
        <span className="nav-icon">🏃</span>
        <span className="nav-label">Current</span>
      </NavLink>
      <NavLink to="/drills" className="nav-item">
        <span className="nav-icon">🏀</span>
        <span className="nav-label">Drills</span>
      </NavLink>
      <NavLink to="/timer" className="nav-item">
        <span className="nav-icon">⏱️</span>
        <span className="nav-label">Timer</span>
      </NavLink>
      <NavLink to="/history" className="nav-item">
        <span className="nav-icon">📚</span>
        <span className="nav-label">History</span>
      </NavLink>
      <NavLink to="/schedule" className="nav-item">
        <span className="nav-icon">🗓️</span>
        <span className="nav-label">Schedule</span>
      </NavLink>
      <NavLink to="/notes" className="nav-item">
        <span className="nav-icon">📝</span>
        <span className="nav-label">Notes</span>
      </NavLink>
      <NavLink to="/settings" className="nav-item">
        <span className="nav-icon">⚙️</span>
        <span className="nav-label">Settings</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
