import React from 'react';
import '../styles/general.css';
import TimeZone from '../Services/timeZone';


const Invoice = (props) => {
   
      return (
        <div className="invoice">
          <p id="num">Trip number: {props.trip.id + 1000}<span id="booking-time">Booked on: <em>{new Date(props.trip.created_at).toString()}</em></span></p>
          <h3>Your ride with {props.driver.name} was booked!</h3>
            <p> Date: <b>{TimeZone.toCentralTime(props.trip.start_time).slice(0, 15)}</b></p>
            <p>From: <b>{TimeZone.toCentralTime(props.trip.start_time).slice(16, 18)}:00</b> to:<b>{TimeZone.toCentralTime(props.trip.end_time).slice(16, 18)}:00</b></p>
            <p>The pick up address is: <b>{props.trip.address}</b></p>
            <p>Total cost: <b>${props.trip.total}</b></p>
            <div>
            <button onClick={props.reset} className="svg-icon">
              <svg viewBox="0 0 20 20">
                  <path d="M3.24,7.51c-0.146,0.142-0.146,0.381,0,0.523l5.199,5.193c0.234,0.238,0.633,0.064,0.633-0.262v-2.634c0.105-0.007,0.212-0.011,0.321-0.011c2.373,0,4.302,1.91,4.302,4.258c0,0.957-0.33,1.809-1.008,2.602c-0.259,0.307,0.084,0.762,0.451,0.572c2.336-1.195,3.73-3.408,3.73-5.924c0-3.741-3.103-6.783-6.916-6.783c-0.307,0-0.615,0.028-0.881,0.063V2.575c0-0.327-0.398-0.5-0.633-0.261L3.24,7.51 M4.027,7.771l4.301-4.3v2.073c0,0.232,0.21,0.409,0.441,0.366c0.298-0.056,0.746-0.123,1.184-0.123c3.402,0,6.172,2.709,6.172,6.041c0,1.695-0.718,3.24-1.979,4.352c0.193-0.51,0.293-1.045,0.293-1.602c0-2.76-2.266-5-5.046-5c-0.256,0-0.528,0.018-0.747,0.05C8.465,9.653,8.328,9.81,8.328,9.995v2.074L4.027,7.771z"></path>
              </svg>
            </button>  
            </div>
        </div>
      )
}
  







export default Invoice;