import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/driverProfile.css';
import Calendar from './Calendar';
import { connect } from "react-redux";





class DriverProfile extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     user: {}
  //   }
  // }
 

  componentDidMount() {
    window.scrollTo(100, 200)
  }  



  render(){
    console.log(this.props)
    const { driver } = this.props
    
      return (
            <div className="driver-container">
              {/* <button onClick={this.props.back} className="svg-icon">
                  <svg width="8px" height="12px" viewBox="0 0 8 12" version="1.1" >
                      <polygon points="7.41 1.41 6 0 0 6 6 12 7.41 10.59 2.83 6"></polygon>
                  </svg><span> Back</span>
              </button> */}
              <div className="driver-card">
                  <div className="bio">
                      <div className="photo">
                          <div className="username">{driver.name} <h6>Chauffeur</h6></div>
                          <img id="profile-photo" alt="img" src={driver.photo}/>
                          <em>Rating {driver.rating}*</em>
                      </div>
                      <div className="description">{driver.description}</div>
                      <div id="hourly-rate">Rate: ${driver.rate}/hour</div>
                  </div>
                  
                  <div className="vehicle">
                      <div id="vehicle-model">{driver.car}</div>
                      <img className="car-photo" alt="car" src={driver.car_photo}/>
                  </div>
              </div>
            
              <Calendar />
        </div>
      )
    }

}

function mapStateToProps(state){
  return state
}


export default connect(mapStateToProps, null)(DriverProfile);