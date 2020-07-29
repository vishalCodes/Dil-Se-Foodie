import React from "react";
import RecipeItem from "./RecipeItem";

const Recipes = ({ recipes }) => {
  return (
    <div className="card-columns">
      {recipes.map((food) => (
        <RecipeItem
          label={food.recipe.label}
          image={food.recipe.image}
          ingredientLines={food.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default Recipes;
