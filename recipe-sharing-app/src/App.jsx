// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail'; // Assuming you have a RecipeDetail component
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList'; // Importing FavoritesList
import RecommendationsList from './components/RecommendationsList'; // Importing RecommendationsList

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} /> {/* Route for favorites */}
          <Route path="/recommendations" element={<RecommendationsList />} /> {/* Route for recommendations */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
