import React, { Component } from 'react';
import leftArrow from '../../utils/assets/left-arrow.svg';
import rightArrow from '../../utils/assets/right-arrow.svg';
import { selectDate } from '../ducks/actions';
import { connect } from "react-redux";
import { WeekContainer, CalendarBoxSmall, CalendarHeader, CalendarBody, Label } from '../../styles/StyledCalendar';
import { ButtonArrow } from '../../styles/StyledButtons';
import Calendar from '../../utils/calendar';


class CalendarHome extends Component {

  constructor() {
    super()
    this.state = {
      selectedMonth: new Date().getMonth(),
      dayClicked: false,
      start: null,
      end: null
    }
  }

  selectDate = (event) =>{
    if (event.target.className.slice(-6) === "active") {
      this.props.select(parseInt(event.target.parentNode.dataset.calendarDate))
    }
  }

  monthPrev = () => {
    this.state.selectedMonth &&
      this.setState(prevState => ({
      selectedMonth: prevState.selectedMonth - 1,
      dayClicked: false
    }))
  }

  monthNext = () => {
    this.setState(prevState => ({
      selectedMonth: prevState.selectedMonth + 1,
      dayClicked: false
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
    event.target.className.slice(-6) === 'active' &&
    this.setState({
        dayClicked: event.target.dataset.calendarDate,
        start:null,
        end:null
    }) 
  }

  render() {
    const { dayClicked, selectedMonth } = this.state
    return (
      <CalendarBoxSmall>
        <CalendarHeader>
          <ButtonArrow small onClick={this.monthPrev} src={leftArrow} alt="left" />
            <Label small>{this.getMonthYear()}</Label>
          <ButtonArrow small onClick={this.monthNext} src={rightArrow} alt="right" />
        </CalendarHeader>
        <WeekContainer small>
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </WeekContainer>
        <CalendarBody small onClick={this.selectDate}>
          {Calendar.createMonth(dayClicked, selectedMonth)}
        </CalendarBody>
      </CalendarBoxSmall>
    )
  }
}


function mapDispatchToProps(dispatch){
  return {
    select: (date) => dispatch(selectDate(date)),
  }
}

export default connect(null, mapDispatchToProps)(CalendarHome);