import React, { Component } from 'react';
import Day from './Day';
import '../style.css';
import BookingForm from './BookingForm';
import { connect } from "react-redux";
import { fetchBooking } from '../ducks/operations';
import PropTypes from 'prop-types';
import { FlexRowWrap } from '../../styles/StyledContainers';
import Calendar from './Calendar';


class Booking extends Component {
 
  bookRide = (event, item) => {
    const { start, end, user, driver, daySelected } = this.props
    event.preventDefault();
    const timeTotal = end - start
    let date1 = new Date(new Date(daySelected).setHours(start)).toString().slice(0, 24) + " GMT-0500 (Central Daylight Time)";
    let date2 = new Date(new Date(daySelected).setHours(end)).toString().slice(0, 24) + " GMT-0500 (Central Daylight Time)";
    const bookingBody = {
      user_id: user.id, 
      driver_id: driver.id,
      driver_photo: driver.photo,
      driver_name: driver.name,
      time_booked: timeTotal,
      start_time: date1,
      end_time: date2,
      total: driver.rate * timeTotal,
      note: item.extra,
      address: item.address, 
      review: "",
      rating: null
    }
    if (user && driver && !!item.address) {
      this.props.book(bookingBody)
    }
  }

  render() {
    const { driver, daySelected } = this.props

    return (
      <FlexRowWrap>
        <Calendar />
        <div className="day">
          {daySelected && driver.id && <Day />}
        </div>
        <BookingForm  driver={driver}
                      submit={this.bookRide} />
      </FlexRowWrap>
    )
  }
}

Booking.propTypes = {
  home: PropTypes.object,
  booking: PropTypes.object,
  user: PropTypes.object,
  driver: PropTypes.object
}

function mapStateToProps(state){
  return {
    home: state.home,
    user: state.auth.user,
    daySelected: state.booking.daySelected,
    start: state.booking.time.start,
    end: state.booking.time.end
  }
}

function mapDispatchToProps(dispatch){
  return {
    book: (obj) => dispatch(fetchBooking(obj)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);