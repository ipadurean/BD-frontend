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
                <div className="photo">
                    <div className="username">{this.props.driver.name} <h6>Chauffeur</h6></div>
                       <img id="profile-photo" alt="img" src={this.props.driver.photo}/>
                      <em>Rating {this.props.driver.rating}*</em>
                   </div>
                <div class="description">{this.props.driver.description}</div>
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