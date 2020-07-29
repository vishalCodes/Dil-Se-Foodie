import React from "react";

const RecipeItem = ({ label, image, ingredientLines }) => {
  return (
    <div>
      <div className="card py-2 text-center">
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle " />
        <div className="card-body bg-dark">
          <h5>{label}</h5>
        </div>

        <ul className="list-group list-group-flush">
          {ingredientLines.map((ing) => (
            <li className="list-group-item bg-dark">{ing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeItem;
