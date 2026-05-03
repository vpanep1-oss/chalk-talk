import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import PlanLibrary from './pages/PlanLibrary';
import PlanEditor from './pages/PlanEditor';
import CurrentPractice from './pages/CurrentPractice';
import PracticeSchedule from './pages/PracticeSchedule';
import PracticeHistory from './pages/PracticeHistory';
import DrillLibrary from './pages/DrillLibrary';
import Timer from './pages/Timer';
import GameNotes from './pages/GameNotes';
import Settings from './pages/Settings';
import './styles/App.css';

function App() {
  const [currentPractice, setCurrentPractice] = useState(null);
  const [teamCode, setTeamCode] = useState(null);

  useEffect(() => {
    const savedTeamCode = localStorage.getItem('teamCode');
    if (savedTeamCode) {
      setTeamCode(savedTeamCode);
    }

    const savedPractice = localStorage.getItem('currentPractice');
    if (savedPractice) {
      try {
        setCurrentPractice(JSON.parse(savedPractice));
      } catch (error) {
        console.warn('Could not parse saved current practice:', error);
      }
    }
  }, []);

  const saveCurrentPractice = (practice) => {
    setCurrentPractice(practice);
    localStorage.setItem('currentPractice', JSON.stringify(practice));
  };

  const clearCurrentPractice = () => {
    setCurrentPractice(null);
    localStorage.removeItem('currentPractice');
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home teamCode={teamCode} />} />
          <Route path="/plans" element={<PlanLibrary />} />
          <Route
            path="/plan/:planId"
            element={<PlanEditor currentPractice={currentPractice} saveCurrentPractice={saveCurrentPractice} teamCode={teamCode} />}
          />
          <Route
            path="/current"
            element={<CurrentPractice currentPractice={currentPractice} clearCurrentPractice={clearCurrentPractice} />}
          />
          <Route path="/schedule" element={<PracticeSchedule teamCode={teamCode} />} />
          <Route path="/history" element={<PracticeHistory teamCode={teamCode} />} />
          <Route path="/drills" element={<DrillLibrary />} />
          <Route path="/timer" element={<Timer currentPractice={currentPractice} teamCode={teamCode} />} />
          <Route path="/notes" element={<GameNotes />} />
          <Route path="/settings" element={<Settings teamCode={teamCode} setTeamCode={setTeamCode} />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
