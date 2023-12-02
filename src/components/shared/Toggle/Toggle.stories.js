import React from 'react';
import {Toggle} from "../../index";
import { DarkModeProvider } from '../../../context/DarkModeContext';
import { MemoryRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    title: 'Shared/Toggle',
    component: Toggle,
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

const Template = () => <Toggle/>;

export const Default = Template.bind({});