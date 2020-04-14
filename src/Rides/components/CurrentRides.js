import React from 'react';
import PropTypes from 'prop-types';
import Trip from '../containers/Trip';
import { connect } from "react-redux";
import { Title2 } from '../../styles/StyledText';
// import { FlexColumn2 } from '../../styles/StyledContainers';

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
      <Title2>Your current rides: </Title2>
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