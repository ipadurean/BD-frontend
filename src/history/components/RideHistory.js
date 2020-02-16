import React from 'react';
import '../styles/History.css';
import Trip from '../containers/Trip';
import { connect } from "react-redux";
import PropTypes from 'prop-types';


const RideHistory = (props) => {

  const { user, drivers } = props

  const getPastTrips = (tr, dr) => {
    let currentTime = new Date().getTime()
    let pastTrips = tr.filter(el => new Date(el.end_time).getTime() < currentTime)
    return pastTrips.map(el => {
      return  <Trip review={!el.review} key={el.id} driver={dr.filter(item => item.id === el.driver_id)[0]} trip={el} />
    })
  }

  const getCurrentTrips = (tr, dr) => {
    let currentTime = new Date().getTime()
    let currentTrips = tr.filter(el => new Date(el.end_time).getTime() > currentTime && new Date(el.start_time).getTime() < currentTime)
    return currentTrips.map(el => {
      return  <Trip key={el.id} driver={dr.filter(item => item.id === el.driver_id)[0]} trip={el} />
    })
  }

  const getFutureTrips = (tr, dr) => {
    let currentTime = new Date().getTime()
    let futureTrips = tr.filter(el => new Date(el.start_time).getTime() > currentTime)
    return futureTrips.map(el => {
      return  <Trip  cancel={true} key={el.id} driver={dr.filter(item => item.id === el.driver_id)[0]} trip={el} />
    })
  }

  return (
    <div className="trip-history">
      <div className="user" >
        <h3>Hello <em>{user.username}</em>! This is the history of your rides:</h3>
          <div>
            <h5>Current rides:</h5>
            {getCurrentTrips(user.trips, drivers)}
          </div>
    
          <div>
          <h5>Upcoming rides:</h5>
            {getFutureTrips(user.trips, drivers)}
          </div>
    
          <div>
          <h5>Past rides:</h5>
            {getPastTrips(user.trips, drivers)}
          </div>
      </div>
    </div>
  );
}

RideHistory.propTypes = {
  user: PropTypes.object.isRequired,
  drivers: PropTypes.array.isRequired
}

function mapStateToProps(state){
  return {user: state.auth.user, drivers: state.drivers.drivers}
}

export default connect(mapStateToProps, null)(RideHistory)