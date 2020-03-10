import React, { Component } from 'react';
import Day from './Day';
import '../styles/bookingCalendar.css';
import TripForm from './TripForm';
import Week from '../components/Week';
import { connect } from "react-redux";
import { fetchBooking } from '../ducks/operations';
import leftArrow from '../../utils/assets/left-arrow.svg';
import rightArrow from '../../utils/assets/right-arrow.svg';
import PropTypes from 'prop-types';
import { selectDay } from '../ducks/actions';

const [disabled, active, selected] = ["calendar-date calendar-date--disabled", "calendar-date calendar-date--active", "calendar-date calendar-date--active calendar-date--selected"]  


class BookingCalendar extends Component {
  constructor(props) {
    super()
    this.state = {
      selectedMonth: new Date(props.daySelected || Date.now()).getMonth(),
    }
  }

  createMonth = () => {
    const { daySelected } = this.props;
    const now = new Date();
    const date = new Date(now.getFullYear(), this.state.selectedMonth, 1, 0, 0, 0);
    console.log(date)
    let select = new Date(now.getFullYear(), this.state.selectedMonth, 1, 0, 0, 0);
        select.setTime(daySelected);
    let daysArr = [];
    const daysInMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    let d = 1;
      for (let i=0; i<date.getDay(); i++){
        daysArr.push(<div key={i+100} className={disabled}><div className="cal"></div></div>)
      }
      while (d <= daysInMonth) {
        daySelected && d === select.getDate()?
          daysArr.push( <div key={d} className={selected} data-calendar-date={date.setDate(d)} ><div className="cal">{d}</div></div>):
        d === now.getDate() && now.getMonth() === date.getMonth()?
          daysArr.push( <div key={d} className={active} id="calendar-date--today" data-calendar-date={date.setDate(d)} ><div className="cal">{d}</div></div>):
        date.setDate(d) < now.getTime()?
          daysArr.push( <div key={d} className={disabled} data-calendar-date={date.setDate(d)} ><div className="cal">{d}</div></div>) :
          daysArr.push( <div key={d} className={active} data-calendar-date={date.setDate(d)}><div className="cal">{d}</div></div>)
        d++
      }
    return daysArr;
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
    event.target.parentNode.className === active && this.props.setDay(parseInt(event.target.parentNode.dataset.calendarDate))
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
        <div className="booking-container">
          <div className="booking-before">
            <div className="calendar-container">
              <div id="myCalendar" className="calendar" >
                <p className="username">Select date and time: </p>
                  <div className="calendar-header">
                    <button onClick={this.monthPrev} className="calendar-btn" data-calendar-toggle="previous">
                      <img src={leftArrow} alt="left" />
                    </button>
                    <div className="calendar-header__label" data-calendar-label="month">{this.getMonthYear()}</div>
                    <button onClick={this.monthNext} className="calendar-btn" data-calendar-toggle="next">
                        <img src={rightArrow} alt="right" />
                    </button>
                  </div>
                  <Week />
                  <div onClick={this.displayDay} className="calendar-body" data-calendar-area="month">
                        {this.createMonth()}
                  </div>
              </div>
              <div className="day">
                {daySelected && <Day />}
              </div>
              </div>
              <div className="book">
                <TripForm driver={driver}
                          submit={this.bookRide} />
              </div>
          </div>
        </div> 
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