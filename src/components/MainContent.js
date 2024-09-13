import React from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data/logementsJSON.json';
import '../styles/MainContent.scss';




// className="main-content-container -----  Container général
// main-content-item -----  Container de chaque vignettes
// main-content-content -----  Vignettes

function MainContent() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/location/${id}`);
  };

  const vignettesData = data.map(item =>{
    return (
      <div className='main-content-item' key={item.id} onClick={ () => handleClick(item.id)}>
        <div className='main-content-content'>
        <img src={item.cover} alt={item.title} />
        <p> {item.title} </p>
        </div>
      </div>
    );

    
  });

  return(
    <div className='main-content-container'>
      {vignettesData}
    </div>
  )
};


export default MainContent;