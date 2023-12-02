import React from 'react';
import {Label} from "../../index";

export default {
    title: 'public/Label',
    component: Label
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
    content: "",
    color: ""
};

export const Content = Template.bind({});

Content.args = {
    content: "Cocktails",
    color: ""
};

export const Color = Template.bind({});

Color.args = {
    content: "Cocktails",
    color: "#FFDF2B"
};

export const Underline = Template.bind({});

Underline.args = {
    content: "Cocktails",
    underline: true
};

export const Uppercase = Template.bind({});

Uppercase.args = {
    content: "Cocktails",
    uppercase: true
};

export const Italic = Template.bind({});

Italic.args = {
    content: "Cocktails",
    italic: true
};