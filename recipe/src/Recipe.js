import React from 'react';

function Recipe(props) {
    return (
        <div>
            <h1>Recipe Title: {props.title} </h1>
            <p>
                Cooking Time: {props.time}
                <br></br>
                Ingredient 1: {props.ingredient}
                
            </p>
        </div>
    );
}

export default Recipe;