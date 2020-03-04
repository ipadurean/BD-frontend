import React from 'react';
import '../styles/SearchAvailability.css';
import CalendarHome from './CalendarHome';
import TimeZone from '../../utils/timeZone';
import { startTime, endTime, dateClicked, resetSearch, clickSearch } from '../ducks/actions';
import { connect } from "react-redux";
import { fetchDrivers } from '../../app/ducks/operations';
import { selectDay, setTime } from '../../booking/ducks/actions';
import { withRouter } from 'react-router';



const SearchAvailability = (props) => {
  
  const { selectedDate, start, end, clickDate } = props.home;

  const displayHours = (value) => {
    return  value > 23 ?
            value % 24 + ':00 + 1 day' :
            value + ':00'
  }

  const renderHours1 = () => {
    let count = 0;
    let hours = []
      while (count < (end || 36)){
        hours.push(<option data-val={count} key={count}>{displayHours(count)}</option>);
          count +=1;
      }
    return hours
  }

  const renderHours2 = () => {
    let count = start || 1;
    let hours = []
      while (count <= 36){
        hours.push(<option data-val={count} key={count}>{displayHours(count)}</option>);
          count +=1;
      }
    return hours
  }

  const clickBox = () => {
    props.dateClick();
  }

  const searchAvailable = () => {
    const date1 = TimeZone.toCentralTime(new Date(selectedDate).setHours(start));
    const date2 = TimeZone.toCentralTime(new Date(selectedDate).setHours(end));
    // props.history.push(`/home/drivers/search?from=${date1}&to=${date2}`)
    props.getAvailableDrivers('undefined', date1, date2);
    props.search();
    props.sendDate(selectedDate);
    props.sendTime({start, end});
  }

  const handleChange = (event) => {
    const { name, options } = event.target
    props[name](parseInt(options[options.selectedIndex].dataset.val))
  }

  const validateForm = () => {
    return selectedDate && (typeof(start) === 'number') && end
  }

  const reset = () => {
    props.reset();
    props.getAvailableDrivers()
  }

  return(
    <div className="search-container">
      <div id="form-title">Search for available chauffeurs:</div>
      <form id="form-container">
        <div id="date-box" onClick={clickBox}>{selectedDate? new Date(selectedDate).toString().slice(4,15): "Select Date"}</div>
        <select onChange={handleChange} name="start" className="time-home" as="select">
          <option>Start Time</option>
            {renderHours1()}
        </select>
        <select onChange={handleChange} name="end" className="time-home" as="select">
          <option>End Time</option>
          {renderHours2()}
        </select>
        <button onClick={searchAvailable} disabled={!validateForm()} type="button" id="filter">Search</button>
        <button onClick={reset} type="reset" id="reset">Reset</button>
      </form>
      <div id="calendar"> 
        {clickDate && <CalendarHome />}
      </div>
    </div>
  )
  
}


function mapStateToProps(state){
  return {drivers: state.drivers.drivers, home: state.home}
}

function mapDispatchToProps(dispatch){
  return {
    dateClick: () => dispatch(dateClicked()),
    start: (time) => dispatch(startTime(time)),
    end: (time) => dispatch(endTime(time)),
    getAvailableDrivers: (q, from, to) => dispatch(fetchDrivers(q, from, to)),
    search: () => dispatch(clickSearch()),
    reset: () => dispatch(resetSearch()),
    sendDate: (date) => dispatch(selectDay(date)),
    sendTime: (time) => dispatch(setTime(time))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchAvailability));