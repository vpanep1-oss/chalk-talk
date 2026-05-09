import { useState } from 'react';
import { syncLocalDataToFirestore } from '../firebase/firestore';
import './Settings.css';

const Settings = ({ teamCode, setTeamCode }) => {
  const [inputTeamCode, setInputTeamCode] = useState(teamCode || '');
  const [soundEnabled, setSoundEnabled] = useState(
    localStorage.getItem('soundEnabled') !== 'false'
  );
  const [hapticsEnabled, setHapticsEnabled] = useState(
    localStorage.getItem('hapticsEnabled') !== 'false'
  );
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSaveTeamCode = async () => {
    if (inputTeamCode.trim()) {
      localStorage.setItem('teamCode', inputTeamCode);
      setTeamCode(inputTeamCode);
      setIsSyncing(true);

      try {
        await syncLocalDataToFirestore(inputTeamCode);
        alert('Team code saved and local data synced to Firestore.');
      } catch (error) {
        console.error(error);
        alert('Team code saved, but syncing failed.');
      } finally {
        setIsSyncing(false);
      }
    }
  };

  const handleClearTeamCode = () => {
    if (confirm('Remove team code? Your data will only be stored locally.')) {
      localStorage.removeItem('teamCode');
      setTeamCode(null);
      setInputTeamCode('');
    }
  };

  const handleToggleSound = () => {
    const newValue = !soundEnabled;
    setSoundEnabled(newValue);
    localStorage.setItem('soundEnabled', newValue.toString());
  };

  const handleToggleHaptics = () => {
    const newValue = !hapticsEnabled;
    setHapticsEnabled(newValue);
    localStorage.setItem('hapticsEnabled', newValue.toString());
  };

  const handleClearAllData = () => {
    if (confirm('Clear all local data? This cannot be undone.')) {
      localStorage.clear();
      setTeamCode(null);
      setInputTeamCode('');
      setSoundEnabled(true);
      setHapticsEnabled(true);
      alert('All data cleared.');
    }
  };

  return (
    <div className="page settings-page">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Configure your app preferences</p>
      </div>

      <div className="settings-section card">
        <h2 className="section-title">Team Sync</h2>
        <p className="section-description">
          Enter a team code to sync your practice plans and notes across multiple devices.
          Share this code with assistant coaches to collaborate.
        </p>

        <div className="team-code-input">
          <input
            type="text"
            placeholder="Enter team code (e.g., eagles2024)"
            value={inputTeamCode}
            onChange={(e) => setInputTeamCode(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSaveTeamCode} disabled={isSyncing}>
            {isSyncing ? 'Syncing...' : 'Save Code'}
          </button>
        </div>

        {teamCode && (
          <div className="current-code">
            <span className="code-label">Current code:</span>
            <span className="code-value">{teamCode}</span>
            <button className="btn-link" onClick={handleClearTeamCode}>
              Remove
            </button>
          </div>
        )}
      </div>

      <div className="settings-section card">
        <h2 className="section-title">Timer Settings</h2>

        <div className="setting-item">
          <div className="setting-info">
            <h3>Sound Alerts</h3>
            <p>Play sound when drill timer completes</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={soundEnabled}
              onChange={handleToggleSound}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <h3>Haptic Feedback</h3>
            <p>Vibrate when drill timer completes (Android only)</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={hapticsEnabled}
              onChange={handleToggleHaptics}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-section card">
        <h2 className="section-title">About</h2>
        <div className="about-info">
          <p>
            <strong>Chalk Talk</strong><br />
            Version 1.0.0
          </p>
          <p>
            Built with Coach Jim Huber's Breakthrough Basketball practice plans.
            Designed for youth basketball coaches to plan, customize, and run
            effective practices.
          </p>
          <p className="text-muted">
            32 pre-loaded practice plans • 100+ basketball drills •
            Mobile-first design • Works offline
          </p>
        </div>
      </div>

      <div className="settings-section card danger-zone">
        <h2 className="section-title">Data Management</h2>
        <p className="section-description">
          Careful! This action cannot be undone.
        </p>
        <button className="btn btn-ghost danger-btn" onClick={handleClearAllData}>
          🗑️ Clear All Data
        </button>
      </div>
    </div>
  );
};

export default Settings;
