import React from 'react';
import '../styles/MainContent.scss'; 

function MainContent() {
  const items = [
    { id: 1, title: 'Titre de la location' },
    { id: 2, title: 'Titre de la location' },
    { id: 3, title: 'Titre de la location' },
    { id: 4, title: 'Titre de la location' },
    { id: 5, title: 'Titre de la location' },
    { id: 6, title: 'Titre de la location' },
  ];

  return (
    <div className="main-content-container">
      {items.map(item => (
        <div key={item.id} className="main-content-item">
          <div className="main-content-content">
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainContent;
