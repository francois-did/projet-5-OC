import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  // Trouver le logement dans le fichier JSON
  const logement = logements.find((logement) => logement.id === id);

  // Redirection si le logement n'existe pas
  useEffect(() => {
    if (!logement) {
      navigate("/404", { replace: true }); 
    }
  }, [logement, navigate]);

  // Si le logement n'existe pas, retourner null
  if (!logement) {
    return null; 
  }

  return (
    <>
      <HeaderVignette />

      {/* Passer les images du logement au Carousel */}
      <Carousel pictures={logement.pictures} />
      <VignettesContent />

      <div className="vignettes-collapse-container">
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
