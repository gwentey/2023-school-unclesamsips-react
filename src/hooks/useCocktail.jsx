function useCocktail(nameCocktail) {

  const apiUrl = nameCocktail
    ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameCocktail}`
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

 
    async function fetchCocktails() {
      try {
        const isTestMode = process.env.REACT_APP_TEST === 'true';
        const alphabet = isTestMode ? 'abc' : 'abcdefghijklmnopqrstuvwxyz';
        const cocktailsData = [];
        if(!nameCocktail){
            for (const letter of alphabet) {
            const response = await fetch(`${apiUrl}${letter}`);
            const data = await response.json();
            if (data.drinks) {
                cocktailsData.push(...data.drinks);
            }
            await new Promise(resolve => setTimeout(resolve, 350));
            }
        }else{
            const response = await fetch(
                apiUrl,
            );
            const data = await response.json();
            cocktailsData.push(...data.drinks);
        }
        return cocktailsData;
      } catch (error) {
        console.error('Erreur lors de la récupération des cocktails :', error);
      }
  }

  async function fetchCocktailById(id){
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.drinks[0];
  }

  async function fetchRandomCocktail(){
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data.drinks[0];
  }
  
  async function fetchCocktailsByIngredient(ingredient) {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();

      const maxConcurrentRequests = 2; 
      const cocktailsData = [];

      const processBatch = async (batch) => {
      const batchPromises = batch.map(cocktail => fetchCocktailById(cocktail.idDrink));
      const batchResults = await Promise.all(batchPromises);
      await new Promise(resolve => setTimeout(resolve, 500));

      cocktailsData.push(...batchResults);
    };

    for (let i = 0; i < data.drinks.length; i += maxConcurrentRequests) {
      const batch = data.drinks.slice(i, i + maxConcurrentRequests);
      await processBatch(batch);
    }
    return cocktailsData;

    } catch (error) {
      console.error('Erreur lors de la récupération des cocktails par ingrédient :', error);
      return [];
    }
  }

  return { fetchCocktails, fetchCocktailById, fetchRandomCocktail, fetchCocktailsByIngredient };
}

export default useCocktail;
