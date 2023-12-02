import React from 'react';
import {ShowCocktail} from "../../index";
import {DarkModeProvider} from '../../../context/DarkModeContext';
import {MemoryRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    title: 'public/ShowCocktail',
    component: ShowCocktail,
    decorators: [
        (Story) => (
            <DarkModeProvider>
                <MemoryRouter>
                    <Story/>
                </MemoryRouter>
            </DarkModeProvider>
        ),
    ],
};

const Template = (args) => <ShowCocktail {...args} />;

export const Default = Template.bind({});

Default.args = {
    cocktail: {}
};

export const Cocktail = Template.bind({});

Cocktail.args = {
    cocktail: {
        "idDrink": "16271",
        "strDrink": "The Evil Blue Thing",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Cocktail",
        "strIBA": null,
        "strAlcoholic": "Alcoholic",
        "strGlass": "Old-fashioned glass",
        "strInstructions": "Pour ingredients into glass, and drop in a blue whale! The blue whale isn't really necessary, but it makes the drink more \"fun\".",
        "strInstructionsES": null,
        "strInstructionsDE": "Gießen Sie die Zutaten in ein Glas und lassen Sie sie in einen Blauwal fallen! Der Blauwal ist nicht wirklich notwendig, aber er macht den Drink mehr \"Spaß\".",
        "strInstructionsFR": null,
        "strInstructionsIT": "Versa gli ingredienti nel bicchiere e versa un po’ di Blue Curacao! Il Blue Curacao non è proprio necessario, ma rende la bevanda più \"divertente\".",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ojnpz71504793059.jpg",
        "strIngredient1": "Creme de Cacao",
        "strIngredient2": "Blue Curacao",
        "strIngredient3": "Light rum",
        "strIngredient4": null,
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 1/2 oz ",
        "strMeasure2": "1 oz ",
        "strMeasure3": "1/2 oz ",
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2017-09-07 15:04:19"
    }
};

export const NoAlcoholicCocktail = Template.bind({});

NoAlcoholicCocktail.args = {
    cocktail: {
        "idDrink": "15106",
        "strDrink": "Apello",
        "strDrinkAlternate": null,
        "strTags": null,
        "strVideo": null,
        "strCategory": "Other / Unknown",
        "strIBA": null,
        "strAlcoholic": "Non alcoholic",
        "strGlass": "Collins Glass",
        "strInstructions": "Stirr. Grnish with maraschino cherry.",
        "strInstructionsES": "Mezclar. Decorar con cereza marrasquino.",
        "strInstructionsDE": "Rühren. Mit Maraschinokirsche garnieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Versare tutti gli ingredienti in un mixing glass. Mescolate.\r\nGuarnire con una ciliegia al maraschino.",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
        "strIngredient1": "Orange juice",
        "strIngredient2": "Grapefruit juice",
        "strIngredient3": "Apple juice",
        "strIngredient4": "Maraschino cherry",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "4 cl ",
        "strMeasure2": "3 cl ",
        "strMeasure3": "1 cl ",
        "strMeasure4": "1 ",
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": null,
        "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2016-07-18 22:13:35"
    }
};