import { getDrillById } from '../data/drillLibrary';
import './DrillRecommendation.css';

const DrillRecommendation = ({ drillsData, currentDrillId, onSwap, isDarkMode }) => {
  if (!drillsData || drillsData.length === 0) {
    return null;
  }

  return (
    <div className="drill-recommendation">
      <div className="recommendation-header">
        <span className="recommendation-icon">💡</span>
        <span className="recommendation-label">Better alternatives</span>
      </div>
      <div className="recommendation-list">
        {drillsData.slice(0, 3).map((drillItem, idx) => {
          const drill = getDrillById(drillItem.drillId);
          if (!drill) return null;

          return (
            <div key={idx} className="recommendation-item">
              <div className="recommendation-drill-info">
                <h4 className="recommendation-drill-name">{drill.name}</h4>
                <p className="recommendation-drill-category">{drill.category}</p>
                {drillItem.effectiveness !== null && (
                  <div className="effectiveness-bar">
                    <div 
                      className="effectiveness-fill"
                      style={{ width: `${(drillItem.effectiveness || 0) * 100}%` }}
                    />
                  </div>
                )}
              </div>
              {drillItem.effectiveness !== null && (
                <span className="effectiveness-score">
                  {Math.round((drillItem.effectiveness || 0) * 100)}%
                </span>
              )}
              <button
                className="swap-btn"
                onClick={() => onSwap(drillItem.drillId)}
                title={`Swap for ${drill.name}`}
              >
                ↔️
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DrillRecommendation;
