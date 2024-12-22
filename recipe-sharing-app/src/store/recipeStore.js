import { create } from 'zustand';

// Define Zustand store
const useRecipeStore = create((set) => ({
  recipes: [], // Initial state for recipes
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })), // Add recipe
  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })), // Remove recipe by ID
}));

export default useRecipeStore;

