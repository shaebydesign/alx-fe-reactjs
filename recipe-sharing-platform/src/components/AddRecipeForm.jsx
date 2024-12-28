// src/components/AddRecipeForm.jsx
import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }

    // Proceed with form submission logic (e.g., save to state, send to backend)
    setError("");
    console.log("New Recipe:", { title, ingredients, steps });
    // Reset form after submission
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Recipe</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-semibold">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            rows="4"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div className="mb-6">
          <label htmlFor="steps" className="block text-lg font-semibold">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            rows="6"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
