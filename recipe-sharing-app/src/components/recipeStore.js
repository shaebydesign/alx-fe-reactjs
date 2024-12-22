// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter the recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Optionally, initialize or fetch recipes
  setRecipes: (recipes) => set({ recipes })
}));

export { useRecipeStore };
