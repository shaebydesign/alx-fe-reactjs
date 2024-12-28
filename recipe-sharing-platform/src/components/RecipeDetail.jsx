import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Detail</h1>
      <p className="text-center">Displaying details for recipe ID: {id}</p>
    </div>
  );
}

export default RecipeDetail;
