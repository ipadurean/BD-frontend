import React, { Component } from 'react';
import ReviewForm from './ReviewForm';
import '../styles/Trip.css';
import TimeZone from '../../utils/timeZone';
import { Button } from "react-bootstrap";
import { deleteTrip } from '../ducks/actions';
import { connect } from "react-redux";



class Trip extends Component {

    constructor(){
        super()
        this.state = {
          open: false,
          clickReview: false
        }
    }

    handleClick = () => {
        this.setState(prevState =>{ 
            return {
                open: !prevState.open,
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

    cancelRide = (e) => {
        e.preventDefault()
        this.props.delete(this.props.trip.id)
    }

 

    render(){
   
      const { trip, cancel, driver, review } = this.props 
          return (
              <div className={this.state.open? "fixed" : "trip-container"}>
                  <div onClick={this.handleClick} id="trip-header">
                      <b>Trip number: {trip.id + 1000} </b>
                      <span id="date">
                          <b>For: </b><em>{new Date(trip.start_time).toString().slice(0,10)}</em>
                      </span>
                  </div>
                  {this.state.open && 
                      <div id="trip-body" >
                          <img id="img" alt="img" src={driver.photo}/>
                          <h4>Driver name: {driver.name}</h4>
                          {trip.review && <div className="review-body">
                                              <h6><b>Your review:</b></h6>
                                              <p><i>{trip.review}</i></p>
                                          </div>}
                          <p>Date: <b>{new Date(trip.start_time).toString().slice(0, 15)}</b></p>
                          <p>From: <b>{TimeZone.toCentralTime(trip.start_time).slice(16, 21)}</b> to:<b>{TimeZone.toCentralTime(trip.end_time).slice(16, 21)}</b></p>
                          <p>Pick up address: {trip.address}</p>
                          <p>Total cost: <b>${trip.total}</b></p>
                          <p><em>The ride was booked on: {new Date(trip.created_at).toString()}</em></p>
                          {cancel && <Button variant="danger" size="sm" onClick={this.cancelRide}>Cancel Ride </Button>}
                          {review && !this.state.clickReview && <Button size="sm" onClick={this.addReview}>Add Review</Button>}
                          {!this.state.submitted && this.state.clickReview && <Button size="sm" onClick={this.cancelReview}>Cancel</Button>}
                      </div>}
                  {this.state.clickReview && <ReviewForm trip={trip}/>}
              </div>
          )
    }
}
  


function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return { 
     delete: (tripId) => dispatch(deleteTrip(tripId))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Trip)