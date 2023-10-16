import React, { useState } from "react";

function RecipeCreate({ onRecipeCreate}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");


  const handleSubmit = e => {
    e.preventDefault();
    onRecipeCreate({ name, cuisine, photo, ingredients, preparation, rating});
    setName("");
    setCuisine("");
    setPhoto("");
    setRating("0");
    setIngredients("");
    setPreparation("");
  }
  
  return (
    <form width="100%" name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" placeholder="Name" required={true} onChange={(e) => setName(e.target.value)} value={name}/></td>
            <td><input name="cuisine" placeholder="Cuisine" required={true}  onChange={(e) => setCuisine(e.target.value)} value={cuisine}/></td>
            <td><input name="photo" placeholder="Photo" required={true}  onChange={(e) => setPhoto(e.target.value)} value={photo}/></td>
            <td><textarea name="ingredients" placeholder="Ingridients" required={true}  onChange={(e) => setIngredients(e.target.value)} value={ingredients}/></td>
            <td><textarea name="preparation" placeholder="Preparation" required={true}  onChange={(e) => setPreparation(e.target.value)} value={preparation}/></td>
            <td><input name="rating" placeholder="Rating" required={true}  onChange={(e) => setRating(e.target.value)} value={rating}/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;