import React from 'react';
import {CardCocktail} from "../../index";
import {DarkModeProvider} from '../../../context/DarkModeContext';
import {MemoryRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    title: 'public/CardCocktail',
    component: CardCocktail,
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

const Template = (args) => <CardCocktail {...args} />;

export const Default = Template.bind({});

Default.args = {
    uid: "",
    title: "",
    img: "",
    alcoholic: "Alcoholic"
};

export const Cocktail = Template.bind({});

Cocktail.args = {
    uid: "11007",
    title: "Margarita",
    img: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    alcoholic: "Alcoholic"
};

export const NoAlcoholicCocktail = Template.bind({});

NoAlcoholicCocktail.args = {
    uid: "12672",
    title: "Fruit Flip-Flop",
    img: "https://www.thecocktaildb.com/images/media/drink/nfdx6p1484430633.jpg",
    alcoholic: "Non alcoholic"
};