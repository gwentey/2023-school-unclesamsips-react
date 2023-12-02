import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Accueil, Ingredients, RandomCocktail, Cocktail, CocktailByIngredient } from './'
import Error from '../../_utils/Error'

const PublicRouter = () => {
    return (
        <Routes>
            <Route index element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="cocktail">
                <Route path="random" element={<RandomCocktail />} />
                <Route path="show/:uid" element={<Cocktail />} />
            </Route>
            <Route path="ingredient">
                <Route path="show/:name" element={<CocktailByIngredient/>}/>
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default PublicRouter;