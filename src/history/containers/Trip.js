import React, { Component } from 'react';
import ReviewForm from './ReviewForm';
import '../styles/Trip.css';
import TimeZone from '../../utils/timeZone';
import { Button } from "react-bootstrap";
import { fetchDelete } from '../ducks/operations';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import close from '../../utils/assets/close.svg';



class Trip extends Component {

  constructor(){
    super()
    this.state = {
      open: false,
      clickReview: false
    }
  }

  handleClick = () => {
    !this.state.open && this.setState({
        open: true,
        clickReview: false
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

  close = () => {
    this.setState({
      open: false
    })
  }

  render(){
   
    const { trip, cancel, review } = this.props 
    
      return (
        <div className={this.state.open? "fixed" : "trip-container"}>
          <div onClick={this.handleClick} id="trip-header">
            <span>Trip number: <b>{trip.id + 1000}</b></span>
            <span className="trip-date">
              <span>For: </span><em>{new Date(trip.start_time).toString().slice(0,10)}</em>
            </span>
            {this.state.open && <img onClick={this.close} alt="close" id="close" src={close} />}
          </div>
          {this.state.open && 
          <div id="trip-body" >
            <img id="trip-img" alt="img" src={trip.driver_photo}/>
            <h6>Driver name: {trip.driver_name}</h6>
            {trip.review && <div className="review-body">
                              <h6><span>Your review:</span></h6>
                              <div><i>{trip.review}</i></div>
                            </div>}
            <div>Date: <span>{TimeZone.toCentralTime(trip.start_time).slice(0, 15)}</span></div>
              <div>From: <span>{TimeZone.toCentralTime(trip.start_time).slice(16, 21)}</span> to:<span>{TimeZone.toCentralTime(trip.end_time).slice(16, 21)}</span></div>
              <div>Pick up address: {trip.address}</div>
              <div>Total cost: <span>${trip.total}</span></div>
              {cancel && <Button variant="danger" size="sm" onClick={this.cancelRide}>Cancel Ride </Button>}
              {review && !this.state.clickReview && <Button size="sm" onClick={this.addReview}>Add Review</Button>}
            {!this.state.submitted && this.state.clickReview && <Button size="sm" onClick={this.cancelReview}>Cancel</Button>}
            <div className="trip-date"><em>The ride was booked on: {new Date(trip.created_at).toString()}</em></div>
          </div>}
          {this.state.clickReview && <ReviewForm trip={trip} />}
        </div>
      )
  }
}
  
Trip.propTypes = {
  trip: PropTypes.object.isRequired,
  cancel: PropTypes.bool,
  driver: PropTypes.object,
  review: PropTypes.bool
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return { 
     delete: (tripId) => dispatch(fetchDelete(tripId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trip)