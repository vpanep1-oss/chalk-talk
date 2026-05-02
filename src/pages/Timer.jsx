import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDrillById } from '../data/drillLibrary';
import './Timer.css';

const Timer = ({ currentPlan }) => {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [currentDrillIndex, setCurrentDrillIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const timerRef = useRef(null);
  const audioContextRef = useRef(null);

  useEffect(() => {
    if (currentPlan && currentPlan.drillBlocks.length > 0) {
      setTimeRemaining(currentPlan.drillBlocks[0].duration * 60);
    }
  }, [currentPlan]);

  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleDrillComplete();
            return 0;
          }
          return prev - 1;
        });
        setTotalElapsed(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
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
      // Move to next drill
      const nextIndex = currentDrillIndex + 1;
      setCurrentDrillIndex(nextIndex);
      setTimeRemaining(currentPlan.drillBlocks[nextIndex].duration * 60);
    } else {
      // Practice complete
      setIsRunning(false);
      playSound(1200, 1000);
      alert('Practice Complete! Great work! 🏀');
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
      playSound(700, 100);
    }
  };

  const handlePrevious = () => {
    if (currentDrillIndex > 0) {
      const prevIndex = currentDrillIndex - 1;
      setCurrentDrillIndex(prevIndex);
      setTimeRemaining(currentPlan.drillBlocks[prevIndex].duration * 60);
      playSound(700, 100);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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
          <p className="empty-state-text">Select a practice plan to use the timer</p>
          <button className="btn btn-primary" onClick={() => navigate('/plans')}>
            Browse Plans
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
          <span>Drill {currentDrillIndex + 1} of {currentPlan.drillBlocks.length}</span>
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
      </div>

      <div className="drill-list-preview">
        <h3>Up Next</h3>
        <div className="drill-queue">
          {currentPlan.drillBlocks.slice(currentDrillIndex + 1, currentDrillIndex + 4).map((block, idx) => {
            const drill = getDrillById(block.drillId);
            return (
              <div key={idx} className="queue-item">
                <span className="queue-name">{drill?.name}</span>
                <span className="queue-duration">{block.duration} min</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timer;
