import React, { useState } from 'react';
import '../styles/Carousel.scss';

function Carousel({ pictures }) {
  const [currentImage, setImage] = useState(0);

  return (
    <div className="carousel-container">
      {/* Image */}
      <img className="carousel-image" src={pictures[currentImage]} alt="carousel" />

      {/* Indicateur du numéro de l'image */}
      <div className="carousel-indicator">
        {currentImage + 1}/{pictures.length}
      </div>

      {/* Bouton suivant */}
      <button
        className="carousel-button carousel-button-next"
        onClick={() => {
          if (currentImage === pictures.length - 1) {
            setImage(0);
          } else {
            setImage(currentImage + 1);
          }
        }}
      >
        ›
      </button>

      {/* Bouton précédent */}
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
