import { useContext } from 'react';
import React from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext';
import './Toggle.css';

const Toggle = () => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <label className="switch">
            <input type="checkbox" onClick={handleClick}/>
            <span className="slider round"></span>
        </label>
    );
}

export default Toggle;