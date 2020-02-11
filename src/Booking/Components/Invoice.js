import React from 'react';
import '../Styles/Invoice.css';
import TimeZone from '../../Utils/timeZone';
import { resetBooked } from '../Ducks/actions';
import { connect } from "react-redux";


const Invoice = (props) => {


  function resetBook() {
      props.reset()
  }
   
      return (
        <div className="invoice">
          <p id="num">Trip number: {props.trip.id + 1000}<span id="booking-time">Booked on: <em>{new Date(props.trip.created_at).toString()}</em></span></p>
          <h3>Your ride with {props.driver.name} was booked!</h3>
            <p> Date: <b>{TimeZone.toCentralTime(props.trip.start_time).slice(0, 15)}</b></p>
            <p>From: <b>{TimeZone.toCentralTime(props.trip.start_time).slice(16, 18)}:00</b> to:<b>{TimeZone.toCentralTime(props.trip.end_time).slice(16, 18)}:00</b></p>
            <p>The pick up address is: <b>{props.trip.address}</b></p>
            <p>Total cost: <b>${props.trip.total}</b></p>
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
  


function mapDispatchToProps(dispatch){
  return {
    reset: () => dispatch(resetBooked())
  }
}




export default connect(null, mapDispatchToProps)(Invoice);