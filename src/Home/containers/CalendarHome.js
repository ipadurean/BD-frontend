import React, { Component } from 'react';
import '../styles/calendarHome.css';
import Week from '../../Booking/components/Week';
import leftArrow from '../../utils/assets/left-arrow.svg';
import rightArrow from '../../utils/assets/right-arrow.svg';
import { selectDate } from '../ducks/actions';
import { connect } from "react-redux";

const [disabled, active, selected] = ["calendar-date calendar-date--disabled", "calendar-date calendar-date--active", "calendar-date calendar-date--active calendar-date--selected"] 

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

  createMonth = () => {
    let now = new Date();
    let date = new Date(now.getFullYear(), this.state.selectedMonth, 1);
    let select = new Date(now.getFullYear(), this.state.selectedMonth, 1);
      select.setTime(this.state.dayClicked);
    let daysArr = [];
    let days = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    let d = 1;
      for (let i=0; i<date.getDay(); i++){
        daysArr.push( <div key={i+100} className={disabled}></div>)
      }
      while (d <= days) {
        this.state.dayClicked && d === select.getDate()?
          daysArr.push( <div key={d} className={selected} data-calendar-date={date.setDate(d)} >{d}</div>):
        d === now.getDate() && now.getMonth() === date.getMonth()?
          daysArr.push( <div key={d} className={active} id="calendar-date--today" data-calendar-date={date.setDate(d)} >{d}</div>):
        date.setDate(d) < now.getTime()?
          daysArr.push( <div key={d} className={disabled} data-calendar-date={date.setDate(d)} >{d}</div>) :
          daysArr.push( <div key={d} className={active} data-calendar-date={date.setDate(d)}>{d}</div>)
        d++
      }
    return daysArr;
  }

  selectDate = (event) =>{
    if (event.target.className === "calendar-date calendar-date--active") {
      this.props.select(parseInt(event.target.dataset.calendarDate))
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
    event.target.className === active &&
    this.setState({
        dayClicked: event.target.dataset.calendarDate,
        start:null,
        end:null
    }) 
  }

  render(){
    return(
      <div className="calendar-home" >
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
        <div onClick={this.selectDate} className="calendar-body" data-calendar-area="month">
          {this.createMonth()}
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return {
    select: (date) => dispatch(selectDate(date)),
  }
}

export default connect(null, mapDispatchToProps)(CalendarHome);