import React, { Component } from 'react';
import '../styles/SearchAvailability.css';
import CalendarHome from './CalendarHome';
import { startTime, endTime, dateClicked, resetSearch, clickSearch } from '../ducks/actions';
import { connect } from "react-redux";
import { selectDay, setTime } from '../../Booking/ducks/actions';
import { withRouter } from 'react-router';
import { sortDrivers } from '../ducks/actions'



class SearchAvailability extends Component {
  
  constructor() {
    super();
    this.state = {
      filter: ''
    }
  }

  displayHours = (value) => {
    return  value > 23 ?
            value % 24 + ':00 + 1 day' :
            value + ':00'
  }

  renderHours1 = () => {
    const { end } = this.props.home
    let count = 0;
    let hours = []
      while (count < (end || 36)){
        hours.push(<option data-val={count} key={count}>{this.displayHours(count)}</option>);
          count +=1;
      }
    return hours
  }

  renderHours2 = () => {
    const { start } = this.props.home
    let count = start || 1;
    let hours = []
      while (count <= 36){
        hours.push(<option data-val={count} key={count}>{this.displayHours(count)}</option>);
          count +=1;
      }
    return hours
  }

  clickBox = () => {
    this.props.dateClick();
  }

  searchAvailable = () => {
    const { search, sendDate, sendTime, history } = this.props
    const { selectedDate, start, end } = this.props.home
    const date1 = new Date(selectedDate).setHours(start);
    const date2 = new Date(selectedDate).setHours(end);
    history.push(`/home/drivers/search?keyword=${this.state.filter}&from=${date1}&to=${date2}`)
    search();
    sendDate(selectedDate);
    sendTime({start, end});
  }

  handleChange = (event) => {
    const { name, options } = event.target
    this.props[name](parseInt(options[options.selectedIndex].dataset.val))
  }

  validateForm = () => {
    const { selectedDate, start, end } = this.props.home;
    return selectedDate && (typeof(start) === 'number') && end
  }

  reset = () => {
    this.props.reset();
    this.props.history.push('/home')
  }

  addFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  sort = (e) => {
    this.props.sortBy(e.target.value)
  }

  render() {
    const { selectedDate, clickDate } = this.props.home;
    return (
      <div className="search-container">
        <div id="form-title">Search for available chauffeurs:</div>
        <form id="form-container">
          <div className="input-box" onClick={this.clickBox}>{selectedDate ? new Date(selectedDate).toString().slice(4, 15) : "Select Date"}</div>
          <select onChange={this.handleChange} name="start" className="time-home">
            <option>Start Time</option>
            {this.renderHours1()}
          </select>
          <select onChange={this.handleChange} name="end" className="time-home">
            <option>End Time</option>
            {this.renderHours2()}
          </select>
          <input onChange={this.addFilter} className="input-box" placeholder="Add keyword" type="text" />
          <button onClick={this.searchAvailable} disabled={!this.validateForm()} type="button" id="filter">Search</button>
          <button onClick={this.reset} type="reset" id="reset">Reset</button>
          <select onChange={this.sort} type="text" className="sort">
            <option>Sort drivers</option>
            <option value="rating">by Highest Rated</option>
            <option value="rate">by Lowest Hourly Rate</option>
          </select>
        </form>
        <div id="calendar">
          {clickDate && <CalendarHome />}
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {drivers: state.drivers.drivers, home: state.home}
}

function mapDispatchToProps(dispatch){
  return {
    dateClick: () => dispatch(dateClicked()),
    start: (time) => dispatch(startTime(time)),
    end: (time) => dispatch(endTime(time)),
    search: () => dispatch(clickSearch()),
    reset: () => dispatch(resetSearch()),
    sendDate: (date) => dispatch(selectDay(date)),
    sendTime: (time) => dispatch(setTime(time)),
    sortBy: (type) => dispatch(sortDrivers(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchAvailability));