import React from 'react';
import '../styles/SearchAvailability.css';
import { Form, Row, Button } from "react-bootstrap";
import CalendarHome from './CalendarHome';
import TimeZone from '../../utils/timeZone';
import { startTime, endTime, dateClicked, resetSearch, addSearch } from '../ducks/actions';
import { connect } from "react-redux";
import { fetchDrivers } from '../../app/ducks/operations';



const SearchAvailability = (props) => {
  
  const { home, drivers } = props

  const renderHours1 = () => {
    let count = 0;
    let hours = []
      while (count < (props.home.end || 24)){
          hours.push(<option key={count}>{count+":00"}</option>);
          count +=1;
      }
    return hours
  }

  const renderHours2 = () => {
    let count = props.home.start || 1;
    let hours = []
      while (count <= 24){
          hours.push(<option key={count}>{count+":00"}</option>);
          count +=1;
      }
    return hours
  }

  const clickDate = () => {
    props.clickDate()
  }

  const searchAvailable = () => {
    const { selectedDate, start, end } = props.home;
    const date1 = TimeZone.toCentralTime(new Date(selectedDate).setHours(start));
    const date2 = TimeZone.toCentralTime(new Date(selectedDate).setHours(end));
    props.getAvailableDrivers('undefined', date1, date2);
    props.search()
  }

  const handleChange = (event) => {
    props[event.target.name](parseInt(event.target.value))
  }

  const validateForm = () => {
    const { selectedDate, start, end } = props.home;
    return selectedDate && start && end
  }

  const reset = () => {
    props.reset()
  }
  
    return(
      <div className="search-container">
        <div className="form-container">
          <div id="form-title">Search for available chauffeurs:</div>
          <Form id="form">
            <Row id="row">
              <Form.Control autoComplete="off"
                            defaultValue={home.selectedDate? new Date(home.selectedDate).toString().slice(4,15): ""} 
                            onClick={clickDate} 
                            id="date-home" 
                            placeholder="Choose Date">
              </Form.Control>
              <select onChange={handleChange} name="start" className="time-home" as="select">
                <option>Start Time</option>
                {renderHours1()}
              </select>
              <select onChange={handleChange} name="end" className="time-home" as="select">
                <option>End Time</option>
                {renderHours2()}
              </select>
              <Button variant="light" onClick={searchAvailable} disabled={!validateForm()} type="button" id="filter">Search</Button>
              <Button variant="light" onClick={reset} type="reset" id="reset">Reset</Button>
            </Row>
          </Form>
          <div id="calendar"> 
            {home.clickDate && <CalendarHome />}
          </div>
          <div id="note">There are a total of <b>{drivers.length}</b> drivers available:</div>
        </div>
      </div>
    )
  
}


function mapStateToProps(state){
  return {drivers: state.drivers.drivers, home: state.home}
}

function mapDispatchToProps(dispatch){
  return {
    clickDate: () => dispatch(dateClicked()),
    start: (time) => dispatch(startTime(time)),
    end: (time) => dispatch(endTime(time)),
    getAvailableDrivers: (q, from, to) => dispatch(fetchDrivers(q, from, to)),
    search: () => dispatch(addSearch()),
    reset: () => dispatch(resetSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAvailability);