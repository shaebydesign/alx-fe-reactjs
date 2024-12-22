import React, { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && instructions) {
      addRecipe({ name, instructions });
      setName('');
      setInstructions('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <div>
        <label htmlFor="name">Recipe Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;


  