import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';

const GetStarRating = (rating) => {
  if (rating === 0) {
    return <p>No yet rated</p>;
  }

  const fullStars = Math.floor(rating);
  const halfStars = Math.round(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={`full-${i}`} />);
  }

  if (halfStars === 1) {
    stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key="half" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FontAwesomeIcon icon={faEmptyStar} key={`empty-${i}`} />);
  }

  return stars;
};

export default GetStarRating;
