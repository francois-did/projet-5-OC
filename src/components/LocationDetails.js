import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/LocationDetails.scss';
import HeaderVignette from './HeaderVignettes';
import '../styles/HeaderVignettes.scss';
import FooterMax from './footerMax';
import Carousel from './Carousel';
import VignettesContent from './VignettesContent';
import '../styles/CollapseVignettes.scss';
import Collapse from './Collapse';
import logements from '../data/logementsJSON.json';

function LocationDetails() {
  // Récupère l'ID du logement depuis l'URL
  const { id } = useParams();

  // Trouver le logement correspondant dans le fichier JSON
  const logement = logements.find(logement => logement.id === id);


  return (
    <>
      <HeaderVignette />

      <Carousel />
      <VignettesContent />

      {/* Utiliser Collapse avec les données du JSON */}
      <div className="vignettes-collapse-container">
        {/* Description dynamique */}
        <Collapse 
          title="Description" 
          content={logement.description} 
          className="vignettes-collapse" 
        />

        {/* Équipements dynamiques */}
        <Collapse 
          title="Équipements" 
          content={(
        <ul>
          {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
          ))}
        </ul>
  )}
  className="vignettes-collapse" 
/>

      </div>

      <FooterMax />
    </>
  );
}

export default LocationDetails;
