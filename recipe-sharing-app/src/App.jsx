/// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail'; // Assuming you create a RecipeDetail component
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
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar /> {/* Search input */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Recipe detail route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
