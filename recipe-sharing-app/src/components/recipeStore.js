// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Array of all recipes
  favorites: [], // Array to store favorite recipe IDs
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId], // Adds a recipe to favorites
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId), // Removes a recipe from favorites
  })),
  recommendations: [], // List of recommended recipes
  generateRecommendations: () => set((state) => {
    // Generate recommendations based on favorites (can be enhanced)
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock recommendation logic
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
