// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  useEffect(() => {
    // Fetch or set your recipes initially if needed
    // useRecipeStore.setState({ recipes: fetchedRecipes });
  }, []);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
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
