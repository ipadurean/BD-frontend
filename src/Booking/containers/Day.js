import React, { Component } from 'react';
import '../style.css';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTime } from '../ducks/actions';
import arrowUp from '../../utils/assets/arrow_drop_up.svg';
import arrowDown from '../../utils/assets/arrow_drop_down.svg';
import { FlexColumn } from '../../styles/StyledContainers';
import { DayBar, HourBox, ScrollArrow, HourText } from '../../styles/StyledDay';


class Day extends Component {


  bookedHours = (day) => {
    const { driver } = this.props
    let bookedHours = [];
    const date1 = new Date(day);
    const date2 = new Date(day).setHours(30);
   
    const filteredTrips = driver.trips.filter(el => {
      const startDate = new Date(el.start_time).getTime();
      const endDate = new Date(el.end_time).getTime();
      return (startDate >= date1.getTime() && endDate <= date2) ||
        (startDate < date1.getTime() && endDate > date1.getTime()) ||
        (startDate < date2 && endDate >= date2)
    })
      const newArr = filteredTrips.map(el => {
        const quarter = 900000;  //a quarter of hour in miliseconds
        const start = (new Date(el.start_time).getTime() - date1)/quarter;
        const end = (new Date(el.end_time).getTime() - date1) / quarter;
        const quartersToCentralTime = (date1.getTimezoneOffset() - 300)/15
        return [start + quartersToCentralTime, end + quartersToCentralTime]
      })
    
        for (let i = 0; i < newArr.length; i++){
          for(let k = newArr[i][0]; k < newArr[i][1]; k++){
            bookedHours.push(k)
          }
        }
    return bookedHours.sort((a,b) => a-b);
  }


  renderHours = (day) => {
    const { start, end} = this.props
    const dateValue = (minutes) => {
      return new Date(new Date(day).setMinutes(minutes)).toString().slice(0, 24) + " GMT-0500 (Central Daylight Time)";
    }
    let hours = [];
    let i = 0;
    while (i < 120) {
      if (i > start && start !== null && this.bookedHours(day).includes(i)) {
            for(let k=i; k<120; k++){
              hours.push(
                <HourBox key={k} busy quarter={!!parseInt(k % 4)} data-val={k} className="busy">
                  <HourText busy quarter={!!parseInt(k % 4)} data-val={k} className="busy">{dateValue(k * 15).slice(16, 21)}</HourText>
                </HourBox>
              )
            } return hours;
      } else if (this.bookedHours(day).includes(i)) {
        hours.push(
          <HourBox key={i} busy quarter={!!parseInt(i % 4)} data-val={i} className="busy">
            <HourText busy quarter={!!parseInt(i % 4)} data-val={i} className="busy">{dateValue(i * 15).slice(16, 21)}</HourText>
          </HourBox>
        )
      } else if (start !== null && i === start) {
        hours.push(
          <HourBox key={i}  selected quarter={!!parseInt(i % 4)} data-val={i} className="available">
            <HourText selected quarter={!!parseInt(i % 4)} data-val={i} className="available">{dateValue(start * 15).slice(16, 21)}</HourText>
          </HourBox>
        )
      } else if(i > start && i < end) {
        hours[i] = 
          <HourBox key={i}  selected quarter={!!parseInt(i % 4)} data-val={i} className="available">
            <HourText selected quarter={!!parseInt(i % 4)} data-val={i} className="available">{dateValue(i * 15).slice(16, 21)}</HourText>
          </HourBox>
      }
      else {
        hours.push(
          <HourBox key={i}  data-val={i} quarter={!!parseInt(i % 4)} className="available">
            <HourText quarter={!!parseInt(i % 4)} data-val={i} className="available">{dateValue(i * 15).slice(16, 21)}</HourText>
          </HourBox>
        )
      }
      i++;
    }
    return hours;
  }

  handleClick = (event) => {
    const { start, end } = this.props
    let x = parseInt(event.target.dataset.val)
      if (event.target.className.slice(-9) === "available") {
        start === null ?
          this.props.setTime({ start: x, end: x + 4 }) :
        (x - start) <= 0 ?
          this.props.setTime({ start: x, end: x + 4 }) :
        end - start > 4 ?
          this.props.setTime({ start: x, end: x + 4 }) :
        (x - start) > 4 ?
          this.props.setTime({ start, end: x }) :
        (x - start) > 0 && (x - start) <= 4 ?
          this.props.setTime({ start: x, end: x + 4 }):
          this.props.setTime({ start: null, end: null })
      } else if (event.target.className.slice(-9) !== "available" && event.target.name !== "scroll"){
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
      <FlexColumn onClick={this.handleClick}>
        <ScrollArrow onClick={this.scrollDown} alt="up" src={arrowUp} name="scroll" />
          <DayBar ref="bar">
            {this.renderHours(daySelected)}
          </DayBar>
        <ScrollArrow onClick={this.scrollUp} alt="down" src={arrowDown} name="scroll" />
      </FlexColumn>)
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
    setTime: (value) => dispatch(setTime(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)