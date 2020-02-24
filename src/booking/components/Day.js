import React, { Component } from 'react';
import '../styles/Day.css';
import TimeZone from '../../utils/timeZone';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class Day extends Component {
  constructor(props) {
    super()
    this.state = {
      start: props.home.start,
      end: props.home.end,
    }
  }

  componentWillReceiveProps() {
    this.setState({
      start: null,
      end: null
    })
  }
 

  //Filter trips belonging to selected driver, based on selected date, and return his booked hours
  bookedHours = (selectedDay) => {
    const { driverTrips } = this.props
    let bookedHours = [];
    let date = new Date(selectedDay);
    let arr = driverTrips.filter(el => TimeZone.toCentralTime(el.start_time).slice(0, 15) === date.toString().slice(0, 15));
    let newArr = arr.map(el => [parseInt(TimeZone.toCentralTime(el.start_time).slice(16, 18)), parseInt(TimeZone.toCentralTime(el.end_time).slice(16, 18))||24])
      for(let i=0; i<newArr.length; i++){
          for(let k=newArr[i][0]; k<newArr[i][1]; k++){
            bookedHours.push(k)
          }
      }
    return bookedHours.sort((a,b) => a-b);
  }


  renderHours = (selectedDay) => {
    const { start, end} = this.state
    const dateValue = (hour) => {
      return new Date(new Date(selectedDay).setHours(hour)).toString().slice(0, 24) + " GMT-0600 (Central Standard Time)";
    }
    let hours = [];
    let i = -12;
    while (i < 36) {
      // console.log(this.bookedHours(dateValue(i)))
      if (i > parseInt(start) && this.bookedHours(dateValue(i)).includes(new Date(dateValue(i+1)).getHours())){
            for(let k=i; k<36; k++){
                hours.push(<div data-val={null} key={k} className="busy">N/A</div>)
            } return hours;
      } else if (this.bookedHours(dateValue(i)).includes(new Date(dateValue(i+1)).getHours())){
          hours.push(<div data-val={null} key={i} className="busy">N/A</div>)
        } else if (i === parseInt(start)) {
          hours.push(<div data-val={i} key={i} calendar-date={dateValue(i)} className="hr" id="selected">{dateValue(i).slice(16, 21)}</div>)
        } else if(i >= parseInt(start) && i < parseInt(end)) {
          hours[i+12] = <div data-val={i} key={i} calendar-date={dateValue(i)} className="hr" id="selected">{dateValue(i).slice(16, 21)}</div>
        } else {
          hours.push(<div data-val={i} key={i} calendar-date={dateValue(i)} className="hr">{dateValue(i).slice(16, 21)}</div>)
        }
        i++;
      }
    return hours;
  }

  handleClick = (event) => {
    let x = parseInt(event.target.dataset.val)
    console.log(x)
    if (event.target.className === "hr") {
      this.state.start === null ?
        this.setState({ start: x, end: x + 1 }) :
        (x - this.state.start) <= 0 ?
          this.setState({ start: x, end: x + 1 }) :
          this.state.end - this.state.start > 1 ?
            this.setState({ start: x, end: x + 1 }) :
            (x - this.state.start) > 0 ?
              this.setState({ end: x + 1 }) :
              this.setState({ start: null, end: null })
    } else {
      this.setState({ start: null, end: null })
    }
  }

  render() {
    const { day } = this.props
    console.log(this.state)
    return (
      <div onClick={this.handleClick} className="day-bar">
        {this.renderHours(day)}
      </div>)
  }
}

Day.propTypes = {
  select: PropTypes.func,
  start: PropTypes.number,
  end: PropTypes.number,
  day: PropTypes.number,
  driverTrips: PropTypes.array
}

function mapStateToProps(state) {
  return {
    driverTrips: state.booking.driverTrips,
    home: state.home
  }
}

export default connect(mapStateToProps, null)(Day)