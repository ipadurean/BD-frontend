import React from 'react';
import PropTypes from 'prop-types';
import Trip from '../containers/Trip';
import { connect } from "react-redux";

const CurrentRides = (props) => {

  return (
    <>
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    drivers: state.drivers.drivers,
    loading: state.auth.loading,
    authorized: state.auth.authorized,
  }
}

export default connect(mapStateToProps, null)(CurrentRides)