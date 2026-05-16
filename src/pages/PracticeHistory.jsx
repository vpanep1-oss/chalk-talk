import { useState, useEffect } from 'react';
import { getPracticeHistory, deletePracticeSession } from '../firebase/firestore';
import './PracticeHistory.css';

const PracticeHistory = ({ teamCode }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, [teamCode]);

  const loadHistory = async () => {
    if (teamCode) {
      const sessions = await getPracticeHistory(teamCode, 50);
      setHistory(sessions);
    } else {
      const savedHistory = JSON.parse(localStorage.getItem('practiceHistory') || '[]');
      setHistory(savedHistory);
    }
  };

  const handleDelete = async (sessionId) => {
    if (!confirm('Delete this practice session? This cannot be undone.')) {
      return;
    }

    try {
      if (teamCode) {
        await deletePracticeSession(teamCode, sessionId);
      } else {
        const updatedHistory = history.filter(session => session.id !== sessionId);
        localStorage.setItem('practiceHistory', JSON.stringify(updatedHistory));
        setHistory(updatedHistory);
      }

      // Reload history to reflect changes
      await loadHistory();
    } catch (error) {
      console.error('Error deleting session:', error);
      alert('Unable to delete practice session. Please try again.');
    }
  };

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
                <div className="history-actions">
                  <span className="history-date">{formatDate(session.date || session.completedAt)}</span>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(session.id)}
                    title="Delete this practice session"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              {session.rating && (
                <div className="history-rating">
                  <strong>Rating:</strong> {'⭐'.repeat(session.rating)}
                </div>
              )}

              {session.note && (
                <div className="history-note">
                  <strong>Quick Note:</strong> {session.note}
                </div>
              )}

              {session.feedback && session.feedback !== session.note && (
                <div className="history-feedback">
                  <strong>What worked / What to improve:</strong> {session.feedback}
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
