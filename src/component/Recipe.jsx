import React from "react";

const Recipe = (props) => {
    console.log("props >> ", props);
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Calories : {props.calories}</p>
            <img src={props.image} alt="" />
        </div>
    );
};

export default Recipe;
