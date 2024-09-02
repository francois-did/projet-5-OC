import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logementsJSON.json'; // Assure-toi que le chemin est correct

function LocationDetails() {
  const { id } = useParams();
  const location = data.find(item => item.id === id);

  if (!location) {
    return <div>Location not found</div>;
  }

  return (
    <div className="location-details">
      <h1>{location.title}</h1>
      <img src={location.cover} alt={location.title} />
      <p>{location.description}</p>
      <ul>
        {location.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      {/* Afficher d'autres détails comme les images supplémentaires, le nom de l'hôte, la note, etc. */}
    </div>
  );
}

export default LocationDetails;
