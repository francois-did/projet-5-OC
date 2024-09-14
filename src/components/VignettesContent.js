import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logementsJSON.json';
import '../styles/LocationDetails.scss'; // Assure-toi que le fichier SCSS est bien importé
import '../styles/VignettesContent.scss';

function LocationDetails() {
  const { id } = useParams();
  const logement = data.find(item => item.id === id);

  const renderStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
    ));
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
      {logement.host.name.split(' ')[0]}<br />{logement.host.name.split(' ')[1]}
    </p>
    <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
  </div>
  <div className="rating">
    {renderStars(logement.rating)}
  </div>
</div>






    </div>
    </div>
    
  );
}

export default LocationDetails;
