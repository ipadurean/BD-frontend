import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components.css";
import Calendar from '../Containers/Calendar';


class DriverProfile extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     time: 1,
  //   }
  // }

     

    render(){
      
      return (
    <div className="driver-container">
      <div className="box">
        <img id="profile-photo" alt="img" src={this.props.driver.photo}/>
        <div className="username">{this.props.driver.name}</div>
        <span>Rating {this.props.driver.rating}*</span>
        <div className="bio">
          <h4>Chauffeur</h4>
          {this.props.driver.description}
        </div>
      </div>
      <div className="book">
        
          <Calendar user={this.props.user} driver={this.props.driver} />
          
          
          
      </div>
      
      <div>
        <h4>${this.props.driver.rate}/hour</h4>
        <h4>{this.props.driver.car}</h4>
        <img className="car-photo" alt="car" src={this.props.driver.car_photo}/>
        
      </div>
      
    </div>
      )
    }

}

export default DriverProfile;