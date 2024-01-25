import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const WindDirection = ({ windDeg }) => {
  const rotateStyle = {
    transform: `rotate(${windDeg}deg)`
  };

  return (
    <div style={rotateStyle} className="wind-direction-icon">
      <FontAwesomeIcon icon={faLocationArrow} />
    </div>
  );
};

export default WindDirection;
