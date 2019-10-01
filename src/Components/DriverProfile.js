import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components.css";
import Trip from './Trip';
import Calendar from '../Containers/Calendar';


class DriverProfile extends Component {
  constructor(){
    super()
    this.state = {
      time: 1,
    }
  }

      handleChange = (event) => {
        this.setState({
          time: event.target.value,
        })
      }

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
          <p>Select time needed:</p>
          <select onChange={this.handleChange}>
              
              <option value="1" >1 hour</option>
              <option value="2" >2 hours</option>
              <option value="3" >3 hours</option>
              <option value="4" >4 hours</option>
              <option value="5" >5 hours</option>
              <option value="6" >6 hours</option>
              <option value="7" >7 hours</option>
              <option value="8" >8 hours</option>
              <option value="9" >9 hours</option>
          </select>
          <Calendar />
          
          <Button onClick={() => this.props.book(this.state.time)} id="btn">Book ride with this driver</Button>
          {this.props.booked && <Trip time={this.state.time} driver={this.props.driver} />}
          
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