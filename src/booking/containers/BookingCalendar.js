import React, { Component } from 'react';
import Day from './Day';
import '../style.css';
import TripForm from './TripForm';
import Week from '../components/Week';
import { connect } from "react-redux";
import { fetchBooking } from '../ducks/operations';
import leftArrow from '../../utils/assets/left-arrow.svg';
import rightArrow from '../../utils/assets/right-arrow.svg';
import PropTypes from 'prop-types';
import { selectDay } from '../ducks/actions';
import { StyledContainer, FlexRowWrap } from '../../styles/StyledContainers';
import { CalendarBox, CalendarBody, CalendarHeader, Label, DateOuter, DateInner } from '../../styles/StyledCalendar';
import { Title } from '../../styles/StyledText';
import { ButtonArrow } from '../../styles/StyledButtons'; 


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
    const date = new Date(now.getFullYear(), this.state.selectedMonth, 1);
    
    let select = new Date(now.getFullYear(), this.state.selectedMonth, 1);
        select.setTime(daySelected);
    let daysArr = [];
    const daysInMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    let d = 1;
      for (let i=0; i<date.getDay(); i++){
        daysArr.push(<DateOuter key={i+100}><DateInner disabled></DateInner></DateOuter>)
      }
      while (d <= daysInMonth) {
        daySelected && d === select.getDate()?
          daysArr.push( <DateOuter key={d} data-calendar-date={date.setDate(d)}>
                          <DateInner selected>{d}</DateInner>
                        </DateOuter> ) :
        d === now.getDate() && now.getMonth() === date.getMonth()?
          daysArr.push( <DateOuter key={d} data-calendar-date={date.setDate(d)}>
                          <DateInner today className='active'>{d}</DateInner>
                        </DateOuter>) :
        date.setDate(d) < now.getTime()?
          daysArr.push( <DateOuter key={d} data-calendar-date={date.setDate(d)}>
                          <DateInner disabled>{d}</DateInner>
                        </DateOuter>) :
          daysArr.push( <DateOuter key={d} data-calendar-date={date.setDate(d)}>
                          <DateInner className='active'>{d}</DateInner>
                        </DateOuter>)
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
        <StyledContainer>
          <FlexRowWrap>
            <FlexRowWrap>
              <CalendarBox className='calendar'>
                <Title>Select date and time: </Title>
                  <CalendarHeader>
                    <ButtonArrow onClick={this.monthPrev} data-calendar-toggle="previous">
                      <img src={leftArrow} alt="left" />
                    </ButtonArrow>
                    <Label data-calendar-label="month">{this.getMonthYear()}</Label>
                    <ButtonArrow onClick={this.monthNext} data-calendar-toggle="next">
                      <img src={rightArrow} alt="right" />
                    </ButtonArrow>
                  </CalendarHeader>
                  <Week />
                  <CalendarBody onClick={this.displayDay} data-calendar-area="month">
                        {this.createMonth()}
                  </CalendarBody>
              </CalendarBox>
              <div className="day">
                {daySelected && <Day />}
              </div>
            </FlexRowWrap>
              <div className="book">
                <TripForm driver={driver}
                          submit={this.bookRide} />
              </div>
          </FlexRowWrap>
        </StyledContainer>
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