import React from 'react';

function Recipe(props) {
    const ingredients = props.ingredients
    console.log(ingredients);
    return (
        <div>
            <h2>Title: {props.title} </h2>
            <p>Cooking Time: {props.time} </p>
            <br></br>
            <p><u>Ingredients</u>:</p>
            <ul>
                {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            
            <img src={props.image} alt="" />
        </div>
    );
}

export default Recipe;