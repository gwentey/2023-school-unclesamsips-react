import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePalette } from 'color-thief-react';
import Color from 'color';
import './CardIngredient.css';

const CardIngredient = ({ ingredientId, ingredientName, img }) => {
  const { data: paletteData } = usePalette(img, 4,'hex',{ crossOrigin: 'anonymous',
  });

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
    <Link to={`/ingredient/show/${ingredientId}`}>
      <div className="col CardIngredient">
        <li className="card" style={gradientStyle}>
          <a
            className="card-image"
            href={img}
            target="_blank"
            style={{
              backgroundImage: `url(${img})`,
            }}
            data-image-full={img}
          >
            <img
              src={img}
              alt={ingredientName}
            />
          </a>
          <a
            className="card-description"
            href={img}
            target="_blank"
          >
            <h5>{ingredientName}</h5>
          </a>
        </li>
      </div>
    </Link>
  );
};

export default CardIngredient;
