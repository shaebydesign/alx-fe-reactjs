import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',  // State to store the search term
  filteredRecipes: [],

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) // Filters recipes by search term
    ),
  })),
}));

export { useRecipeStore };
