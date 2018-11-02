import React from 'react';
import './Panel.css';

const Panel = ({ isBlack }) => {
  return (
    <button 
      className={`panel ${ isBlack ? 'bg-black' : 'bg-white' }`} 
    />
  );
}

export default Panel;