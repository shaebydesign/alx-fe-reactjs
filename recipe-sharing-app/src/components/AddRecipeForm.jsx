// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(), // Generate a unique id (could also be something else)
      title,
      description,
    };
    addRecipe(newRecipe); // Call the addRecipe action from Zustand
    navigate('/'); // Navigate back to the recipe list or another page
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // setTitle is the function to update the title state
        placeholder="Recipe Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)} // setDescription is the function to update the description state
        placeholder="Recipe Description"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
