import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // State for tracking errors

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Recipe title is required.";
    if (!ingredients) newErrors.ingredients = "Ingredients are required.";
    if (!steps) newErrors.steps = "Preparation steps are required.";
    else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please list at least two ingredients.";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate(); // Run validation
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors state if validation fails
      return;
    }

    // Proceed with form submission (e.g., save to state, send to backend)
    console.log("New Recipe:", { title, ingredients, steps });

    // Clear form and errors after successful submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Recipe</h1>

      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className={`w-full p-2 mt-2 border ${errors.title ? "border-red-500" : "border-gray-300"} rounded-md`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-lg font-semibold">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            rows="4"
            className={`w-full p-2 mt-2 border ${errors.ingredients ? "border-red-500" : "border-gray-300"} rounded-md`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div className="mb-6">
          <label htmlFor="steps" className="block text-lg font-semibold">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            rows="6"
            className={`w-full p-2 mt-2 border ${errors.steps ? "border-red-500" : "border-gray-300"} rounded-md`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
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
