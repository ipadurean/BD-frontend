import React from 'react';
import '../Style/general.css';

const IntroProfiles = (props) => {
  
  return (
      <div className="car-list">
            <div className="title">
              <h4>{props.driver.username}</h4><span>Rating {props.driver.rating}*</span>
              
            </div>
            <img id="intro" alt="img" src={props.driver.car_photo}/>
          <p> - {props.driver.car}</p>
          
      </div>
  )
}

export default IntroProfiles;