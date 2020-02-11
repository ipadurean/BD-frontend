import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/driverProfile.css';
import BookingCalendar from './BookingCalendar';
import { connect } from "react-redux";
import { fetchDriver } from '../Ducks/actions';
import ReviewCard from './ReviewCard';





class DriverProfile extends Component {
  
    componentDidMount() {
      window.scrollTo(100, 200);
      this.props.getDriver(this.props.driver.id)
    }  



    render(){
    
    const { driver, booking } = this.props
        return (
            <div className="driver-container">
                <div className="bio">
                    <div className="photo">
                        <div className="username">{driver.name} <h6>Chauffeur</h6></div>
                        <img id="profile-photo" alt="img" src={driver.photo}/>
                        <em>Rating {driver.rating}*</em>
                    </div>
                    <div className="description">{driver.description}</div>
                    <div id="hourly-rate">Rate: ${driver.rate}/hour</div>
                </div>
                  
                <div className="vehicle">
                    <div id="vehicle-model">{driver.car}</div>
                    <img className="car-photo" alt="car" src={driver.car_photo}/>
                </div>
                <h5 id="reviews-title">Reviews:</h5>
                <div className="reviewList">
                    {booking.driverTrips.map(trip => {
                        return trip.review && <ReviewCard key={trip.id} review={trip.review} />
                    })}
                </div>
                <BookingCalendar driver={driver} />
            </div>
      )
    }

}

function mapStateToProps(state){
    return state
}

function mapDispatchToProps(dispatch){
    return {
        getDriver: (id) => dispatch(fetchDriver(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DriverProfile);