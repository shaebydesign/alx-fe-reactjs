// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    filterRecipes(); // Trigger filtering when search term changes
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
