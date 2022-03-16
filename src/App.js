import React, {useEffect, useState} from 'react';
import './css/App.css';
import Recipe from './components/Recipe';

const App =() =>{
  const APP_ID ='87c9671b';
  const APP_KEY = '3af84f5ab4eb5e9fdfe43746ea8b7c69';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('chicken');
  const [query, setQuery] = useState('chicken');
  let request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`;

  useEffect(()=>{
    getRecipe();
  },[query]);

  const getRecipe = async ()=>{
    const response = await fetch(request);
    const result = await response.json();
    console.log(result.hits[0]);
    setRecipes(result.hits); 
  }

  const requestSearch = (e) =>{
    setSearch(e.target.value);
  }

  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search);
  }
  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input type="text" 
                 value={search} 
                 onChange={(e)=>requestSearch(e)}
                 className='search-input'>
          </input>
          <button type="submit" className='search-button'>Search</button>
        </form>
        <div className="list-recipe">
          {recipes.map((item, i) =>{
            const {label, calories, image, ingredients, totalNutrients, digest, dietLabels} = item.recipe;
            return (
              <Recipe 
                key={i} 
                title={label}
                calory={calories}
                image = {image}
                ingredient = {ingredients}
                totalNutrients={totalNutrients}
                healthLabel = {digest}
                digest = {dietLabels}/>
            )
          })}
        </div>
    </div>
  );
}

export default App;
