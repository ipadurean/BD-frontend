import React, { Component } from 'react';
import Day from './Day';
import '../style.css';
import BookingForm from './BookingForm';
import { connect } from "react-redux";
import { fetchBooking } from '../ducks/operations';
import leftArrow from '../../utils/assets/left-arrow.svg';
import rightArrow from '../../utils/assets/right-arrow.svg';
import PropTypes from 'prop-types';
import { selectDay } from '../ducks/actions';
import { FlexRowWrap } from '../../styles/StyledContainers';
import { CalendarBox, CalendarBody, CalendarHeader, Label } from '../../styles/StyledCalendar';
import { Title } from '../../styles/StyledText';
import { ButtonArrow } from '../../styles/StyledButtons'; 
import { WeekContainer } from '../../styles/StyledCalendar';
import Calendar from '../../utils/calendar';


class BookingCalendar extends Component {

  constructor(props) {
    super()
    this.state = {
      selectedMonth: new Date(props.daySelected || Date.now()).getMonth(),
    }
  }

  
  monthPrev = () => {
    this.state.selectedMonth &&
      this.setState(prevState => ({
        selectedMonth: prevState.selectedMonth - 1,
      }));
    this.props.setDay(null)
  }

  monthNext = () => {
      this.setState(prevState => ({
        selectedMonth: prevState.selectedMonth + 1,
      }))
    this.props.setDay(null)
  }

  getMonthYear = () => {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let date = new Date();
      date.setMonth(this.state.selectedMonth);
      return months[this.state.selectedMonth % 12] + " " + date.getFullYear()
  }

 
  displayDay = (event) => {
    event.target.className.slice(-6) === 'active' && this.props.setDay(parseInt(event.target.parentNode.dataset.calendarDate))
  }
 

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
      rating: 4
    }
    if (user && driver && !!item.address) {
      this.props.book(bookingBody)
    }
  }

  render() {
    const { driver, daySelected } = this.props

    return (
      <FlexRowWrap>
        <CalendarBox>
          <Title style={{'margin':'50px 0'}}>Select date and time: </Title>
            <CalendarHeader>
              <ButtonArrow onClick={this.monthPrev} src={leftArrow} alt="left" />
                <Label data-calendar-label="month">{this.getMonthYear()}</Label>
              <ButtonArrow onClick={this.monthNext} src={rightArrow} alt="right" />
            </CalendarHeader>
              <WeekContainer>
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </WeekContainer>
              <CalendarBody onClick={this.displayDay} data-calendar-area="month">
                {Calendar.createMonth(daySelected, this.state.selectedMonth)}
              </CalendarBody>
        </CalendarBox>
        <div className="day">
          {daySelected && <Day />}
        </div>
        <BookingForm  driver={driver}
                      submit={this.bookRide} />
      </FlexRowWrap>
    )
  }
}

BookingCalendar.propTypes = {
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
    setDay: (value) => dispatch(selectDay(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingCalendar);