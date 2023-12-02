import React, { useState, useEffect, useRef, useContext } from 'react';
import { usePalette } from 'color-thief-react';
import Color from 'color';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Instruction, Label, ShowCocktail,Loading } from '../../../components/index';
import useCocktail from '../../../hooks/useCocktail';
import { DarkModeContext } from '../../../context/DarkModeContext';
import { useParams } from 'react-router-dom';
import './CocktailByIngredient.css';

const CocktailByIngredient = () => {
  const { name } = useParams(); // Récupérez le nom de l'ingrédient depuis l'URL
  const { fetchCocktailsByIngredient } = useCocktail();
  const [cocktails, setCocktails] = useState([]);

  const { darkMode } = useContext(DarkModeContext);
  const [isLoading, setIsLoading] = useState();

  const flag = useRef(false);

  useEffect(() => {
    if (flag.current === false) {
      setIsLoading(false);
      async function fetchCocktails() {
        const data = await fetchCocktailsByIngredient(name);
        setCocktails(data);
        setIsLoading(true);
      }
      fetchCocktails();
    }
    return () => flag.current = true;
  }, [name]);

  // For pagination & ingredients
  const [currentPage, setCurrentPage] = useState(1);
  const ingredientsPerPage = 1;
  const pagesToShow = 5;

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
  const currentIngredients = cocktails.slice(indexOfFirstIngredient, indexOfLastIngredient);

  const chunkedIngredients = chunkArray(currentIngredients, 1);
  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate numbers for pagination
  const totalPageCount = Math.ceil(cocktails.length / ingredientsPerPage);
  const pages = Array.from({ length: totalPageCount }, (_, index) => index + 1);

  // Find index to display page
  const startIndex = Math.max(0, currentPage - Math.floor(pagesToShow / 2));
  const endIndex = Math.min(totalPageCount - 1, startIndex + pagesToShow - 1);

  const displayedPageNumbers = pages.slice(startIndex, endIndex + 1);
  console.log(chunkedIngredients);
  return (
    <div className={`${darkMode ? 'body-dark' : 'body-light'}`}>
    {!isLoading ? <Loading/> :<div>
      {chunkedIngredients.map((row, rowIndex) => (
        <div>
          {row.map((col, colIndex) => (
            <ShowCocktail key={col.idDrink} cocktail={col} />
          ))}
        </div>
      ))}
      <div className={`pagination-bar ${darkMode ? 'nav-bottom-dark' : 'nav-bottom-light'}`} style={{ paddingTop: '1.5em',paddingBottom: '1em' }}>
        {displayedPageNumbers.map((pageNumber) => (
          <button key={pageNumber} className={`pagination-number ${currentPage === pageNumber ? 'pagination-active' : ''}`}
            onClick={() => { paginate(pageNumber) }}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>}
    </div>
  );
};
export default CocktailByIngredient;
