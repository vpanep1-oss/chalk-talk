import { useState, useEffect } from 'react';
import { getPracticeHistory } from '../firebase/firestore';
import './PracticeHistory.css';

const PracticeHistory = ({ teamCode }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      if (teamCode) {
        const sessions = await getPracticeHistory(teamCode, 50);
        setHistory(sessions);
      } else {
        const savedHistory = JSON.parse(localStorage.getItem('practiceHistory') || '[]');
        setHistory(savedHistory);
      }
    };

    loadHistory();
  }, [teamCode]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="page practice-history-page">
      <div className="page-header">
        <h1 className="page-title">Practice History</h1>
        <p className="page-subtitle">Review completed practice sessions and notes.</p>
      </div>

      {history.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📚</div>
          <h2 className="empty-state-title">No practice history yet</h2>
          <p className="empty-state-text">Run a practice and save the session to record it here.</p>
        </div>
      ) : (
        <div className="history-list">
          {history.map((session) => (
            <div key={session.id || `${session.planId}_${session.date}`} className="history-card card">
              <div className="history-row">
                <div>
                  <h3>{session.planName}</h3>
                  <p className="text-muted">{session.totalDrills || session.drills?.length} drills • {session.durationMinutes} min</p>
                </div>
                <div className="history-date">
                  <span>{formatDate(session.date || session.completedAt)}</span>
                </div>
              </div>
              {session.note && (
                <div className="history-note">
                  <strong>Note:</strong> {session.note}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PracticeHistory;
