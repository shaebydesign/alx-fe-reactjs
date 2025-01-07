// src/store/recipeStore.js

import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],  // Initial state for recipes
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),
  setRecipes: (recipes) => set({ recipes }),  // Action to set all recipes
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
}));

export { useRecipeStore };
