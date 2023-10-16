import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const handleCreateRecipe = (recipe) => {
    setRecipes((recipes) => [...recipes, recipe]);
  }

  const handleDeleteRecipe = (index) => {
    setRecipes((recipes) => recipes.filter((_,i) => i !== index));
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onRecipeDelete={handleDeleteRecipe}/>
      <RecipeCreate onRecipeCreate={handleCreateRecipe}/>
    </div>
  );
}

export default App;
