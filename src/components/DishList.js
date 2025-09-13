// src/components/DishList.js

import React from 'react';
import DishCard from './DishCard';

function DishList({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) {
  return (
    <div className="dish-list">
      {dishes.length > 0 ? (
        dishes.map(dish => (
          <DishCard
            key={dish.id}
            dish={dish}
            onAddDish={onAddDish}
            onRemoveDish={onRemoveDish}
            isSelected={selectedDishes.includes(dish.id)}
            onViewIngredients={onViewIngredients}
          />
        ))
      ) : (
        <p className="no-dishes-message">No dishes match your criteria.</p>
      )}
    </div>
  );
}

export default DishList;
