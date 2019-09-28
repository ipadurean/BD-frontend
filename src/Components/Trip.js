import React from 'react';

const Trip = (props) => {

  return (
     <div>
       <p>You booked a ride with: {props.driver.name}</p>
       <p>Total time booked: {props.time} </p>
       <p>Total: ${props.time*props.driver.rate}</p>
     </div>
  )

}

export default Trip;