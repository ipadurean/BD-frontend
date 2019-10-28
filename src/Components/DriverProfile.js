import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./driverProfile.css";
import Calendar from '../Containers/Calendar';



class DriverProfile extends Component {
 

     

  render(){
  
      return (
        <div className="driver-container">
          <div className="driver-card">
           <button id="back" onClick={this.props.back} >Back</button>
              <div className="bio">
                <div className="username">{this.props.driver.name}</div>
                
                <img id="profile-photo" alt="img" src={this.props.driver.photo}/>
                <h4>Chauffeur</h4>
                <span>Rating {this.props.driver.rating}*</span>

                <p id="description">{this.props.driver.description}</p>
                <h4>Rate: ${this.props.driver.rate}/hour</h4>
              </div>
              
              <div className="vehicle">
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