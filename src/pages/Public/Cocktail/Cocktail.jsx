import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import './Cocktail.css';
import useCocktail from '../../../hooks/useCocktail';
import {DarkModeContext} from '../../../context/DarkModeContext';
import {ShowCocktail} from "../../../components/index";
import {Loading} from '../../../components/index';


const Cocktail = () => {
    const {uid} = useParams();
    const {fetchCocktailById} = useCocktail();
    const [cocktail, setCocktail] = useState({});

    const [isLoading, setIsLoading] = useState();
    const {darkMode} = useContext(DarkModeContext);

    useEffect(() => {
        setIsLoading(false);
        const fetchData = async () => {
            const fetchedCocktail = await fetchCocktailById(uid);
            setCocktail(fetchedCocktail);
        };
        fetchData();
        setIsLoading(true);
    }, [uid]);

    return (
        <div>
            {!isLoading ? <Loading/> : <ShowCocktail
                        cocktail={cocktail}
                    />}
        </div>
    );
};

export default Cocktail;