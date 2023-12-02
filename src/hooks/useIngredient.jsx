import { useState, useEffect } from 'react';

function useIngredient(ingredientName) {
   
  async function fetchIngredients() {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
        const data = await response.json();
        
        //retrieve picture corresponding of each ingredient
        data.drinks.forEach(element => {
          element.img = `https://www.thecocktaildb.com/images/ingredients/${element.strIngredient1}.png`
        });
        return data.drinks;
      } catch (error) {
          console.error('Erreur lors de la récupération des ingrédients :', error);
      }
    fetchIngredients();
  }
  async function fetchCocktailsByIngredient(ingredientName) {
    try {
      
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`);
      const data = await response.json();
      
    } catch (error) {
        console.error('Erreur lors de la récupération des ingrédients :', error);
    }
  fetchCocktailsByIngredient();
}

  async function fetchIngredientById(id) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`);
    const data = await response.json();
    return data.ingredients[0];
  }

  return { fetchIngredients, fetchCocktailsByIngredient, fetchIngredientById };
}

export default useIngredient;
