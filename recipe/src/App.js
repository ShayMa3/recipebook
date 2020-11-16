import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  // needed to use this specific api
  const APP_ID = 'bdefe1f6';
  const APP_KEY = 'a63099e4f5632baa4b3971772c8ec633';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery]= useState('');


  useEffect(() => {
    getRecipes();
  }, [query])

  // gets data from a api using query, puts data into recipes
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  // allows us to type into the search bar, by constantly updating it
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    // stops page from refreshing, updates only after we press submit
    e.preventDefault();
    setQuery(search);
    // resets search bar
    setSearch(''); 
  }

  return (
    <div className="App">
      <h1>A Recipe App</h1>
      <p>made with React</p>
      <br></br>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search Ingredient</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe
          key={recipe.recipe.label}  
          title={recipe.recipe.label} 
          time={recipe.recipe.totalTime}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}

      
      {/* <Recipe title='Burger' time='35 minutes' ingredient='Buns'/> */}
      {/* <ClassComponent /> */}
    </div>
  );
}

export default App;
