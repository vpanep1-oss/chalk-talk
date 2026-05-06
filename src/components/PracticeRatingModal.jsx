import { useState } from 'react';
import { getDrillById, getDrillsByCategory } from '../data/drillLibrary';
import './PracticeRatingModal.css';

const PracticeRatingModal = ({ isOpen, planName, onSubmit, onClose, drills = [] }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [practiceDrills, setPracticeDrills] = useState(drills);
  const [swappingIndex, setSwappingIndex] = useState(null);
  const [swapCategoryFilter, setSwapCategoryFilter] = useState('');

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleDrillSwap = (index) => {
    const currentDrill = getDrillById(practiceDrills[index]?.drillId);
    setSwapCategoryFilter(currentDrill?.category || '');
    setSwappingIndex(index);
  };

  const handleSelectReplacement = (newDrillId) => {
    const newDrills = [...practiceDrills];
    newDrills[swappingIndex] = {
      ...newDrills[swappingIndex],
      drillId: newDrillId
    };
    setPracticeDrills(newDrills);
    setSwappingIndex(null);
  };

  const handleSubmit = () => {
    onSubmit({
      rating: rating || null,
      feedback: feedback.trim(),
      drills: practiceDrills
    });
    setRating(0);
    setFeedback('');
    setPracticeDrills(drills);
    setSwappingIndex(null);
  };

  const handleSkip = () => {
    onClose();
    setRating(0);
    setFeedback('');
    setPracticeDrills(drills);
    setSwappingIndex(null);
  };

  const getSwapOptions = () => {
    if (!swapCategoryFilter) return [];
    const allDrills = getDrillsByCategory(swapCategoryFilter);
    return allDrills.filter(drill => {
      // Don't show drills already in the practice
      return !practiceDrills.some(pd => pd.drillId === drill.id);
    }).slice(0, 5); // Show top 5 alternatives
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleSkip}>
      <div className="modal-content practice-rating-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Practice Review</h2>
        <p className="modal-subtitle">{planName}</p>

        {swappingIndex !== null && (
          <div className="drill-swap-section">
            <h3 className="swap-title">Select replacement drill</h3>
            <div className="swap-options">
              {getSwapOptions().length > 0 ? (
                getSwapOptions().map(drill => (
                  <button
                    key={drill.id}
                    className="swap-option"
                    onClick={() => handleSelectReplacement(drill.id)}
                  >
                    <div className="swap-drill-name">{drill.name}</div>
                    <div className="swap-drill-category">{drill.category}</div>
                  </button>
                ))
              ) : (
                <p className="no-swap-options">No alternative drills available</p>
              )}
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => setSwappingIndex(null)}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              Cancel
            </button>
          </div>
        )}

        {swappingIndex === null && (
          <>
            <div className="drills-review-section">
              <label className="review-label">Drills in this practice</label>
              <div className="drills-review-list">
                {practiceDrills.map((drill, idx) => {
                  const drillData = getDrillById(drill.drillId);
                  return (
                    <div key={idx} className="drills-review-item">
                      <div className="review-drill-info">
                        <div className="review-drill-name">{drillData?.name}</div>
                        <div className="review-drill-meta">{drill.duration} min</div>
                      </div>
                      <button
                        className="swap-btn"
                        onClick={() => handleDrillSwap(idx)}
                        title="Replace this drill"
                      >
                        🔄
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rating-section">
              <label className="rating-label">Rate this practice</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className={`star ${rating >= star ? 'active' : ''}`}
                    onClick={() => handleRatingClick(star)}
                    title={`Rate ${star} stars`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="rating-display">{rating}/5 stars</p>
              )}
            </div>

            <div className="feedback-section">
              <label htmlFor="feedback" className="feedback-label">What worked best? What to improve?</label>
              <textarea
                id="feedback"
                className="feedback-input"
                placeholder="e.g., 'Great defensive intensity. Transition game needs work.'"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                maxLength={250}
              />
              <p className="char-count">{feedback.length}/250</p>
            </div>

            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={handleSkip}>
                Skip
              </button>
              <button 
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={rating === 0}
              >
                Save Feedback
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PracticeRatingModal;
