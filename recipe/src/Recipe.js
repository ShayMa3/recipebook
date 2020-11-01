import React from 'react';

function Recipe(props) {
    return (
        <div>
            <h1> {props.title} </h1>
            <p>
                {props.ingredient}
            </p>
        </div>
    );
}

export default Recipe;