import React, { useEffect, useState } from "react";
import "../src/App.css";
import Recipe from "./Recipe";
import Loader from "./components/Loader.jsx";

const App = () => {
  // LOADER
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);
  // ----------------

  const APP_ID = "17f88841";
  const APP_KEY = "2717b42231f2c065b05cc25d93c8df55";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  // create a state that only submits itself after we click the button
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    // stop the page refresh
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // every time we tape 1 letter in the search bar, its gonna search in API
  // not a good idea

  return loader ? (
    <Loader />
  ) : (
    <div className="App">
      <h1>enter your favorite ingredient</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          classname="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <label
          className="search-button"
          type="submit"
          for="Entrez votre ingrédient favoris"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </label>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.mabel}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
