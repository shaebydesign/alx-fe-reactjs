import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const { recipes } = useRecipeStore();

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h3>{recipe.name}</h3>
              <p>{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
