import React from 'react';
import {Title} from "../../index";

export default {
    title: 'Shared/Title',
    component: Title
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
    content: "",
    color: ""
};

export const Content = Template.bind({});

Content.args = {
    content: "Title",
    color: ""
};

export const Color = Template.bind({});

Color.args = {
    content: "Title",
    color: "#FFDF2B"
};