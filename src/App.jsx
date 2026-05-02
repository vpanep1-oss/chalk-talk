import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PlanLibrary from './pages/PlanLibrary';
import PlanEditor from './pages/PlanEditor';
import DrillLibrary from './pages/DrillLibrary';
import Timer from './pages/Timer';
import GameNotes from './pages/GameNotes';
import Settings from './pages/Settings';
import './styles/App.css';

function App() {
  const [currentPlan, setCurrentPlan] = useState(null);
  const [teamCode, setTeamCode] = useState(null);

  // Check for saved team code on mount
  useEffect(() => {
    const savedTeamCode = localStorage.getItem('teamCode');
    if (savedTeamCode) {
      setTeamCode(savedTeamCode);
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<PlanLibrary onSelectPlan={setCurrentPlan} />} />
          <Route path="/plan/:planId" element={<PlanEditor currentPlan={currentPlan} setCurrentPlan={setCurrentPlan} />} />
          <Route path="/drills" element={<DrillLibrary />} />
          <Route path="/timer" element={<Timer currentPlan={currentPlan} />} />
          <Route path="/notes" element={<GameNotes />} />
          <Route path="/settings" element={<Settings teamCode={teamCode} setTeamCode={setTeamCode} />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
