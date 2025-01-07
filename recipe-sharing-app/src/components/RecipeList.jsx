import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>
            {/* Use Link to navigate to the recipe details page */}
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h2>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
