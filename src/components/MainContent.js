import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data/logementsJSON.json';
import '../styles/MainContent.scss';

function MainContent() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/location/${id}`);
  };

  return (
    <div className="main-content-container">
      {data.map(item => (
        <div 
          key={item.id} 
          className="main-content-item" 
          onClick={() => handleClick(item.id)}
        >
          <div className="main-content-content">
            <img src={item.cover} alt={item.title} />
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainContent;
