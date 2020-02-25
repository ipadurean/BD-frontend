import React, { Component } from 'react';
import '../styles/Day.css';
import TimeZone from '../../utils/timeZone';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTime } from '../ducks/actions'

class Day extends Component {
 

  bookedHours = (day) => {
    const { driverTrips } = this.props
    let bookedHours = [];
    let date = new Date(day);
    let arr = driverTrips.filter(el => TimeZone.toCentralTime(el.start_time).slice(0, 15) === date.toString().slice(0, 15));
    let newArr = arr.map(el => [parseInt(TimeZone.toCentralTime(el.start_time).slice(16, 18)), parseInt(TimeZone.toCentralTime(el.end_time).slice(16, 18))||24])
      for(let i=0; i<newArr.length; i++){
          for(let k=newArr[i][0]; k<newArr[i][1]; k++){
            bookedHours.push(k)
          }
      }
    return bookedHours.sort((a,b) => a-b);
  }


  renderHours = (day) => {
    
    const { start, end} = this.props
    const dateValue = (hour) => {
      return new Date(new Date(day).setHours(hour)).toString().slice(0, 24) + " GMT-0600 (Central Standard Time)";
    }
    let hours = [];
    let i = -12;
    while (i < 36) {
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
    const { start, end } = this.props
    let x = parseInt(event.target.dataset.val)
    // console.log(x)
    if (event.target.className === "hr") {
      start === null ?
        this.props.setTime({start: x, end: x+1}) :
        (x - start) <= 0 ?
          this.props.setTime({ start: x, end: x + 1 }) :
          end - start > 1 ?
            this.props.setTime({ start: x, end: x + 1 }) :
            (x - start) > 0 ?
              this.props.setTime({start, end: x + 1 }) :
              this.props.setTime({ start: null, end: null })
    } else {
      this.props.setTime({ start: null, end: null })
    }
  }

  render() {
    const { daySelected } = this.props
   
    return (
      <div onClick={this.handleClick} className="day-bar">
        {this.renderHours(daySelected)}
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
    home: state.home,
    daySelected: state.booking.daySelected,
    start: state.booking.time.start,
    end: state.booking.time.end
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTime: (value) => dispatch(setTime(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)