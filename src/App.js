// src/App.js

import React, { useState } from 'react';
import './App.css';
import { dishes } from './data/mockDishes';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';

function App() {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState('STARTER');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  
  // State for selections and modal
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // --- Event Handlers ---
  const handleAddDish = (dishId) => {
    if (!selectedDishes.includes(dishId)) {
      setSelectedDishes([...selectedDishes, dishId]);
    }
  };

  const handleRemoveDish = (dishId) => {
    setSelectedDishes(selectedDishes.filter(id => id !== dishId));
  };

  const handleOpenModal = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
  };

  // --- Filtering and Data Preparation ---
  const filteredDishes = dishes.filter(dish => {
    const categoryMatch = selectedCategory ? dish.mealType === selectedCategory : true;
    const searchMatch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const vegMatch = vegOnly ? dish.type === 'VEG' : true;
    return categoryMatch && searchMatch && vegMatch;
  });

  const summaryDishes = dishes.filter(dish => selectedDishes.includes(dish.id));

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Party Menu Selection</h1>
      </header>

      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
      />

      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleOpenModal}
      />

      {/* --- THIS IS THE UPDATED SECTION --- */}
      {selectedDishes.length > 0 && (
        <div className="summary-container">
          <h2>Selected Items for Your Party</h2>
          <ul className="summary-list">
            {summaryDishes.map(dish => (
              <li key={dish.id} className="summary-item">
                <span>{dish.name}</span>
                <button className="summary-remove-btn" onClick={() => handleRemoveDish(dish.id)}>
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* --- END OF UPDATED SECTION --- */}

      {isModalOpen && <IngredientModal dish={currentDish} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;
