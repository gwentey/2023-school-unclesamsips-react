import React from 'react';
import {Instruction} from "../../index";

export default {
    title: 'public/Instruction',
    component: Instruction
};

const Template = (args) => <Instruction {...args} />;

export const Default = Template.bind({});

Default.args = {
    strInstructions: ""
};

export const WithInstruction = Template.bind({});

WithInstruction.args = {
    strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass."
};