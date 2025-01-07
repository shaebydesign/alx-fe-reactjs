import { useRecipeStore } from './recipeStore';
import { useParams, Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  // Get the recipeId from the URL params
  const { id } = useParams();
  const recipeId = parseInt(id, 10); // Ensure the ID is treated as an integer

  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Edit and Delete Recipe */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipeId} />

      {/* Link to go back */}
      <Link to="/">Back to Recipe List</Link>
    </div>
  );
};

export default RecipeDetails;
