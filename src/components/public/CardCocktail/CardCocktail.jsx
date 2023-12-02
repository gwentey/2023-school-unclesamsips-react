import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePalette } from 'color-thief-react';
import Color from 'color';
import iconNoAlcohol from '../../../assets/icons/no_alcohol.png';
import './CardCocktail.css';

const CardCocktail = ({ uid, title, img, alcoholic }) => {
  // Utilisation du hook usePalette
  const { data: paletteData, loading: paletteLoading } = usePalette(img || '', 4, 'hex', {
    crossOrigin: 'anonymous',
  });

  // Création du style pour le fond de dégradé
  const gradientStyle = {
    background: paletteData
      ? `linear-gradient(to bottom right, 
          rgba(${Color(paletteData[0]).array().join(', ')}, 0.5), 
          rgba(${Color(paletteData[1]).array().join(', ')}, 0.5), 
          rgba(${Color(paletteData[2]).array().join(', ')}, 0.5), 
          rgba(${Color(paletteData[3]).array().join(', ')}, 0.5))`
      : 'white',
  };

  useEffect(() => {
    setTimeout(() => {
      var cardImages = document.querySelectorAll('.card-image');
      cardImages.forEach(cardImage => {
        var image_url = cardImage.getAttribute('data-image-full');
        var contentImage = cardImage.querySelector('img');

        contentImage.src = image_url;

        contentImage.addEventListener('load', function () {
          cardImage.style.backgroundImage = 'url(' + contentImage.src + ')';
          cardImage.classList.add('is-loaded');
        });
      });
    }, 100);
  }, []);

  return (
    <Link to={`/cocktail/show/${uid}`}>
      <div className="col CardCocktail">
        <li className={`card ${alcoholic === 'Non alcoholic' ? 'non-alcoholic' : ''}`} style={gradientStyle}>
          {alcoholic === 'Alcoholic' ? (
            <span className="alcoholic-label"></span>
          ) : (
            <img className="alcoholic-label" src={iconNoAlcohol} style={{ width: 40, height: 'auto' }} />
          )}
          <a
            className="card-image"
            href={img}
            target="_blank"
            style={{
              backgroundImage: `url(${img})`,
            }}
            data-image-full={img}
          >
            <img src={img} alt={title} />
          </a>
          <a className="card-description" href={img} target="_blank">
            <h5 style={{ color:'black' }}>{title}</h5>
          </a>
        </li>
      </div>
    </Link>
  );
};

export default CardCocktail;
