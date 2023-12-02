import React from 'react';
import cocktailIcon from '../../../assets/icons/cocktail.png'; 

import './Loading.css';

const Loading = () => {
    return (
            <div className="spinner-container">
               <img id="cocktailImage" src={cocktailIcon} alt="Cocktail Loading" />
            </div>
    );
}

export default Loading;