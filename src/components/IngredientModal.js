// src/components/IngredientModal.js

import React from 'react';

function IngredientModal({ dish, onClose }) {
  if (!dish) {
    return null; // Don't render anything if no dish is selected
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <h4>Ingredients:</h4>
        <ul className="ingredients-list">
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name}: <span>{ingredient.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IngredientModal;
