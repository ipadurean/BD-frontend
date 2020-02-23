import React from 'react';
import '../styles/RideHistory.css';
import Trip from '../containers/Trip';
import { connect } from "react-redux";
import PropTypes from 'prop-types';


const RideHistory = (props) => {

  const { user, drivers, loading, authorized } = props

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
    let futureTrips = tr.filter(el => new Date(el.start_time).getTime() > currentTime).sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime())
    return futureTrips.map(el => {
      return  <Trip  cancel={true} key={el.id} driver={dr.filter(item => item.id === el.driver_id)[0]} trip={el} />
    })
  }

  return (
    <div className="trip-history">
      {authorized ?
        <div>
          <h5>Hello <em>{user.username}</em>! This is the history of your rides:</h5>
          <div className="trip-block">
            <h5>Current rides:</h5>
            {getCurrentTrips(user.trips, drivers)}
          </div>
    
          <div className="trip-block">
            <h5>Upcoming rides:</h5>
            {getFutureTrips(user.trips, drivers)}
          </div>
    
          <div className="trip-block">
            <h5>Past rides:</h5>
            {getPastTrips(user.trips, drivers)}
          </div>
        </div> :
        loading && <div id="loading">Loading...</div>}
    </div>
  );
}

RideHistory.propTypes = {
  user: PropTypes.object.isRequired,
  drivers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  authorized: PropTypes.bool.isRequired
}

function mapStateToProps(state){
  return {
    user: state.auth.user,
    drivers: state.drivers.drivers,
    loading: state.auth.loading,
    authorized: state.auth.authorized,
  }
}

export default connect(mapStateToProps, null)(RideHistory)