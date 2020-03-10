import React from 'react';
import '../styles/Invoice.css';
import TimeZone from '../../utils/timeZone';
import { resetBooked } from '../ducks/actions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';


const Invoice = (props) => {

  const { trip, driver } = props
 

  function resetBook() {
    props.reset()
  }
   
  return (
    <div className="invoice">
      <div id="trip-num">Trip no:<b>{trip.id + 1000} </b><span id="booking-time"> Booked on: <em>{new Date(trip.created_at).toString()}</em></span></div>
      <div id="trip-details">
        <h3>Your ride with {driver.name} was booked!</h3>
        <div> Date: <b>{TimeZone.toCentralTime(trip.start_time).slice(0, 15)}</b></div>
        <div>From: <b>{TimeZone.toCentralTime(trip.start_time).slice(16, 18)}:00</b> to:<b>{TimeZone.toCentralTime(trip.end_time).slice(16, 18)}:00</b></div>
        <div>The pick up address is: <b>{trip.address}</b></div>
        <div>Total cost: <b>${trip.total}</b></div>
      </div>
      <div>
        <button onClick={resetBook} id="back">
          <svg width="8px" height="12px" viewBox="0 0 8 12" version="1.1" >
            <polygon points="7.41 1.41 6 0 0 6 6 12 7.41 10.59 2.83 6"></polygon>
          </svg><span> Back</span>
        </button>  
      </div>
    </div>
  )
}

Invoice.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }),
  driver: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    driver: state.booking.driver,
    trip: state.booking.trip
  }
}
  
function mapDispatchToProps(dispatch){
  return {
    reset: () => dispatch(resetBooked())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);