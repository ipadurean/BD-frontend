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
      <p id="num">Trip number: {trip.id + 1000}<span id="booking-time">Booked on: <em>{new Date(trip.created_at).toString()}</em></span></p>
      <h3>Your ride with {driver.name} was booked!</h3>
        <p> Date: <b>{TimeZone.toCentralTime(trip.start_time).slice(0, 15)}</b></p>
        <p>From: <b>{TimeZone.toCentralTime(trip.start_time).slice(16, 18)}:00</b> to:<b>{TimeZone.toCentralTime(trip.end_time).slice(16, 18)}:00</b></p>
        <p>The pick up address is: <b>{trip.address}</b></p>
        <p>Total cost: <b>${trip.total}</b></p>
        <div>
          <button onClick={resetBook} className="back">
            <svg width="8px" height="12px" viewBox="0 0 8 12" version="1.1" >
              <polygon points="7.41 1.41 6 0 0 6 6 12 7.41 10.59 2.83 6"></polygon>
            </svg><span> Back</span>
          </button>  
        </div>
    </div>
  )
}

Invoice.propTypes = {
  trip: PropTypes.object,
  driver: PropTypes.object
}
  
function mapDispatchToProps(dispatch){
  return {
    reset: () => dispatch(resetBooked())
  }
}

export default connect(null, mapDispatchToProps)(Invoice);