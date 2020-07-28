import React, { Component } from 'react';
import '../style.css';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setTime, displayQuarters } from '../ducks/actions';
import arrowUp from '../../utils/assets/arrow_drop_up.svg';
import arrowDown from '../../utils/assets/arrow_drop_down.svg';
import { FlexColumn } from '../../styles/StyledContainers';
import { Container, DayBar, HourBox, ScrollArrow } from '../../styles/StyledDay';
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
    const dateValue = (hour) => {
      return new Date(new Date(day).setHours(hour)).toString().slice(0, 24) + " GMT-0500 (Central Daylight Time)";
    }
    let hours = [];
    let i = 0;
    while (i < 36) {
      if (i > parseInt(start) && this.bookedHours(day).includes(i)) {
            for(let k=i; k<36; k++){
              hours.push(
                <Container key={k} data-val={k}>
                  <HourBox busy data-val={null} className="busy">
                  {dateValue(i).slice(16, 21)}
                  </HourBox>
                  {this.props.quarters === null && <Quarters />}
                </Container>
              )
            } return hours;
      } else if (this.bookedHours(day).includes(i)) {
        hours.push(
          <Container key={i} data-val={i}>
            <HourBox busy data-val={null} className="busy">
              {dateValue(i).slice(16, 21)}
            </HourBox>
            {this.props.quarters === null && <Quarters />}
          </Container>
        )
        } else if (i === parseInt(start)) {
        hours.push(
          <Container key={i} data-val={i}>
            <HourBox selected data-val={i} className="available">
              {dateValue(i).slice(16, 21)}
            </HourBox>
            {this.props.quarters === i && <Quarters />}
          </Container>
        )
        } else if(i >= parseInt(start) && i < parseInt(end)) {
        hours[i + 12] = <div key={i}><HourBox selected data-val={i} className="available">{dateValue(i).slice(16, 21)}</HourBox></div>
        } else {
          hours.push(
            <Container key={i} data-val={i}>
              <HourBox data-val={i} className="available">
                {dateValue(i).slice(16, 21)}
              </HourBox>
              {this.props.quarters === i && <Quarters />}
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
    
    if (event.target.className.slice(-9) === "available") {
      start === null ?
        this.props.setTime({start: x, end: x+1}) :
      (x - start) <= 0 ?
        this.props.setTime({ start: x, end: x + 1 }) :
      end - start > 1 ?
        this.props.setTime({ start: x, end: x + 1 }) :
      (x - start) > 0 ?
        this.props.setTime({start, end: x + 1 }) :
        this.props.setTime({ start: null, end: null })
    } else if (event.target.className.slice(-9) !== "available"){
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
    event.target.parentNode.dataset.val !== undefined &&
    this.props.showQuarters(parseInt(event.target.dataset.val))
  }

  handleMouseOut = () => {
    this.props.showQuarters(null)
  }

  render() {
    const { daySelected, quarters } = this.props
  console.log(quarters)
    return (
      <FlexColumn onClick={this.handleClick}
                  onMouseOver={this.handleMouseOver}
                  onMouseOut={this.handleMouseOut}
                  style={{ 'width': '100%' }}>
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