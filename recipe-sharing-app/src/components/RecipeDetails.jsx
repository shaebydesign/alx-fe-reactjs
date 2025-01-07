import { useRecipeStore } from './recipeStore';
import { useParams, Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  // Extract recipeId from the URL params
  const { id } = useParams();
  const recipeId = parseInt(id, 10);  // Convert to an integer to match the recipe ID format

  // Find the recipe from the store
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Display recipe details */}
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>

      {/* Provide options for editing and deleting the recipe */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} /> {/* Reference recipe.id here */}

      {/* Link to go back to the recipe list */}
      <Link to="/">Back to Recipe List</Link>
    </div>
  );
};

export default RecipeDetails;
