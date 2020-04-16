import React from 'react';
import PropTypes from 'prop-types';
import Trip from '../containers/Trip';
import { connect } from "react-redux";
import { Title3 } from '../../styles/StyledText';


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
      <Title3>Your past rides are:</Title3>
      {getPastTrips()}
    </>
  );
}

PastRides.propTypes = {
  user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, null)(PastRides)