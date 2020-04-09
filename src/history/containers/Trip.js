import React, { Component } from 'react';
import ReviewForm from './ReviewForm';
import '../styles/Trip.css';
import TimeZone from '../../utils/timeZone';
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
    !this.state.open &&
      this.setState({
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
      open: false,
      clickReview: false
    })
  }

  render(){
   
    const { trip, cancel, review } = this.props 
    const date1 = TimeZone.toCentralTime(trip.start_time)
    const date2 = TimeZone.toCentralTime(trip.end_time)
    
      return (
        <div className={this.state.open? "fixed" : "trip-container"}>
          <div onClick={this.handleClick} id="trip-header">
            <span>Trip number: <b>{trip.id + 1000}</b></span>
            <span className="trip-date">
              <span>For: </span><em>{date1.slice(0,10)}</em>
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
              <div>Date: <span>{date1.slice(0, 15)}</span></div>
            <div>From: <span>{date1.slice(16, 21)}</span> to:<span>{date2.slice(16, 21)}</span></div>
                <div>Pick up address: {trip.address}</div>
              <div>Total cost: <span>${trip.total}</span></div>
            
              {cancel && <button onClick={this.cancelRide}> Cancel Ride </button>}
            {review && !this.state.clickReview && <div className="add-review" onClick={this.addReview}><u>Add Review</u></div>}
  
            <div className="trip-date"><em>The ride was booked on: {new Date(trip.created_at).toString()}</em></div>
            </div>}
          {this.state.clickReview &&
            <div className="review-form-container">
              {!this.state.submitted && <img style={{ 'width': '20px', 'float': 'right'}} onClick={this.cancelReview} alt="close" id="close" src={close} />}
                <ReviewForm trip={trip} />
            </div>}
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