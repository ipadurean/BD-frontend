import React from 'react';


const Invoice = (props) => {
   
      return (
        <div className="invoice">
          <p>Trip number: {props.trip.id + 1000}</p>
            <h3>Your ride with {props.driver.name} was booked!</h3>
            <p> Date: <b>{new Date(props.trip.start_time).toString().slice(0, 15)}</b></p>
            <p>From: <b>{new Date(props.trip.start_time).toString().slice(16, 18)}:00</b> to:<b>{new Date(props.trip.end_time).toString().slice(16, 18)}:00</b></p>
            <p>Total cost: <b>${props.trip.total}</b></p>
            <p>The pick up address is: {props.trip.address}</p>
            <div>
              
              <p>The ride was booked on: <em>{new Date(props.trip.created_at).toString()}</em></p>
            </div>
        </div>
      )
}
  







export default Invoice;