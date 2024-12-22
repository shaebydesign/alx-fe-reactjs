import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>{recipe}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
