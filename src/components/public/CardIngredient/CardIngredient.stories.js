import React from 'react';
import {CardIngredient} from "../../index";
import {DarkModeProvider} from '../../../context/DarkModeContext';
import {MemoryRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    title: 'public/CardIngredient',
    component: CardIngredient,
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

const Template = (args) => <CardIngredient {...args} />;

export const Default = Template.bind({});

Default.args = {
    ingredientId: "",
    ingredientName: "",
};

export const Ingredient = Template.bind({});

Ingredient.args = {
    ingredientId: "552",
    ingredientName: "Elderflower cordial",
};