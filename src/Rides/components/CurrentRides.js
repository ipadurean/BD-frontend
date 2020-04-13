import React from 'react';
import PropTypes from 'prop-types';
import Trip from '../containers/Trip';
import { connect } from "react-redux";

const CurrentRides = (props) => {
  const { user } = props;

  const getCurrentTrips = () => {
    let currentTime = new Date().getTime()
    let currentTrips = user.trips.filter(el => new Date(el.end_time).getTime() > currentTime && new Date(el.start_time).getTime() < currentTime)
    return currentTrips.map(el => {
      return  <Trip key={el.id} trip={el} />
    })
  }

  return (
    <>
      <h6>Your current rides are: </h6>
      {getCurrentTrips()}
    </>
  );
}

CurrentRides.propTypes = {
  user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, null)(CurrentRides)