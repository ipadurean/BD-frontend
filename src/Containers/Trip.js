import React, { Component } from 'react';
import './History.css'



class Trip extends Component {
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState(prevState =>{ 
      return {
        clicked: !prevState.clicked
      }
    })
  }

      render(){
      return (
        <div onClick={this.handleClick} className="trip-container">
          <p id="trip-header"><b>Trip number: {this.props.trip.id + 1000} </b><span id="date"><b>For: </b><em>{new Date(this.props.trip.start_time).toString().slice(0,10)}</em></span></p>
          {this.state.clicked && <div id="trip-body">
              <h4>Driver name: {this.props.driver.name}</h4>
              <p> Date: <b>{new Date(this.props.trip.start_time).toString().slice(0, 15)}</b></p>
              <p>From: <b>{new Date(this.props.trip.start_time).toString().slice(16, 18)}:00</b> to:<b>{new Date(this.props.trip.end_time).toString().slice(16, 18)}:00</b></p>
              <p>Pick up address: {this.props.trip.address}</p>
              <p>Total cost: <b>${this.props.trip.total}</b></p>
              <p><em>The ride was booked on: {new Date(this.props.trip.created_at).toString().slice(0, 21)}</em></p>
          </div>}
        </div>
      )
    }
}
  







export default Trip;