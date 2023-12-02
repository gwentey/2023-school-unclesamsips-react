import React from 'react';
import {ProfileDropdown} from "../../index";
import { DarkModeProvider } from '../../../context/DarkModeContext';
import { MemoryRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    title: 'Shared/ProfileDropdown',
    component: ProfileDropdown,
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

const Template = () => <ProfileDropdown/>;

export const Default = Template.bind({});