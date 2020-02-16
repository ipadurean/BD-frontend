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

const [disabled, active, selected] = ["calendar-date calendar-date--disabled", "calendar-date calendar-date--active", "calendar-date calendar-date--active calendar-date--selected"]  


class BookingCalendar extends Component {
  constructor(props) {
    super()
    this.state = {
      selectedMonth: new Date().getMonth(),
      dayClicked: props.home.selectedDate,
      start: props.home.start,
      end: props.home.end
    }
  }

  createMonth = () => {
    let now = new Date();
    let date = new Date(now.getFullYear(), this.state.selectedMonth, 1, 0, 0, 0);
    let select = new Date(now.getFullYear(), this.state.selectedMonth, 1, 0, 0, 0);
        select.setTime(this.state.dayClicked);
    let daysArr = [];
    let daysInMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    let d = 1;
      for (let i=0; i<date.getDay(); i++){
        daysArr.push(<div key={i+100} className={disabled}><div className="cal"></div></div>)
      }
      while (d <= daysInMonth) {
        this.state.dayClicked && d === select.getDate()?
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
        dayClicked: false,
        start:null,
        end:null
      }))
  }

  monthNext = () => {
      this.setState(prevState => ({
        selectedMonth: prevState.selectedMonth + 1,
        dayClicked: false,
        start:null,
        end:null
      }))
  }

  getMonthYear = () => {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let date = new Date();
      date.setMonth(this.state.selectedMonth);
      return months[this.state.selectedMonth % 12] + " " + date.getFullYear()
  }

 //determining the selected date in order to display the hours belonging the that specific date
  displayDay = (event) => {
      event.target.parentNode.className === active &&
          this.setState({
              dayClicked: parseInt(event.target.parentNode.dataset.calendarDate),
              start:null,
              end:null
          }) 
  }

  //selecting the starting hour and ending hour for booking
  handleClick = (event) => {
    let x = parseInt(event.target.dataset.val)
      if(event.target.className === "hr"){
        this.state.start===null?
          this.setState({start: x, end: x+1}) :
        (x-this.state.start)<=0 ?
          this.setState({start:x, end: x+1}) :
        this.state.end - this.state.start >1 ?
          this.setState({start: x, end: x+1}):
        (x-this.state.start)>0?
          this.setState({end: x+1}):
          this.setState({start:null, end:null})
      } else {
        this.setState({start:null, end:null})
      }
  }

  bookRide = (event, item) => {
    event.preventDefault();
    let user = this.props.user.id
    let driver = this.props.driver.id
    let timeTotal = this.state.end - this.state.start
    let date1 = new Date(new Date(this.state.dayClicked).setHours(this.state.start)).toString().slice(0, 24) + " GMT-0600 (Central Standard Time)";
    let date2 = new Date(new Date(this.state.dayClicked).setHours(this.state.end)).toString().slice(0, 24) + " GMT-0600 (Central Standard Time)";
    const bookingBody = {
      user_id: user, 
      driver_id:driver ,
      time_booked: timeTotal,
      start_time: date1,
      end_time: date2,
      total: this.props.driver.rate * timeTotal,
      note: item.extra,
      address: item.address, 
      review: "",
      rating: 4
    }
    if (user && driver && timeTotal && !!item.address) {
      this.props.book(bookingBody)
    }
  }

  render() {
    const { driver } = this.props

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
                  {this.state.dayClicked &&  <Day  day={this.state.dayClicked} 
                                                    select={this.handleClick}
                                                    start={this.state.start}
                                                    end={this.state.end}
                                                    driver={driver}
                                              />}
              </div>
              </div>
              <div className="book">
                <TripForm time={this.state.end - this.state.start} 
                          driver={driver}
                          date={{day: this.state.dayClicked, start: this.state.start, end: this.state.end}}
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
  return { home: state.home , user: state.auth.user }
}

function mapDispatchToProps(dispatch){
  return {
    book: (obj) => dispatch(fetchBooking(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingCalendar);