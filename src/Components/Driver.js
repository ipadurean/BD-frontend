import React from 'react';
import '../styles/Driver.css';

const Driver = (props) => {
  
  return (
      <div onClick={() => props.select(props.driver)} className="driver-brief">
            <div className="title">
              <h5>{props.driver.username}</h5><span>Rating {props.driver.rating}*</span>
              <p>Rate: ${props.driver.rate}/hour</p>
              
            </div>
            <img id="img" alt="img" src={props.driver.photo}/>
          <div id="vehicle"><p> ~ {props.driver.car} ~ </p></div>
          <div id="total">{props.filter && <p>Total: ${props.driver.rate * props.hoursTotal}</p>}</div>
          <button>Book ride with this driver</button>
      </div>
  )
}

export default Driver;