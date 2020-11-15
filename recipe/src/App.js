import React from 'react';
import './App.css';
import Recipe from './Recipe';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Recipe title='Burger' time='35 minutes' ingredient='Buns'/>
      <ClassComponent />
    </div>
  );
}

export default App;
