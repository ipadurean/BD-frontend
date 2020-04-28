import React from 'react';
import '../styles/ReviewCard.css';
import PropTypes from 'prop-types';
import { Text1 } from '../../styles/StyledText';

const ReviewCard = (props) => {
  
  return(
    <Text1>
      {props.review}
    </Text1>
  )
}

ReviewCard.propTypes = {
  review: PropTypes.string.isRequired
}

export default ReviewCard;