import React from 'react';
import "./components.css"

const Driver = (props) => {
  
  return (
      <div onClick={() => props.select(props.driver)} className="driver-icon">
            <div className="title">
              <h5>{props.driver.username}</h5><span>Rating {props.driver.rating}*</span>
              <p>Rate: ${props.driver.rate}/hour</p>
              
            </div>
            <img id="img" alt="img" src={props.driver.photo}/>
          <p> - {props.driver.car} - </p>
      </div>
  )
}

export default Driver;