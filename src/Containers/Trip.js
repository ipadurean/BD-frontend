import React, { Component } from 'react';
import ReviewForm from './ReviewForm'
import '../styles/Trip.css'



class Trip extends Component {
  constructor(){
    super()
    this.boxRef = React.createRef();
    this.state = {
      open: false,
      clickReview: false,
      submitted: false
    }
  }

  handleClick = () => {
    this.setState(prevState =>{ 
      return {
        open: !prevState.open,
        clickReview: false
      }
    })
    !this.state.open &&  this.boxRef.current.scrollIntoView({
      behavior: 'smooth',
    });
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

  handleSubmit = (event, review) => {
    event.preventDefault()
    fetch(`https://radiant-fjord-35660.herokuapp.com/trips/${this.props.trip.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        review
      })
    })
    .then(res => res.json())
    .then(this.setState({submitted: true}))
  }

    render(){
        return (
          <div className="trip-container" ref={this.boxRef}>
            <p onClick={this.handleClick} id="trip-header"><b>Trip number: {this.props.trip.id + 1000} </b><span id="date"><b>For: </b><em>{new Date(this.props.trip.start_time).toString().slice(0,10)}</em></span></p>
            {this.state.open && 
                  <div id="trip-body">
                    <img id="img" alt="img" src={this.props.driver.photo}/>
                      <h4>Driver name: {this.props.driver.name}</h4>
                      {this.props.trip.review && <div className="review-body">
                                                <h6><b>Your review:</b></h6>
                                                <p><i>{this.props.trip.review}</i></p>
                                          </div>}
                      <p>Date: <b>{new Date(this.props.trip.start_time).toString().slice(0, 15)}</b></p>
                      <p>From: <b>{new Date(this.props.trip.start_time).toString().slice(16, 18)}:00</b> to:<b>{new Date(this.props.trip.end_time).toString().slice(16, 18)}:00</b></p>
                      <p>Pick up address: {this.props.trip.address}</p>
                      <p>Total cost: <b>${this.props.trip.total}</b></p>
                      <p><em>The ride was booked on: {new Date(this.props.trip.created_at).toString().slice(0, 21)}</em></p>
                      {this.props.cancel && <button onClick={this.props.cancel}>Cancel Ride</button>}
                      {this.props.review && !this.state.clickReview && <button onClick={this.addReview}>Add Review</button>}
                      {!this.state.submitted && this.state.clickReview && <button onClick={this.cancelReview}>Cancel</button>}
                  </div>}
            {this.state.clickReview && <ReviewForm submit={this.handleSubmit} 
                                                   submitted={this.state.submitted} 
                                                   trip={this.props.trip}/>}
          </div>
        )
    }
}
  







export default Trip;