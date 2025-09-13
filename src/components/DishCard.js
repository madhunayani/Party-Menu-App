// src/components/DishCard.js

import React from 'react';

function DishCard({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) {
  return (
    <div className={`dish-card ${dish.type === 'NON-VEG' ? 'non-veg' : 'veg'}`}>
      {/* No image area anymore */}
      <div className="dish-details">
        <h3 className="dish-name">
          {dish.name}
          {isSelected && <span className="selected-badge-text"> ✓</span>}
          <span className={`dish-type-indicator ${dish.type.toLowerCase()}`}>●</span>
        </h3>
        <p className="dish-description">{dish.description}</p>
      </div>
      <div className="dish-actions">
        <button className="ingredients-btn" onClick={() => onViewIngredients(dish)}>
          Ingredients
        </button>
        {isSelected ? (
          <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>
            Remove
          </button>
        ) : (
          <button className="add-btn" onClick={() => onAddDish(dish.id)}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default DishCard;
