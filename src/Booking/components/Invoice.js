import React from 'react';
import '../style.css';
import TimeZone from '../../utils/timeZone';
import Parse from '../../utils/parse';
import { resetBooked } from '../ducks/actions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { FixedContainer2, FlexColumn1, FlexColumn2 } from '../../styles/StyledContainers';
import { Title, Title2, Text2, Text4 } from '../../styles/StyledText';

const Invoice = (props) => {

  const { trip, driver } = props
 
  function cancelInvoice() {
    props.reset()
  }
   
  return (
    <FixedContainer2>
      <Text4>Trip no:<b>{trip.id + 1000} </b><span> Booked on: <em>{new Date(trip.created_at).toString()}</em></span></Text4>
      <FlexColumn1>
        <Title>Your ride with {driver.name} was booked!</Title>
        <FlexColumn2>
          <Title2> Date: <Text2><b>{Parse.formatDate(TimeZone.toCentralTime(trip.start_time))}</b></Text2></Title2>
          <Title2>From: <Text2><b>{TimeZone.toCentralTime(trip.start_time).slice(16, 18)}:00</b></Text2> to: <Text2><b>{TimeZone.toCentralTime(trip.end_time).slice(16, 18)}:00</b></Text2></Title2>
          <Title2>The pick up address is: <Text2><b>{trip.address}</b></Text2></Title2>
          <Title2>Total charged: <Text2><b>${trip.total}</b></Text2></Title2>
        </FlexColumn2>
      </FlexColumn1>
      <div onClick={cancelInvoice} id="back">
        <svg width="8px" height="12px" viewBox="0 0 8 12" version="1.1" >
          <polygon points="7.41 1.41 6 0 0 6 6 12 7.41 10.59 2.83 6"></polygon>
        </svg><span> Back</span>
      </div>  
    </FixedContainer2>
  )
}

Invoice.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }),
  driver: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    driver: state.booking.driver,
    trip: state.booking.trip
  }
}
  
function mapDispatchToProps(dispatch){
  return {
    reset: () => dispatch(resetBooked())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);