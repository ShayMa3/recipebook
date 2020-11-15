import React from 'react'
import Recipe from './Recipe'

class ClassComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            arrayOfRecipes: [
                {title:'Thai Green Curry', time:'45 minutes', ingredient:'Coconut Milk'},
                {title:'Stir Fry Noodles', time:'30 minutes', ingredient:'Peanut Sauce'}
            ],
            clicked: false
        }
        // bind in the constructor
        this.onClickHandler = this.onClickHandler.bind(this);

    }

    onClickHandler() {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        let mappedRecipes = this.state.arrayOfRecipes.map(item => <Recipe title={item.title} time={item.time} ingredient={item.ingredient}/>)

        return (
            <div>
                <h1>Class component: rendering recipes.</h1>
                {mappedRecipes}
                {/* <Recipe title='Thai Green Curry' time='45 minutes' ingredient='Coconut Milk'></Recipe>
                <Recipe title='Stir Fry Noodles' time='30 minutes' ingredient='Peanut Sauce'></Recipe> */}
                <button onClick={this.onClickHandler}>Click me to change state!</button>
                {/* <h1>{this.state.clicked}</h1> */}
            </div>
        )
    }
}

export default ClassComponent;