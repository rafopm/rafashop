
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rate }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rate)) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else if (i === Math.floor(rate) && rate % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{color:"antiquewhite"}}/>);
      
    }
  }
  return <>{stars}</>;
};

export default Rating;