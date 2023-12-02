import React, {useState, useContext, useEffect} from 'react';
import {CardIngredient, Title, Search, Loading} from '../../../components/index';
import useIngredient from '../../../hooks/useIngredient';
import {DarkModeContext} from '../../../context/DarkModeContext';
import './Ingredients.css'; 

const Ingredients = () => {
    const { fetchIngredients } = useIngredient();
    const {darkMode} = useContext(DarkModeContext);
    const [isLoading, setIsLoading] = useState();
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        async function fetchIngredient() {
            setIsLoading(false);
            try {
                const ingredient = await fetchIngredients();
                setIngredients(ingredient);
                setIsLoading(true);
            } catch (error) {
                console.error('Erreur lors de la récupération des ingrédients: ', error);
                setIsLoading(true);
            }
        }
        fetchIngredient();
    }, []);
    
    // For pagination & ingredients
    const [currentPage, setCurrentPage] = useState(1);
    const ingredientsPerPage = 9;
    const pagesToShow = 5;

    // For Search functionality
    const [searchTerm, setSearchTerm] = useState('');
    
    // Api conventional, strIngredient1 is similar to an ID 
    const filteredIngredients = ingredients.filter(ingredient =>
        ingredient.strIngredient1.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to divide ingredients into groups
    const chunkArray = (arr, chunkSize) => {
        const result = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    };

    // Index for pagination
    const indexOfLastIngredient = currentPage * ingredientsPerPage;
    const indexOfFirstIngredient = indexOfLastIngredient - ingredientsPerPage;
    const currentIngredients = filteredIngredients.slice(indexOfFirstIngredient, indexOfLastIngredient);

    const chunkedIngredients = chunkArray(currentIngredients, 3);

    // Function to change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Generate numbers for pagination
    const totalPageCount = Math.ceil(filteredIngredients.length / ingredientsPerPage);
    const pages = Array.from({ length: totalPageCount }, (_, index) => index + 1);

    // Find index to display page
    const startIndex = Math.max(0, currentPage - Math.floor(pagesToShow / 2));
    const endIndex = Math.min(totalPageCount - 1, startIndex + pagesToShow - 1);

    const displayedPageNumbers = pages.slice(startIndex, endIndex + 1);

    return (
        <div style={{ paddingBottom: '2em'}} className={`${darkMode ? 'body-dark' : 'body-light'}`}>
            <Title content={'Ingrédients'} color={'#FFDF2B'} />
            <Search placeholder="Rechercher un ingrédient..." value={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
            }} />
            {!isLoading ? <Loading/> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <table>
                        <tbody>
                            {chunkedIngredients.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((col, colIndex) => (
                                        <td key={colIndex}>
                                            <CardIngredient
                                                key={col.strIngredient1}
                                                ingredientId={col.strIngredient1}
                                                ingredientName={col.strIngredient1}
                                                img={col.img}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        {displayedPageNumbers.map((pageNumber) => (
                            <button key={pageNumber} className={`pagination-number ${currentPage === pageNumber ? 'pagination-active' : ''}`}
                                onClick={() => { paginate(pageNumber) }}>
                                {pageNumber}
                            </button>
                        ))}
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Ingredients;
