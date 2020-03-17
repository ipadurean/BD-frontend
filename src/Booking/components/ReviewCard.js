import React from 'react';
import '../styles/ReviewCard.css';
import PropTypes from 'prop-types';

const ReviewCard = (props) => {
  return(
    <div className="review-container">
      {props.review}
    </div>
  )
}

ReviewCard.propTypes = {
  review: PropTypes.string.isRequired
}

export default ReviewCard;