import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logementsJSON.json';
import '../styles/LocationDetails.scss';
import HeaderVignette from './HeaderVignettes';
import '../styles/HeaderVignettes.scss'
import FooterMax from './footerMax';
import '../styles/Collapse.scss';
import Carousel from './Carousel'
import VignettesContent from './VignettesContent';
import Collapse from './Collapse';


function LocationDetails() {
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return(
    <>
      <HeaderVignette />

      <Carousel />
    <VignettesContent />

    <Collapse 
                    title="Fiabilité" 
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." 
                />



    <Collapse 
                    title="Sécurité" 
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
                />
      
      <FooterMax />
</>
 ) 
 
}

export default LocationDetails;
