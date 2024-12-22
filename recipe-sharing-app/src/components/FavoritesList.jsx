// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites,
  }));

  // Get the full details of each favorite recipe
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
