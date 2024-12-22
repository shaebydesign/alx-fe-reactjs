// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleDelete = () => {
    deleteRecipe(recipeId); // Call the deleteRecipe action to delete the recipe
    navigate('/'); // Navigate to a different page after deleting, e.g., the home page or recipe list
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
