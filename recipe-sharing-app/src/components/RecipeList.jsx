import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const { recipes, filteredRecipes, filterRecipes } = useRecipeStore((state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes,
  }));

  // Trigger filtering when recipes or search term changes
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  return (
    <div className="recipe-list">
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
