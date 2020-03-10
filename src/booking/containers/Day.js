import React, { Component } from 'react';
import '../styles/Day.css';
import TimeZone from '../../utils/timeZone';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTime } from '../ducks/actions';
import arrowUp from '../../utils/assets/arrow_drop_up.svg';
import arrowDown from '../../utils/assets/arrow_drop_down.svg';

class Day extends Component {
 

  bookedHours = (day) => {
    
    const { driver } = this.props
    let bookedHours = [];
    const date1 = new Date(day);
    const date2 = new Date(day).setHours(36);
    
    const filteredTrips = driver.trips.filter(el => {
      const startDate = new Date(el.start_time).getTime();
      const endDate = new Date(el.end_time).getTime();
      return startDate >= date1.getTime() && endDate <= date2
    })
  console.log(filteredTrips)
    const newArr = filteredTrips.map(el => {
      const hour = 3600000;
    
      const start = (new Date(TimeZone.toCentralTime(el.start_time)).getTime() - date1)/hour;
      const end = (new Date(el.end_time).getTime() - date1)/hour;
      return [start, end]
    })
    console.log(newArr) 
    for (let i = 0; i < newArr.length; i++){
          for(let k = newArr[i][0]; k < newArr[i][1]; k++){
            bookedHours.push(k)
          }
    }
    
    console.log(bookedHours)
    return bookedHours.sort((a,b) => a-b);
  }


  renderHours = (day) => {
    
    const { start, end} = this.props
    const dateValue = (hour) => {
      return new Date(new Date(day).setHours(hour)).toString().slice(0, 24) + " GMT-0500 (Central Daylight Time)";
    }
    let hours = [];
    let i = 0;
    while (i < 36) {
      if (i > parseInt(start) && this.bookedHours(day).includes(i)) {
            for(let k=i; k<36; k++){
                hours.push(<div data-val={null} key={k} className="busy">N/A</div>)
            } return hours;
      } else if (this.bookedHours(day).includes(i)) {
          hours.push(<div data-val={null} key={i} className="busy">N/A</div>)
        } else if (i === parseInt(start)) {
          hours.push(<div data-val={i} key={i} className="hr" id="selected">{dateValue(i).slice(16, 21)}</div>)
        } else if(i >= parseInt(start) && i < parseInt(end)) {
          hours[i+12] = <div data-val={i} key={i} className="hr" id="selected">{dateValue(i).slice(16, 21)}</div>
        } else {
        hours.push(<div data-val={i} key={i} className="hr">{dateValue(i).slice(16, 21)}</div>)
        }
        i++;
    }
    return hours;
  }

  handleClick = (event) => {
    const { start, end } = this.props
    let x = parseInt(event.target.dataset.val)
    
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

  scrollDown = () => {
    this.refs['bar'].scrollBy({
      top: -40,
      behavior: 'smooth'
    });
  }

  scrollUp = () => {
    this.refs['bar'].scrollBy({
      top: 40,
      behavior: 'smooth'
    });
  }

  render() {
    const { daySelected } = this.props
    return (
      <div  onClick={this.handleClick} className="day-bar">
        <img onClick={this.scrollDown} alt="up" className="arrows" src={arrowUp} />
          <div ref="bar" className="hours">{this.renderHours(daySelected)}</div>
        <img onClick={this.scrollUp} alt="down" className="arrows" src={arrowDown} />
      </div>)
  }
}

Day.propTypes = {
  select: PropTypes.func,
  start: PropTypes.number,
  end: PropTypes.number,
  day: PropTypes.number,
 
}

function mapStateToProps(state) {
  return {
    driver: state.booking.driver,
    home: state.home,
    daySelected: state.booking.daySelected,
    start: state.booking.time.start,
    end: state.booking.time.end,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTime: (value) => dispatch(setTime(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)