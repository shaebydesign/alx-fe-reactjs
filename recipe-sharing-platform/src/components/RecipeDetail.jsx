import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  // Fetch recipe data based on the ID from data.json
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        if (!selectedRecipe) {
          setError("Recipe not found");
        } else {
          setRecipe(selectedRecipe);
        }
      })
      .catch((error) => {
        setError("Error loading recipe details");
        console.error("Error loading recipe details:", error);
      });
  }, [id]);

  // Show loading message or error while fetching recipe data
  if (error) {
    return <div>{error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">{recipe.title}</h1>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover mb-6 shadow-md"
      />

      {/* Recipe Summary */}
      <p className="text-lg text-gray-800 mb-6">{recipe.summary}</p>

      {/* Recipe Details */}
      <div className="text-lg text-gray-800 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p>Step-by-step instructions will go here.</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
