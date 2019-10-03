import React from 'react';

const Trip = (props) => {

  return (
     <div className="trip">
       <p>You booked a ride with: {props.driver.name}</p>
       <p>For: {props.date.slice(0,15)} </p>
       <p>Total time booked: {props.time} hours</p>
       <p>Total: ${props.time*props.driver.rate}</p>
     </div>
  )

}

export default Trip;