import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDrillById } from '../data/drillLibrary';
import { savePracticeSession } from '../firebase/firestore';
import PracticeRatingModal from '../components/PracticeRatingModal';
import './Timer.css';

const Timer = ({ currentPractice, teamCode }) => {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [currentDrillIndex, setCurrentDrillIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const [practiceComplete, setPracticeComplete] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [sessionSaved, setSessionSaved] = useState(false);
  const [completionNote, setCompletionNote] = useState('');
  const [sessionSaving, setSessionSaving] = useState(false);
  const [sessionId, setSessionId] = useState(`session_${Date.now()}`);
  const [sessionRating, setSessionRating] = useState(null);
  const [sessionFeedback, setSessionFeedback] = useState('');
  const [expandedDrill, setExpandedDrill] = useState(null);
  const [practicedrills, setPracticeDrills] = useState([]); // Drills actually completed
  const timerRef = useRef(null);
  const audioContextRef = useRef(null);
  const lastVisibleRef = useRef(null);
  const isHiddenRef = useRef(false);
  const drillStartTimeRef = useRef(null); // Track when current drill started

  const currentPlan = currentPractice?.plan;

  useEffect(() => {
    if (currentPlan && currentPlan.drillBlocks.length > 0) {
      setSessionId(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`); // Generate unique ID
      setCurrentDrillIndex(0);
      setTotalElapsed(0);
      setTimeRemaining(currentPlan.drillBlocks[0].duration * 60);
      setIsRunning(false);
      setPracticeComplete(false);
      setSessionSaved(false);
      setCompletionNote('');
      setSessionSaving(false);
      setSessionRating(null);
      setSessionFeedback('');
      setPracticeDrills(currentPlan.drillBlocks.map((block, idx) => ({
        index: idx,
        drillId: block.drillId,
        duration: block.duration
      })));
    }
  }, [currentPlan]);

  // Handle page visibility - catch up timer when tab becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is being hidden - just record the time
        isHiddenRef.current = true;
        lastVisibleRef.current = Date.now();
      } else {
        // Tab is becoming visible again
        if (isHiddenRef.current && lastVisibleRef.current && isRunning) {
          // Calculate how much time passed while hidden and catch up
          const hiddenDuration = Math.floor((Date.now() - lastVisibleRef.current) / 1000);
          if (hiddenDuration > 0) {
            setTimeRemaining(prev => Math.max(0, prev - hiddenDuration));
            setTotalElapsed(prev => prev + hiddenDuration);
          }
        }
        isHiddenRef.current = false;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isRunning]);

  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      // Initialize drill start time on first run
      if (!drillStartTimeRef.current) {
        drillStartTimeRef.current = Date.now();
      }

      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          const newTime = Math.max(0, prev - 1);
          setTotalElapsed(prevTotal => prevTotal + 1);
          
          if (newTime === 0) {
            handleDrillComplete();
          }
          return newTime;
        });
      }, 1000);
    } else {
      // Reset drill start time when paused
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (!isRunning) {
        drillStartTimeRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, timeRemaining]);

  const playSound = (frequency = 800, duration = 200) => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContextRef.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + duration / 1000);

      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + duration / 1000);
    } catch (error) {
      console.log('Audio not available:', error);
    }
  };

  const triggerHaptic = () => {
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  };

  const handleDrillComplete = () => {
    playSound(1000, 500);
    triggerHaptic();

    if (currentDrillIndex < currentPlan.drillBlocks.length - 1) {
      const nextIndex = currentDrillIndex + 1;
      setCurrentDrillIndex(nextIndex);
      setTimeRemaining(currentPlan.drillBlocks[nextIndex].duration * 60);
    } else {
      setIsRunning(false);
      setPracticeComplete(true);
      setShowRatingModal(true);
      playSound(1200, 1000);
    }
  };

  const handleRatingSubmit = (ratingData) => {
    setSessionRating(ratingData.rating);
    setSessionFeedback(ratingData.feedback);
    if (ratingData.drills) {
      setPracticeDrills(ratingData.drills);
    }
    setShowRatingModal(false);
    saveSession(ratingData.rating, ratingData.feedback, ratingData.drills);
  };

  const handleSkipRating = () => {
    setShowRatingModal(false);
    saveSession(null, '', null);
  };

  const saveSession = async (rating = null, feedback = '', modifiedDrills = null) => {
    if (sessionSaved || !currentPlan) return;

    const drillsToSave = modifiedDrills && modifiedDrills.length > 0 ? modifiedDrills : currentPlan.drillBlocks;

    const session = {
      id: sessionId,
      planId: currentPlan.id,
      planName: currentPlan.name,
      date: currentPractice?.date || new Date().toISOString().split('T')[0],
      durationMinutes: drillsToSave.reduce((sum, block) => sum + block.duration, 0),
      completedAt: new Date().toISOString(),
      drills: drillsToSave.map(block => ({
        drillId: block.drillId,
        duration: block.duration
      })),
      note: completionNote || feedback,
      rating: rating,
      feedback: feedback,
      totalDrills: drillsToSave.length,
      teamCode: teamCode || null
    };

    setSessionSaving(true);

    try {
      if (teamCode) {
        await savePracticeSession(teamCode, session);
      } else {
        const historyKey = 'practiceHistory';
        const history = JSON.parse(localStorage.getItem(historyKey) || '[]');
        localStorage.setItem(historyKey, JSON.stringify([session, ...history]));
      }
      setSessionSaved(true);
      alert('Practice session saved!');
    } catch (error) {
      console.error('Unable to save practice history', error);
      alert('Unable to save practice history. Please try again.');
    } finally {
      setSessionSaving(false);
    }
  };

  const handlePlayPause = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      playSound(600, 100);
    }
  };

  const handleNext = () => {
    if (currentDrillIndex < currentPlan.drillBlocks.length - 1) {
      const nextIndex = currentDrillIndex + 1;
      setCurrentDrillIndex(nextIndex);
      setTimeRemaining(currentPlan.drillBlocks[nextIndex].duration * 60);
      drillStartTimeRef.current = null;
      playSound(700, 100);
    }
  };

  const handlePrevious = () => {
    if (currentDrillIndex > 0) {
      const prevIndex = currentDrillIndex - 1;
      setCurrentDrillIndex(prevIndex);
      setTimeRemaining(currentPlan.drillBlocks[prevIndex].duration * 60);
      drillStartTimeRef.current = null;
      playSound(700, 100);
    }
  };

  const handleCompletePractice = () => {
    setIsRunning(false);
    setPracticeComplete(true);
    setShowRatingModal(true);
    playSound(1200, 1000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatPracticeDate = (dateString) => {
    if (!dateString) return 'No date set';
    return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const formatTotalTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const getProgress = () => {
    if (!currentPlan) return 0;
    const currentDrill = currentPlan.drillBlocks[currentDrillIndex];
    const totalSeconds = currentDrill.duration * 60;
    return ((totalSeconds - timeRemaining) / totalSeconds) * 100;
  };

  if (!currentPlan) {
    return (
      <div className="page timer-page">
        <div className="empty-state">
          <div className="empty-state-icon">⏱️</div>
          <h2 className="empty-state-title">No practice plan selected</h2>
          <p className="empty-state-text">Choose a confirmed practice plan from Current Practice or Plan Editor.</p>
          <button className="btn btn-primary" onClick={() => navigate('/current')}>
            Go to Current Practice
          </button>
        </div>
      </div>
    );
  }

  const currentDrill = getDrillById(currentPlan.drillBlocks[currentDrillIndex].drillId);

  return (
    <div className="page timer-page">
      <div className="timer-header">
        <h2 className="plan-name">{currentPlan.name}</h2>
        <div className="practice-meta">
          <span>{formatPracticeDate(currentPractice.date)}</span>
          <span>Total: {formatTotalTime(totalElapsed)}</span>
        </div>
      </div>

      <div className="timer-main">
        <div className="current-drill-info">
          <h1 className="drill-name">{currentDrill?.name}</h1>
          <p className="drill-category">{currentDrill?.category}</p>
        </div>

        <div className="timer-display">
          <div className="time-circle">
            <svg viewBox="0 0 200 200" className="progress-ring">
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="var(--surface-light)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="var(--primary)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 90}`}
                strokeDashoffset={`${2 * Math.PI * 90 * (1 - getProgress() / 100)}`}
                transform="rotate(-90 100 100)"
                style={{ transition: 'stroke-dashoffset 0.5s ease' }}
              />
            </svg>
            <div className="time-text">{formatTime(timeRemaining)}</div>
          </div>
        </div>

        {currentDrill?.description && (
          <p className="drill-description">{currentDrill.description}</p>
        )}
      </div>

      <div className="timer-controls">
        <button
          className="control-btn"
          onClick={handlePrevious}
          disabled={currentDrillIndex === 0}
        >
          ⏮️ Previous
        </button>

        <button
          className={`control-btn play-pause ${isRunning ? 'playing' : ''}`}
          onClick={handlePlayPause}
        >
          {isRunning ? '⏸️ Pause' : '▶️ Play'}
        </button>

        <button
          className="control-btn"
          onClick={handleNext}
          disabled={currentDrillIndex === currentPlan.drillBlocks.length - 1}
        >
          Next ⏭️
        </button>

        <button
          className="control-btn control-btn-complete"
          onClick={handleCompletePractice}
          title="Skip remaining drills and complete practice"
        >
          ✓ Complete
        </button>
      </div>

      {practiceComplete && (
        <div className="practice-summary-card card">
          <h3>Practice Complete</h3>
          <p>
            {sessionSaved 
              ? 'Session saved! View your history or start another practice.' 
              : 'Rate your practice and add notes.'}
          </p>
          {!sessionSaved && (
            <textarea
              className="practice-note-input"
              rows="3"
              placeholder="Add a quick summary or coaching note (optional)"
              value={completionNote}
              onChange={(e) => setCompletionNote(e.target.value)}
            />
          )}
          <div className="practice-summary-actions">
            {sessionSaved && (
              <>
                <button className="btn btn-secondary" onClick={() => navigate('/history')}>
                  View History
                </button>
                <button className="btn btn-primary" onClick={() => navigate('/plans')}>
                  Start New Practice
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <PracticeRatingModal
        isOpen={showRatingModal}
        planName={currentPlan?.name}
        drills={practicedrills}
        onSubmit={handleRatingSubmit}
        onClose={handleSkipRating}
      />

      <div className="practice-outline-section">
        <h3>Practice Outline</h3>
        <div className="practice-drills-list">
          {currentPlan.drillBlocks.map((block, idx) => {
            const drill = getDrillById(block.drillId);
            const isCurrentDrill = idx === currentDrillIndex;
            const isDrillCompleted = idx < currentDrillIndex;
            const isExpanded = expandedDrill === idx;

            return (
              <div
                key={idx}
                className={`practice-drill-item ${isCurrentDrill ? 'current' : ''} ${isDrillCompleted ? 'completed' : ''}`}
              >
                <div
                  className="drill-item-header"
                  onClick={() => setExpandedDrill(isExpanded ? null : idx)}
                >
                  <div className="drill-item-info">
                    <span className="drill-number">{idx + 1}.</span>
                    <span className="drill-item-name">{drill?.name}</span>
                  </div>
                  <div className="drill-item-meta">
                    <span className="drill-item-duration">{block.duration} min</span>
                    <span className={`drill-item-toggle ${isExpanded ? 'expanded' : ''}`}>▼</span>
                  </div>
                </div>

                {isExpanded && (
                  <div className="drill-item-details">
                    <p className="drill-detail-category">{drill?.category}</p>
                    {drill?.description && (
                      <p className="drill-detail-description">{drill.description}</p>
                    )}
                    {drill?.details && (
                      <div className="drill-detail-full">
                        <p>{drill.details}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timer;
