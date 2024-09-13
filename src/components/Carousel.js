import React, { useState } from 'react';
import data from '../data/logementsJSON.json';
import '../styles/Carousel.scss';

function Carousel() {
  const [currentImage, setImage] = useState(0);
  const pictures = data[0].pictures;

  return (
    <div className="carousel-container">
      {/* Afficher l'image */}
      <img className="carousel-image" src={pictures[currentImage]} />

      {/* Indicateur du numéro de l'image */}
      <div className="carousel-indicator">
        {currentImage + 1}/{pictures.length}
      </div>

      {/* Bouton suivant */}
      <button
        className="carousel-button carousel-button-next"
        onClick={() => {
          setImage((currentImage===pictures.length-1)?0:(currentImage+1));
        }}
      >
        ›
      </button>

      {/* Bouton precedent */}
      <button
        className="carousel-button carousel-button-prev"
        onClick={() => {
          if (currentImage === 0) {
            setImage(pictures.length - 1);
          } else {
            setImage(currentImage - 1);
          }
        }}
      >
        ‹
      </button>
    </div>
  );
}

export default Carousel;

// (condition)?<vrai>:<faux>;