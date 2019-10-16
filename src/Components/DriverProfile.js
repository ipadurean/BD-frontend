import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./driverProfile.css";
import Calendar from '../Containers/Calendar';



class DriverProfile extends Component {
 

     

  render(){
      return (
        <div className="driver-container">
        <button onClick={this.props.back} >Back</button>
            <div className="box">
              <div className="bio">
                <div className="username">{this.props.driver.name}</div>
                <span>Rating {this.props.driver.rating}*</span>
                <h4>Chauffeur</h4>
                <img id="profile-photo" alt="img" src={this.props.driver.photo}/>
                {this.props.driver.description}
                <h4>${this.props.driver.rate}/hour</h4>
              </div>
              
              <div>
                <h4>{this.props.driver.car}</h4>
                <img className="car-photo" alt="car" src={this.props.driver.car_photo}/>
              </div>
            </div>
            
              <Calendar user={this.props.user} driver={this.props.driver} />
            
            
            
        </div>
      )
    }

}

export default DriverProfile;