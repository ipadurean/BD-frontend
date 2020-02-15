import React from 'react';
import '../styles/ReviewCard.css';

const ReviewCard = (props) => {
  return(
      <div className="review-container">
          {props.review}
      </div>
  )
}

export default ReviewCard;