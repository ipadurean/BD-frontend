import React from 'react';
import { FlexColumn2, FlexColumn } from '../../styles/StyledContainers';
import ReviewCard from './ReviewCard';
import { connect } from "react-redux";
import { Close } from '../../styles/StyledButtons';
import close from '../../utils/assets/close.svg';
import { closeReviews } from '../ducks/actions';

const ReviewsList = (props) => {
  

  const closeReviews = () => {
    props.closeReviews()
  }

  const { driver } = props;
  return (
    <FlexColumn className='reviews-list'>
      <Close onClick={closeReviews} alt="close" id="close" src={close} />
        <FlexColumn2>
          {driver.trips.map(trip => {
            return trip.review && <ReviewCard key={trip.id} review={trip.review} />
        })}
      </FlexColumn2>
    </FlexColumn>
  )
}

function mapStateToProps(state) {
  return {
    driver: state.booking.driver,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeReviews: () => dispatch(closeReviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);