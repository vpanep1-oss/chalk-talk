import { useState } from 'react';
import { drills as drillLibrary, getDrillsByCategory, DRILL_CATEGORIES } from '../data/drillLibrary';
import './DrillSelectorModal.css';

const DrillSelectorModal = ({ isOpen, onClose, onSelectDrill, initialCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const getFilteredDrills = () => {
    let filtered = selectedCategory === 'all'
      ? drillLibrary
      : getDrillsByCategory(selectedCategory);

    if (searchTerm) {
      filtered = filtered.filter(drill =>
        drill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drill.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredDrills = getFilteredDrills();

  const handleDrillClick = (drill) => {
    onSelectDrill(drill);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content drill-selector-modal">
        <div className="modal-header">
          <h2>Select a Drill</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-filters">
          <input
            type="text"
            placeholder="Search drills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="all">All Categories</option>
            {Object.values(DRILL_CATEGORIES).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="drill-count">
          {filteredDrills.length} drill{filteredDrills.length !== 1 ? 's' : ''}
        </div>

        <div className="drills-list">
          {filteredDrills.map(drill => (
            <div
              key={drill.id}
              className="drill-option"
              onClick={() => handleDrillClick(drill)}
            >
              <div className="drill-option-header">
                <h4>{drill.name}</h4>
                <span className="drill-category-badge">{drill.category}</span>
              </div>
              {drill.description && (
                <p className="drill-option-description">{drill.description}</p>
              )}
              <div className="drill-option-meta">
                <span>⏱️ {drill.duration} min</span>
                <span className="skill-level">{drill.skillLevel}</span>
              </div>
            </div>
          ))}

          {filteredDrills.length === 0 && (
            <div className="empty-state">
              <p>No drills found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrillSelectorModal;
