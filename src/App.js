import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Video from "./components/Video";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("banana");
  const [recipes, setRecipes] = useState([]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitHandler = (e) => {
    getRecipes();
  };

  const API_ID = "df9eee2c";

  const API_KEY = "959ce6786b39fb4e358e403402340e74";

  const getRecipes = async () => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    console.log(response);
    setRecipes(response.data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="App">
      <Header
        search={search}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />
      <Video />
      <div className="jumbotron jumbotron-fluid cardstyle">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
