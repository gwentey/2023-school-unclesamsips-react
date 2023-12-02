import React, { useEffect, useState, useContext } from 'react';
import { CardCocktail, Title, Search, Loading } from '../../../components/index';
import useCocktail from '../../../hooks/useCocktail';
import './Accueil.css';
import {DarkModeContext} from '../../../context/DarkModeContext';

const Accueil = () => {
    const { fetchCocktails } = useCocktail(null);
    const [cocktails, setCocktails] = useState([]);
    
    const [isLoading, setIsLoading] = useState();
    const { darkMode } = useContext(DarkModeContext);
    const [currentPage, setCurrentPage] = useState(1);
    const cocktailsPerPage = 9;
    const pagesToShow = 5;
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchCocktail() {
            setIsLoading(false);
            try {
                const cocktail = await fetchCocktails();
                setCocktails(cocktail);
                setIsLoading(true);
            } catch (error) {
                console.error('Erreur lors de la récupération du cocktail:', error);
                setIsLoading(true);
            }
        }
        fetchCocktail();
    }, []);

    const filteredCocktails = cocktails.filter((cocktail) =>
        cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    const indexOfLastCocktail = currentPage * cocktailsPerPage;
    const indexOfFirstCocktail = indexOfLastCocktail - cocktailsPerPage;
    const currentCocktails = filteredCocktails.slice(indexOfFirstCocktail, indexOfLastCocktail);

    const chunkedCocktails = chunkArray(currentCocktails, 3);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPageCount = Math.ceil(filteredCocktails.length / cocktailsPerPage);
    const pages = Array.from({ length: totalPageCount }, (_, index) => index + 1);

    const startIndex = Math.max(0, currentPage - Math.floor(pagesToShow / 2));
    const endIndex = Math.min(totalPageCount - 1, startIndex + pagesToShow - 1);

    const displayedPageNumbers = pages.slice(startIndex, endIndex + 1);

    return (
        <div style={{ paddingBottom: '2em' }} className={`${darkMode ? 'body-dark' : 'body-light'}`}>
            <Title content={'Cocktails'} color={'#FFDF2B'} />
            <Search
                placeholder="Rechercher un cocktail..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                }}
            />
            {!isLoading ? (
                <Loading />
            ) : filteredCocktails.length === 0 ? (
                <div className='d-flex align-items-center justify-content-center vh-100 mb-5'>
                    <div className='text-center mb-5'>
                        <h2 className='text-cocktail-not-found'>Aucun cocktail trouvé !</h2>
                    </div>
                </div>
            ) : (

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <table>
                            {chunkedCocktails.map((row, rowIndex) => (
                                <tbody key={rowIndex}>
                                    <tr key={rowIndex}>
                                        {row.map((col, colIndex) => (
                                            <td key={colIndex}>
                                                <CardCocktail uid={col.idDrink} title={col.strDrink} alcoholic={col.strAlcoholic} img={col.strDrinkThumb} />
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                        <div>
                            {displayedPageNumbers.map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    className={`pagination-number ${currentPage === pageNumber ? 'pagination-active' : ''}`}
                                    onClick={() => {
                                        paginate(pageNumber);
                                    }}
                                >
                                    {pageNumber}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Accueil;
