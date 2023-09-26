import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredients) => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <p>{Math.round(calories)} Kcal</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
