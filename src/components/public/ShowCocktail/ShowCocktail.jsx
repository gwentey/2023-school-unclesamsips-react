import React, {useContext}from 'react';
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Instruction, Label } from '../../index';
import { usePalette } from "color-thief-react";
import { DarkModeContext } from '../../../context/DarkModeContext';
import Color from "color";

const ShowCocktail = ({ cocktail }) => {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  // Utilisation du hook usePalette
  const { data: paletteData, loading: paletteLoading } = usePalette(
    cocktail.strDrinkThumb || '',
    4,
    'hex',
    {
      crossOrigin: 'anonymous',
    }
  );

  // Création du style pour le fond de dégradé
  const gradientStyle = {
    background: paletteData
      ? `linear-gradient(to bottom right, 
            rgba(${Color(paletteData[0]).array().join(', ')}, 0.5), 
            rgba(${Color(paletteData[1]).array().join(', ')}, 0.5), 
            rgba(${Color(paletteData[2]).array().join(', ')}, 0.5), 
            rgba(${Color(paletteData[3]).array().join(', ')}, 0.5))`
      : 'white',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Couleur du texte pour une meilleure visibilité
  };

  // Fonction pour générer la liste des ingrédients en tant que texte
  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredientName = cocktail[`strIngredient${i}`];
      const ingredientMeasure = cocktail[`strMeasure${i}`];

      if (!ingredientName || ingredientName.trim() === '') {
        continue; // Ignore les ingrédients vides
      }

      ingredients.push(`${ingredientMeasure} ${ingredientName}`);
    }

    return ingredients.map((ingredient, index) => (
      <div key={index}>{ingredient}</div>
    ));
  };

  return (
    <div style={gradientStyle}>
      <Row className="align-items-center">
        <Col>
          {cocktail.strDrinkThumb && (
            <img
              className="shadow bg-body-tertiary rounded"
              style={{ width: 350, height: 350 }}
              src={cocktail.strDrinkThumb}
              alt=""
            />
          )}
        </Col>
        <Col>
          <Card style={{ backgroundColor: darkMode ? '#5C527F' : 'rgb(255, 255, 255)' }}>
            <Card.Body>
              <Card.Title>{cocktail.strDrink}</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ backgroundColor: darkMode ? '#5C527F' : 'rgb(255, 255, 255)' }}>
            <Card.Body>
              <Card.Text>
                <Label content="Ingrédients"></Label>
                {renderIngredients()}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className={`${darkMode ? 'mini-card-dark' : 'mini-card-light'}`} style={{ maxWidth:'50rem', backgroundColor: darkMode ? '#5C527F' : 'rgb(255, 255, 255)' }}>
            <Card.Body>
              <Card.Text>
                {cocktail.strInstructions && (
                  <Instruction strInstructions={cocktail.strInstructions} />
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div >
  );
};

export default ShowCocktail;
