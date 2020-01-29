import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/driverProfile.css'
import Calendar from '../Containers/Calendar';
import Auth from '../Services/authAdapter';
import back from '../Assets/back.svg'



class DriverProfile extends Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }
  }
 

  componentDidMount() {
    window.scrollTo(100, 200)
    if (localStorage.getItem('jwt')) {
      Auth.currentUser()
        .then(user => {
          if (!user.error) {
            this.setState({
                user: {id: user.id, username: user.username}
                 })
            }
          })
        }
  }  

  render(){
  
      return (
            <div className="driver-container">
              <button onClick={this.props.back} className="svg-icon">
                  <img src={back} alt="back"/><span> Back</span>
              </button>
              <div className="driver-card">
                  <div className="bio">
                      <div className="photo">
                          <div className="username">{this.props.driver.name} <h6>Chauffeur</h6></div>
                          <img id="profile-photo" alt="img" src={this.props.driver.photo}/>
                          <em>Rating {this.props.driver.rating}*</em>
                      </div>
                      <div className="description">{this.props.driver.description}</div>
                      <div id="hourly-rate">Rate: ${this.props.driver.rate}/hour</div>
                  </div>
                  
                  <div className="vehicle">
                      <div id="vehicle-model">{this.props.driver.car}</div>
                      <img className="car-photo" alt="car" src={this.props.driver.car_photo}/>
                  </div>
              </div>
            
              <Calendar user={this.state.user} driver={this.props.driver} timeToBook={this.props.timeToBook} />
        </div>
      )
    }

}

export default DriverProfile;