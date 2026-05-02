import { useState } from 'react';
import { drills, DRILL_CATEGORIES, getDrillsByCategory, searchDrills } from '../data/drillLibrary';
import './DrillLibrary.css';

const DrillLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedDrill, setExpandedDrill] = useState(null);

  const getFilteredDrills = () => {
    let filtered = drills;

    if (searchQuery) {
      filtered = searchDrills(searchQuery);
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(drill => drill.category === selectedCategory);
    }

    return filtered;
  };

  const filteredDrills = getFilteredDrills();

  const toggleDrillDetails = (drillId) => {
    setExpandedDrill(expandedDrill === drillId ? null : drillId);
  };

  return (
    <div className="page drill-library-page">
      <div className="page-header">
        <h1 className="page-title">Drill Library</h1>
        <p className="page-subtitle">Browse all basketball drills from Breakthrough Basketball</p>
      </div>

      <div className="drill-search">
        <input
          type="text"
          placeholder="Search drills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-filter">
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
        {filteredDrills.length} drill{filteredDrills.length !== 1 ? 's' : ''} found
      </div>

      <div className="drills-list">
        {filteredDrills.map(drill => (
          <div
            key={drill.id}
            className={`drill-card ${expandedDrill === drill.id ? 'expanded' : ''}`}
            onClick={() => toggleDrillDetails(drill.id)}
          >
            <div className="drill-card-header">
              <div className="drill-card-info">
                <h3 className="drill-card-name">{drill.name}</h3>
                <span className="drill-card-category">{drill.category}</span>
              </div>
              {drill.duration && (
                <span className="drill-card-duration">⏱️ {drill.duration} min</span>
              )}
            </div>

            <p className="drill-card-description">{drill.description}</p>

            {drill.skillLevel && (
              <div className="skill-levels">
                {drill.skillLevel.map((level, idx) => (
                  <span key={idx} className={`skill-badge ${level.toLowerCase()}`}>
                    {level}
                  </span>
                ))}
              </div>
            )}

            {expandedDrill === drill.id && drill.details && (
              <div className="drill-card-details">
                <h4>Details</h4>
                <p>{drill.details}</p>
              </div>
            )}
          </div>
        ))}

        {filteredDrills.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">🔍</div>
            <h3 className="empty-state-title">No drills found</h3>
            <p className="empty-state-text">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrillLibrary;
