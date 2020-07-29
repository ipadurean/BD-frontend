import React, { Component } from 'react';
import '../style.css';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTime, displayQuarters } from '../ducks/actions';
import arrowUp from '../../utils/assets/arrow_drop_up.svg';
import arrowDown from '../../utils/assets/arrow_drop_down.svg';
import arrows from '../../utils/assets/arrows.svg';
import { FlexColumn } from '../../styles/StyledContainers';
import { Container, DayBar, HourBox, ScrollArrow, Arrows, HourText } from '../../styles/StyledDay';
import Quarters from './Quarters';

class Day extends Component {


  bookedHours = (day) => {
    const { driver } = this.props
    let bookedHours = [];
    const date1 = new Date(day);
    const date2 = new Date(day).setHours(36);
   
    const filteredTrips = driver.trips.filter(el => {
      const startDate = new Date(el.start_time).getTime();
      const endDate = new Date(el.end_time).getTime();
      return (startDate >= date1.getTime() && endDate <= date2) ||
        (startDate < date1.getTime() && endDate > date1.getTime()) ||
        (startDate < date2 && endDate >= date2)
    })

 
    const newArr = filteredTrips.map(el => {
      const hour = 3600000;
      const start = (new Date(el.start_time).getTime() - date1)/hour;
      const end = (new Date(el.end_time).getTime() - date1) / hour;
      const hoursToCentralTime = (date1.getTimezoneOffset() - 300)/60
       return [start + hoursToCentralTime, end + hoursToCentralTime]
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
    while (i < 36) {
      if (i*60 > parseInt(start) && this.bookedHours(day).includes(i)) {
            for(let k=i; k<36; k++){
              hours.push(
                <Container key={k} data-value={k} className="container">
                  <HourBox busy data-val={k*60} className="busy">
                    <HourText busy data-val={k*60} className="busy">{dateValue(i*60).slice(16, 21)}</HourText>
                    <Arrows src={arrows} data-value={k} className="show-quarters"/>
                  </HourBox>
                  {this.props.quarters === k && <Quarters minutes={k*60} />}
                </Container>
              )
            } return hours;
      } else if (this.bookedHours(day).includes(i)) {
        hours.push(
          <Container key={i} data-value={i} className="container">
            <HourBox busy data-val={i * 60} className="busy">
              <HourText busy data-val={i * 60} className="busy">{dateValue(i*60).slice(16, 21)}</HourText>
              <Arrows src={arrows} data-value={i} className="show-quarters"/>
            </HourBox>
            {this.props.quarters === i && <Quarters minutes={i*60} />}
          </Container>
        )
      } else if (start !== null && i === parseInt(start/60)) {
        hours.push(
          <Container key={i} data-value={i} className="container">
            <HourBox selected data-val={i * 60} className="available">
              <HourText selected data-val={i * 60} className="available">{dateValue(start).slice(16, 21)}</HourText>
              <Arrows src={arrows} data-value={i} className="show-quarters" />
            </HourBox>
            {this.props.quarters === i && <Quarters minutes={i*60} />}
          </Container>
        )
        } else if(i >= parseInt(start/60) && i < parseInt(end/60)) {
          hours[i + 12] = <Container key={i} data-value={i} className="container">
            <HourBox selected data-val={i * 60} className="available">
              <HourText selected data-val={i * 60} className="available">{dateValue(i*60).slice(16, 21)}</HourText>
              <Arrows src={arrows} data-value={i} className="show-quarters" />
            </HourBox>
            {this.props.quarters === i && <Quarters minutes={i*60} />}
          </Container>
        } else if (i*60 < end && i === parseInt(end/60)) {
        hours.push(
          <Container key={i} data-value={i} className="container">
            <HourBox data-val={i * 60} className="available">
              <HourText data-val={i * 60} className="available">{dateValue(end).slice(16, 21)}</HourText>
              <Arrows src={arrows} data-value={i} className="show-quarters" />
            </HourBox>
            {this.props.quarters === i && <Quarters minutes={i * 60} />}
        </Container>)
      }
      else {
          hours.push(
            <Container key={i} data-value={i} className="container">
              <HourBox data-val={i * 60} className="available">
                <HourText data-val={i * 60} className="available">{dateValue(i*60).slice(16, 21)}</HourText>
                <Arrows src={arrows} data-value={i} className="show-quarters"/>
              </HourBox>
              {this.props.quarters === i && <Quarters minutes={i*60} />}
            </Container>
          )
        }
        i++;
    }
    return hours;
  }

  handleClick = (event) => {

    const { start, end } = this.props
    let x = parseInt(event.target.dataset.val)
    this.props.showQuarters(null)
    if (event.target.className.slice(-9) === "available" || event.target.className.slice(-7) === "quarter") {
      start === null ?
        this.props.setTime({start: x, end: x + 60}) :
      (x - start) <= 0 ?
        this.props.setTime({ start: x, end: x + 60 }) :
      end - start > 60 ?
        this.props.setTime({ start: x, end: x + 60 }) :
      (x - start) > 60 ?
        this.props.setTime({ start, end: x }) :
      (x - start) > 0 && (x - start) <= 60 ?
        this.props.setTime({ start: x, end: x + 60 }):
        this.props.setTime({ start: null, end: null })
    } else if (event.target.className.slice(-9) !== "available" && event.target.className.slice(-7) !== "quarter"){
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

  handleMouseOver = (event) => {
    console.log(event.target.dataset.val)
    event.target.className.slice(-13) === "show-quarters"?
      this.props.showQuarters(parseInt(event.target.dataset.value)) :
      event.target.className.slice(-7) === "quarter" ?
        this.props.showQuarters(parseInt(event.target.parentNode.dataset.value)) :
        event.target.className.slice(-9) !== "container" && this.props.showQuarters(null)
  }


  render() {
    const { daySelected, start, end } = this.props
 console.log(start, end)
    return (
      <FlexColumn onClick={this.handleClick}
                  onMouseOver={this.handleMouseOver}
                  style={{ 'width': 'calc(185px + 1vw)' }}>
        <ScrollArrow onClick={this.scrollDown} alt="up" src={arrowUp} />
          <DayBar ref="bar">
            {this.renderHours(daySelected)}
          </DayBar>
        <ScrollArrow onClick={this.scrollUp} alt="down" src={arrowDown} />
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
    quarters: state.booking.displayQuarters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTime: (value) => dispatch(setTime(value)),
    showQuarters: (value) => dispatch(displayQuarters(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)