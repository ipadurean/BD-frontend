import React from 'react';
import "./components.css"

const Driver = (props) => {
  
  return (
<div onClick={() => props.select(props.driver)} className="driver-list">
      <div className="title">
        <h4>{props.driver.username}</h4><span>Rating {props.driver.rating}*</span>
        <p>Rate: ${props.driver.rate}/hour</p>
        
      </div>
      <img id="img" alt="img" src={props.driver.photo}/>
    <p> - {props.driver.car} - </p>
</div>
  )
}

export default Driver;