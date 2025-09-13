// src/components/Filters.js

import React from 'react';

const categories = ['STARTER', 'MAIN COURSE', 'SIDES', 'DESSERT'];

function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  onVegOnlyChange
}) {
  return (
    <div className="filters-container">
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="search-and-toggle">
        <input
          type="text"
          placeholder="Search for a dish..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <div className="veg-toggle">
          <label htmlFor="veg-only">Veg Only</label>
          <input
            type="checkbox"
            id="veg-only"
            checked={vegOnly}
            onChange={(e) => onVegOnlyChange(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
