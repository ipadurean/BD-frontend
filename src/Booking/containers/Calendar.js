import React, { Component } from 'react';
import { CalendarBox, CalendarBody, CalendarHeader, Label, DateOuter, DateInner } from '../../styles/StyledCalendar';
import leftArrow from '../../utils/assets/left-arrow.svg';
import rightArrow from '../../utils/assets/right-arrow.svg';
import { Title } from '../../styles/StyledText';
import { ButtonArrow } from '../../styles/StyledButtons';
import { WeekContainer } from '../../styles/StyledCalendar';
import { selectDay } from '../ducks/actions';
import { connect } from "react-redux";


class Calendar extends Component {

  constructor(props) {
    super()
    this.state = {
      monthSelected: new Date(props.daySelected || Date.now()).getMonth(),
    }
  }

  monthPrev = () => {
    this.state.monthSelected &&
      this.setState(prevState => ({
        monthSelected: prevState.monthSelected - 1,
      }));
    this.props.sendDay(null)
  }

  monthNext = () => {
    this.setState(prevState => ({
      monthSelected: prevState.monthSelected + 1,
    }))
    this.props.sendDay(null)
  }

  getMonthYear = () => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    let date = new Date();
    date.setMonth(this.state.monthSelected);
    return months[this.state.monthSelected % 12] + " " + date.getFullYear()
  }

  createMonth = () => {
    const { monthSelected } = this.state;
    const { daySelected } = this.props
    const date = new Date(new Date().getFullYear(), monthSelected, 1);
    const select = new Date(new Date().getFullYear(), monthSelected, 1);
      select.setTime(daySelected);
    const daysArr = [];
    const monthSize = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    let day = 1;
    for (let i = 0; i < date.getDay(); i++) {
      daysArr.push(
        <DateOuter key={i + 100}>
          <DateInner disabled></DateInner>
        </DateOuter>
      )
    }
    while (day <= monthSize) {
      daySelected && day === select.getDate() ?
        daysArr.push(
          <DateOuter key={day} data-calendar-date={date.setDate(day)}>
            <DateInner selected>{day}</DateInner>
          </DateOuter>
        ) :
        day === new Date().getDate() && new Date().getMonth() === date.getMonth() ?
          daysArr.push(
            <DateOuter key={day} data-calendar-date={date.setDate(day)}>
              <DateInner today className='active'>{day}</DateInner>
            </DateOuter>) :
          date.setDate(day) < new Date().getTime() ?
            daysArr.push(
              <DateOuter key={day} data-calendar-date={date.setDate(day)}>
                <DateInner disabled>{day}</DateInner>
              </DateOuter>
            ) :
            daysArr.push(
              <DateOuter key={day} data-calendar-date={date.setDate(day)}>
                <DateInner className='active'>{day}</DateInner>
              </DateOuter>
            )
      day++
    }
    return daysArr;
  }

  displayDay = (event) => {
    event.target.className.slice(-6) === 'active' &&
      this.props.sendDay(parseInt(event.target.parentNode.dataset.calendarDate))
  }
  

  render() {
   
    return (
      <CalendarBox>
        <Title id="calendar-title">Select date and time: </Title>
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
          {this.createMonth()}
        </CalendarBody>
      </CalendarBox>
    )
  }
}

function mapStateToProps(state) {
  return {
    daySelected: state.booking.daySelected,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendDay: (value) => dispatch(selectDay(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);