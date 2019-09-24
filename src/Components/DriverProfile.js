import React from 'react';
import "./components.css"

const DriverProfile = (props) => {
  
  return (
<div>
  <div className="box">
    <img id="profile-photo" alt="img" src={props.driver.photo}/>
    <div class="username">{props.driver.name}</div>
    <span>Rating {props.driver.rating}*</span>
    <div class="bio">
      <h4>Chauffeur</h4>
      {props.driver.description}
    </div>
  </div>
  
  <div>
    <h4>${props.driver.rate}/hour</h4>
    <h4>{props.driver.car}</h4>
    <img className="car-photo" alt="car" src={props.driver.car_photo}/>
    <div><button id="btn">Book ride</button></div>
   </div>
</div>
  )
}

export default DriverProfile;