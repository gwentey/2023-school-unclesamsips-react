import React, {useEffect, useState, useRef, useContext} from 'react';
import useCocktail from "../../../hooks/useCocktail";
import {DarkModeContext} from '../../../context/DarkModeContext';
import './RandomCocktail';
import {ShowCocktail, Loading} from '../../../components/index';

const RandomCocktail = () => {

    const [randomCocktail, setRandomCocktail] = useState([]);
    const flag = useRef(false);
    const {fetchRandomCocktail} = useCocktail();

    const {darkMode} = useContext(DarkModeContext);
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        if (flag.current === false) {
            setIsLoading(false);

            async function fetchRandom() {
                try {
                    const cocktail = await fetchRandomCocktail();
                    setRandomCocktail(cocktail);
                    setIsLoading(true);
                } catch (error) {
                    console.error('Erreur lors de la récupération du cocktail aléatoire :', error);
                    setIsLoading(true);
                }
            }

            fetchRandom();

        }
        return () => flag.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id="random-cocktail" className={`${darkMode ? 'body-dark' : 'body-light'}`}>
            {
                isLoading ? <ShowCocktail cocktail={randomCocktail}/> : <Loading/>
            }
        </div>
    );
};

export default RandomCocktail;