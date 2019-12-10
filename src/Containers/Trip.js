import React, { Component } from 'react';
import ReviewForm from './ReviewForm'
import '../styles/History.css'



class Trip extends Component {
  constructor(){
    super()
    this.state = {
      clicked: false,
      clickReview: false
    }
  }

  handleClick = () => {
    this.setState(prevState =>{ 
      return {
        clicked: !prevState.clicked,
        clickReview: false
      }
    })
  }

  addReview = () => {
    this.setState({
      clickReview: true
    })
  }

  cancelReview = () => {
    this.setState({
      clickReview: false
    })
  }

      render(){
      return (
        <div className="trip-container">
          <p onClick={this.handleClick} id="trip-header"><b>Trip number: {this.props.trip.id + 1000} </b><span id="date"><b>For: </b><em>{new Date(this.props.trip.start_time).toString().slice(0,10)}</em></span></p>
          {this.state.clicked && 
          <div id="trip-body">
            <img id="img" alt="img" src={this.props.driver.photo}/>
              <h4>Driver name: {this.props.driver.name}</h4>
              <p> Date: <b>{new Date(this.props.trip.start_time).toString().slice(0, 15)}</b></p>
              <p>From: <b>{new Date(this.props.trip.start_time).toString().slice(16, 18)}:00</b> to:<b>{new Date(this.props.trip.end_time).toString().slice(16, 18)}:00</b></p>
              <p>Pick up address: {this.props.trip.address}</p>
              <p>Total cost: <b>${this.props.trip.total}</b></p>
              <p><em>The ride was booked on: {new Date(this.props.trip.created_at).toString().slice(0, 21)}</em></p>
              {this.props.cancel && <button onClick={this.props.cancel}>Cancel Ride</button>}
              {this.props.review && !this.state.clickReview && <button onClick={this.addReview}>Add Review</button>}
              {this.state.clickReview && <button onClick={this.cancelReview}>Cancel</button>}
          </div>}
          {this.state.clickReview && <ReviewForm trip={this.props.trip}/>}
          
        </div>
      )
    }
}
  







export default Trip;