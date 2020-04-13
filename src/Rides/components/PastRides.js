import React from 'react';
import PropTypes from 'prop-types';
import Trip from '../containers/Trip';
import { connect } from "react-redux";

const PastRides = (props) => {
  const { user } = props;

  const getPastTrips = () => {
    let currentTime = new Date().getTime()
    let pastTrips = user.trips.filter(el => new Date(el.end_time).getTime() < currentTime)
    return pastTrips.map(el => {
      return <Trip review={!el.review} key={el.id} trip={el} />
    })
  }

  return (
    <>
      {getPastTrips()}
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, null)(PastRides)