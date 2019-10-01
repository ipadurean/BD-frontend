import React, { Component } from 'react';
import Day from './Day'
import './Calendar.css'

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      selectedMonth: new Date().getMonth(),
      timeNow: new Date(),
      weekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayClicked: null,
      selectedFirst:null,
      // selectedLast:null
    }
  }


  createMonth = () => {
    // clearCalendar()
    let date = new Date()
    date.setMonth(this.state.selectedMonth);
    let daysArr = [];
    let days = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    let d = 1;
    while (d <= days) {
    (date.setDate(d) < this.state.timeNow.getTime()?
      daysArr.push( <div key={d} className="calendar-date calendar-date--disabled" data-calendar-date={date} ><span>{d}</span></div>) :
      daysArr.push( <div key={d} className="calendar-date calendar-date--active" data-calendar-date={date} data-calendar-status="active"><span>{d}</span></div>))
      d++
    }
    return daysArr;
  }



  monthPrev = () => {
    this.setState(prevState => ({
      selectedMonth: prevState.selectedMonth - 1
    }))
  }

  monthNext = () => {
    this.setState(prevState => ({
      selectedMonth: prevState.selectedMonth + 1
    }))
  }

  getMonthYear = () => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = new Date();
    date.setMonth(this.state.selectedMonth);
    return months[date.getMonth()] + " " + date.getFullYear()
  }

displayDay = (event) => {
      this.setState({
          dayClicked: event.target.parentNode.dataset.calendarDate
      }) 
}

handleSelect = (event) => {
  this.setState({
    selectedFirst: event.target.value.substring(event.target.selectionStart, event.target.selectionEnd),
    // selectedLast: event.target.selectionEnd.value
  })
}

  render() {
console.log(this.state.selectedFirst)
    return (
    <div>
      <div id="myCalendar" className="calendar" >
        <div className="calendar-header">
          <button onClick={this.monthPrev} className="calendar-btn" data-calendar-toggle="previous"><svg height="24" version="1.1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path></svg></button>
          <div className="calendar-header__label" data-calendar-label="month">{this.getMonthYear()}</div>
          <button onClick={this.monthNext} className="calendar-btn" data-calendar-toggle="next"><svg height="24" version="1.1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></button>
        </div>
        <div className="calendar-week"></div>
        <div className="calendar-week">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div onClick={this.displayDay} className="calendar-body" data-calendar-area="month">
        {this.createMonth()}
        </div>
        
      </div>
      
    <span>{this.state.dayClicked&&<Day select={this.handleSelect}/>}</span>
      </div>
    )
  }


}

export default Calendar;