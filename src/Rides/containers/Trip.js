import React, { Component } from 'react';
import ReviewForm from './ReviewForm';
import '../style.css';
import TimeZone from '../../utils/timeZone';
import { fetchDelete } from '../ducks/operations';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { FlexRow, FlexColumn2 } from '../../styles/StyledContainers';
import { Title1, Title2, Text1, Text2, Text3 } from '../../styles/StyledText';
import { Button1 } from '../../styles/StyledButtons'; 

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
        <div className='trip-container'>
          <FlexRow onClick={this.handleClick} id="trip-header">
            <Title1>Trip number: <b>{trip.id + 1000}</b></Title1><Title1> For: <Text2><em>{date1.slice(0, 10)}</em></Text2></Title1>
          </FlexRow>
            <div id="trip-body">
              <Title2><img id="trip-img" alt="img" src={trip.driver_photo} /> Driver: <Text2><b>{trip.driver_name}</b></Text2></Title2>
                {trip.review &&
                  <div className="review-body">
                    <Title2>My review:</Title2>
                    <Text2><i>{trip.review}</i></Text2>
                  </div>}
                <FlexColumn2>
                  <Text1>Pick-up date: <Text2>{date1.slice(0, 15)}</Text2> at: <Text2>{date1.slice(15, 21)}</Text2></Text1>
                  <Text1>Drop-off date: <Text2>{date2.slice(0, 15)}</Text2> at: <Text2>{date2.slice(15, 21)}</Text2></Text1>
                  <Text1>Pick up address: <Text2>{trip.address}</Text2></Text1>
                  <Text1>Total cost: <Text2>${trip.total}</Text2></Text1>
                </FlexColumn2>
                  {cancel && <Button1 onClick={this.cancelRide} id="cancel-button"> Cancel Ride </Button1>}
                  {review && !this.state.clickReview && <div className="add-review" onClick={this.addReview}><u>Add Review</u></div>}
                  <br />
                <Text3><em>The ride was booked on: {new Date(trip.created_at).toString()}</em></Text3>
            </div>
          {this.state.clickReview && <ReviewForm />}
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