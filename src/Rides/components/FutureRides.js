import React from 'react';
import PropTypes from 'prop-types';
import Trip from '../containers/Trip';
import { connect } from "react-redux";

const FutureRides = (props) => {
  const { user } = props;

  const getFutureTrips = () => {
    let currentTime = new Date().getTime()
    let futureTrips = user.trips.filter(el => new Date(el.start_time).getTime() > currentTime).sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime())
    return futureTrips.map(el => {
      return <Trip cancel={true} key={el.id} trip={el} />
    })
  }

  return (
    <>
      {getFutureTrips()}
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(FutureRides)