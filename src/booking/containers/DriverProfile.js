import React, { Component } from 'react';
import '../styles/driverProfile.css';
import BookingCalendar from './BookingCalendar';
import { connect } from "react-redux";
import { fetchDriver } from '../ducks/operations';
import ReviewCard from '../components/ReviewCard';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import star from '../../utils/assets/star-solid.svg';

class DriverProfile extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 10);
    this.props.getDriver(this.props.driver.id)
  }  

  render(){
    const { driver, driverTrips, authorized } = this.props
    return (
      <div>
        {authorized &&
          <div className="driver-container">
            <div className="bio">
              <div className="photo">
                <div className="username">{driver.name} <h6>Chauffeur</h6></div>
                <img id="profile-photo" alt="img" src={driver.photo} />
                <div>
                  <em>Rating {driver.rating} </em>
                  <img className="star" alt="star" src={star} />
                </div>
              </div>
              <div className="description">{driver.description}</div>
              <div id="hourly-rate">Rate: ${driver.rate}/hour</div>
            </div>
              
            <div className="vehicle">
              <div id="vehicle-model">{driver.car}</div>
              <LazyLoadImage effect="blur" className="car-photo" alt="car" src={driver.car_photo} />
            </div>
            <h5 id="reviews-title">Reviews:</h5>
            <div className="reviewList">
              {driverTrips.map(trip => {
                return trip.review && <ReviewCard key={trip.id} review={trip.review} />
              })}
            </div>
            <BookingCalendar driver={driver} />
          </div>}
      </div>
    )
  }
}

DriverProfile.propTypes = {
  driverTrips: PropTypes.array,
  driver: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    rate: PropTypes.number,
    photo: PropTypes.string,
    car: PropTypes.string,
    username: PropTypes.string
  })
}

function mapStateToProps(state){
  return {
    driverTrips: state.booking.driverTrips,
    authorized: state.auth.authorized
  }
}

function mapDispatchToProps(dispatch){
  return {
    getDriver: (id) => dispatch(fetchDriver(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverProfile);