import React from 'react';


const Trip = (props) => {

  return (
     <div className="trip">
       <p>You are booking a ride with: <em>{props.driver.name}</em></p>
       <p>For: <em>{props.date.slice(0,15)}</em> </p>
       <p>Total time: {props.time} hours</p>
       <p>Total: ${props.time*props.driver.rate}</p>
       <form>
         <label> Pick-up address:
         <input type="text" style={{width:"300px"}} /></label>
         <label>Add note to driver:
         <textarea style={{width:"300px"}}></textarea></label>
         <input id="btn" type="submit" value="Book ride"/>
       </form>
     </div>
  )

}

export default Trip;