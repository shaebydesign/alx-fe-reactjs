import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  // Fetch recipe data based on the ID from data.json
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        // Find the recipe by its ID
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe details:", error));
  }, [id]);

  // Show loading message while recipe is being fetched
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">{recipe.title}</h1>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover mb-6"
      />

      {/* Recipe Details */}
      <div className="text-lg text-gray-800 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
