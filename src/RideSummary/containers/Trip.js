import React from 'react';
import '../style.css';
import TimeZone from '../../utils/timeZone';
import Parse from '../../utils/parse';
import { fetchDelete } from '../ducks/operations';
import { openReview, openRating } from '../ducks/actions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { FlexRow, FlexColumn2 } from '../../styles/StyledContainers';
import { Title2, Title3, Title4, Text, Text2, Text3 } from '../../styles/StyledText';
import { Button4 } from '../../styles/StyledButtons';

const Trip = (props) => {

  const { trip, cancel, past, reviewOpen, ratingOpen } = props
  const date1 = TimeZone.toCentralTime(trip.start_time)
  const date2 = TimeZone.toCentralTime(trip.end_time)
  const addReview = () => {
    props.openReviewForm(trip.id)
  }

  const addRating = () => {
    props.openRatingForm(trip.id)
  }

  const cancelRide = (e) => {
    e.preventDefault()
    props.delete(props.trip.id)
  }


  return (
    <div className='trip-container'>
      <FlexRow id="trip-header">
        <Title2>Trip number: <b>{trip.id + 1000}</b></Title2>
        <Title2>For: <Text2>{Parse.formatDate(date1)}</Text2></Title2>
      </FlexRow>
      <FlexRow>
        <FlexColumn2 style={{ 'min-width': 'calc(130px + 20vw)' }}>
          <div>
            <img id="trip-img" alt="img" src={trip.driver_photo} /><Title3> Driver: </Title3><Text2><b>{trip.driver_name}</b></Text2>
          </div>
            <Text>Pick-up date: <Text2>{Parse.formatDate(date1)}</Text2> at: <Text2>{date1.slice(15, 21)}</Text2></Text>
            <Text>Drop-off date: <Text2>{Parse.formatDate(date2)}</Text2> at: <Text2>{date2.slice(15, 21)}</Text2></Text>
            <Text>Pick up address: <Text2>{trip.address}</Text2></Text>
            <Text>Total cost: <Text2>${trip.total}</Text2></Text>
        </FlexColumn2>
        <div style={{'width': 'auto', 'min-width': '120px'}}>
          {cancel && <button onClick={cancelRide} id="cancel-button"> Cancel Ride </button>}
            {(trip.review || trip.rating) &&
              <div className="review-body">
                {trip.review &&
                  <div><Title4>My review: </Title4><Text3><i>{trip.review}</i></Text3></div>}
                  {trip.rating && <Title4>My rating: <Text2>{trip.rating}</Text2></Title4>}
              </div>}
          {past && <FlexColumn2 style={{'float': 'right'}}>
            {!trip.review && !reviewOpen && <Button4 onClick={addReview}><u>Add Review</u></Button4>}
            {!trip.rating && !ratingOpen && <Button4 onClick={addRating}><u>Rate Driver</u></Button4>}
          </FlexColumn2>}
        </div>
      </FlexRow>
        <br />
        <Text3><em>The ride was booked on: {new Date(trip.created_at).toString()}</em></Text3>
    </div>
  )
  
}
  
Trip.propTypes = {
  trip: PropTypes.object.isRequired,
  cancel: PropTypes.bool,
  driver: PropTypes.object,
  review: PropTypes.bool
}

function mapStateToProps(state){
  return state.rideSummary
}

function mapDispatchToProps(dispatch){
  return { 
    delete: (id) => dispatch(fetchDelete(id)),
    openReviewForm: (id) => dispatch(openReview(id)),
    openRatingForm: (id) => dispatch(openRating(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)