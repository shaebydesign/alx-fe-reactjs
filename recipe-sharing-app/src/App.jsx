// src/App.jsx
import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './recipeStore';

const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  // Example: Initialize recipes (you can fetch them from an API or add static data)
  const recipes = [
    { id: 1, title: 'Pasta', description: 'Delicious pasta recipe' },
    { id: 2, title: 'Pizza', description: 'Homemade pizza recipe' },
    { id: 3, title: 'Salad', description: 'Fresh vegetable salad' },
  ];

  // Set the recipes in the store
  setRecipes(recipes);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar /> {/* Search input */}
      <RecipeList /> {/* Filtered recipe list */}
    </div>
  );
};

export default App;
