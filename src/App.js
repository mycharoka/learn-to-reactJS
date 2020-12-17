import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./component/Recipe";

const App = () => {
    const APP_ID = "cd02b2af";
    const APP_KEY = "8da332a01a6ebcf4dada7201e9279376";

    const [recipes, setRecipe] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        console.log("RUN USE EFFECT");
        getRecipe();
    }, []);

    const getRecipe = async () => {
        const res = await fetch(
            `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await res.json();
        console.log("data >> ", data);
        console.log("data hits >> ", data.hits);
        setRecipe(data.hits);
    };

    const updateSearch = (event) => {
        // console.log("isi event >> ", event);
        setSearch(event.target.value);
        console.log("search >> ", search);
    };
    return (
        <div className="App">
            <form className="search-form">
                <input
                    className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch}
                />
                <button className="search-button" type="submit">
                    INCREMENT
                </button>
            </form>
            {recipes.map((description) => (
                <Recipe
                    key={description.recipe.label}
                    title={description.recipe.label}
                    calories={description.recipe.calories}
                    image={description.recipe.image}
                />
            ))}
        </div>
    );
};

export default App;
