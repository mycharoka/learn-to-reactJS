import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./component/Recipe";

const App = () => {
    const APP_ID = "cd02b2af";
    const APP_KEY = "8da332a01a6ebcf4dada7201e9279376";

    const [recipes, setRecipe] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    useEffect(() => {
        console.log("RUN USE EFFECT");
        getRecipe();
    }, [query]);

    const getRecipe = async () => {
        const res = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await res.json();
        // console.log("data >> ", data);
        console.log("data hits >> ", data.hits);
        setRecipe(data.hits);
    };

    const getSearch = (event) => {
        event.preventDefault();
        setQuery(search);
        setSearch("");
    };

    const updateSearch = (event) => {
        // console.log("isi event >> ", event);
        setSearch(event.target.value);
        console.log("search >> ", search);
    };
    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
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
                    ingredients={description.recipe.ingredients}
                />
            ))}
        </div>
    );
};

export default App;
