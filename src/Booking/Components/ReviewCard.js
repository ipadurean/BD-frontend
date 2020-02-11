import React from 'react';
import '../Styles/ReviewCard.css';

const ReviewCard = (props) => {
  return(
      <div className="review-container">
          {props.review}
      </div>
  )
}

export default ReviewCard;