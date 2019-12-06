import React from 'react';
import '../styles/general.css';


const Invoice = (props) => {
   
      return (
        <div className="invoice">
          <p id="num">Trip number: {props.trip.id + 1000}<span id="booking-time">Booked on: <em>{new Date(props.trip.created_at).toString().slice(0, 25)}</em></span></p>
          <h3>Your ride with {props.driver.name} was booked!</h3>
            <p> Date: <b>{new Date(props.trip.start_time).toString().slice(0, 15)}</b></p>
            <p>From: <b>{new Date(props.trip.start_time).toString().slice(16, 18)}:00</b> to:<b>{new Date(props.trip.end_time).toString().slice(16, 18)}:00</b></p>
            <p>The pick up address is: <b>{props.trip.address}</b></p>
            <p>Total cost: <b>${props.trip.total}</b></p>
            <div>
               
              <button onClick={props.reset}>Back</button>
            </div>
        </div>
      )
}
  







export default Invoice;