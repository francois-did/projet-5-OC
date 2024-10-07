import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logementsJSON.json';
import '../styles/LocationDetails.scss'; 
import '../styles/VignettesContent.scss';

function LocationDetails() {
  // récupérer l'ID 
  const { id } = useParams();

  const logement = data.find(item => item.id === id);

  // générer les étoiles
  const renderStars = (rating) => {
    // Nombre total d'étoiles
    const totalStars = 5;
    
    // Tableau vide où chaque étoile (remplie ou vide) sera ajoutée
    const stars = [];

    // boucle for qui itère de 0 à 5
    for (let i = 0; i < totalStars; i++) {
      // ajout d'une étoile rouge
      if (i < rating) {
        stars.push(<span className="star filled">★</span>);
      } else {
        // Sinon ajout d'une étoile grise
        stars.push(<span className="star">★</span>);
      }
    }

    // retourne le tableau d'étoiles rempli
    return stars;
  };
  
  return (
    <div className='location-details-container'>
      <div className="location-details">
        <div className='titreAndTags'>
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>

          {/* Affichage des tags */}
          <div className="tags-container">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Affichage de l'hôte et du rating */}
        <div className="photoAndStars">
          <div className="host-info">
            <p className="host-name">
              {[logement.host.name].map((name) => (
                <>
                  {name} 
                </>
              ))}
            </p>
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          </div>

          {/* étoiles */}
          <div className="rating">
            {renderStars(logement.rating)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
