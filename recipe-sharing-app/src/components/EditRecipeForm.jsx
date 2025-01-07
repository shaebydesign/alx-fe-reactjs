import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(', '));
  const [instructions, setInstructions] = useState(recipe.instructions);

  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the recipe in the store
    updateRecipe(recipe.id, {
      title,
      description,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      instructions,
    });
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="ingredients">Ingredients (comma separated):</label>
          <input
            type="text"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;

