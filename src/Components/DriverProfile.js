import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./driverProfile.css";
import Calendar from '../Containers/Calendar';



class DriverProfile extends Component {
 

  componentDidMount() {
    window.scrollTo(100, 200)
  }  

  render(){
  
      return (
        <div className="driver-container">
          <button id="back" onClick={this.props.back} >Back</button>
          <div className="driver-card">
           
              <div className="bio">
                <div className="username">{this.props.driver.name}</div>
                
                <img id="profile-photo" alt="img" src={this.props.driver.photo}/>
                <h4>Chauffeur</h4>
                <span>Rating {this.props.driver.rating}*</span>

                <p id="description">{this.props.driver.description}</p>
                <h5>Rate: ${this.props.driver.rate}/hour</h5>
              </div>
              
              <div className="vehicle">
                <h5>{this.props.driver.car}</h5>
                <img className="car-photo" alt="car" src={this.props.driver.car_photo}/>
              </div>
            </div>
            
              <Calendar user={this.props.user} driver={this.props.driver} />
         </div>
      )
    }

}

export default DriverProfile;