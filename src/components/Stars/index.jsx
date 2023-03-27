import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const GetStarRating = (rating) => {
  if (rating === 0) {
    return [];
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
    stars.push(<FontAwesomeIcon icon={faStar} key={`empty-${i}`} />);
  }

  return stars;
};

export default GetStarRating;
