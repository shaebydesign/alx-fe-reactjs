// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> {/* Use Link to navigate */}
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
