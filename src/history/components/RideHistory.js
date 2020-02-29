import React from 'react';
import '../styles/RideHistory.css';
import Trip from '../containers/Trip';
import { connect } from "react-redux";
import PropTypes from 'prop-types';


const RideHistory = (props) => {

  const { user, loading, authorized } = props

  const getPastTrips = () => {
    let currentTime = new Date().getTime()
    let pastTrips = user.trips.filter(el => new Date(el.end_time).getTime() < currentTime)
    return pastTrips.map(el => {
      return  <Trip review={!el.review} key={el.id} trip={el} />
    })
  }

  const getCurrentTrips = () => {
    let currentTime = new Date().getTime()
    let currentTrips = user.trips.filter(el => new Date(el.end_time).getTime() > currentTime && new Date(el.start_time).getTime() < currentTime)
    return currentTrips.map(el => {
      return  <Trip key={el.id} trip={el} />
    })
  }

  const getFutureTrips = () => {
    let currentTime = new Date().getTime()
    let futureTrips = user.trips.filter(el => new Date(el.start_time).getTime() > currentTime).sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime())
    return futureTrips.map(el => {
      return  <Trip  cancel={true} key={el.id} trip={el} />
    })
  }

  return (
    <div className="trip-history">
      {authorized ?
        <div>
          <h5>Hello <em>{user.username}</em>! This is the history of your rides:</h5>
          <div className="trip-block">
            <h5>Current rides:</h5>
            {getCurrentTrips()}
          </div>
    
          <div className="trip-block">
            <h5>Upcoming rides:</h5>
            {getFutureTrips()}
          </div>
    
          <div className="trip-block">
            <h5>Past rides:</h5>
            {getPastTrips()}
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