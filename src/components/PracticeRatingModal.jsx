import { useState } from 'react';
import './PracticeRatingModal.css';

const PracticeRatingModal = ({ isOpen, planName, onSubmit, onClose }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    onSubmit({
      rating: rating || null,
      feedback: feedback.trim()
    });
    setRating(0);
    setFeedback('');
  };

  const handleSkip = () => {
    onClose();
    setRating(0);
    setFeedback('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleSkip}>
      <div className="modal-content practice-rating-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">How was this practice?</h2>
        <p className="modal-subtitle">{planName}</p>

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
      </div>
    </div>
  );
};

export default PracticeRatingModal;
