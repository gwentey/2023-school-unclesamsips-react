import React from 'react';
import Header from './Header';
import { DarkModeProvider } from '../../../context/DarkModeContext';
import { MemoryRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  title: 'Shared/Header',
  component: Header,
  decorators: [
    (Story) => (
      <DarkModeProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </DarkModeProvider>
    ),
  ],
};

const Template = () => <Header />;

export const Default = Template.bind({});