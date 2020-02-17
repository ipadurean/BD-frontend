import React, { Component } from 'react';
import '../styles/SearchAvailability.css';
import { Form, Row, Button } from "react-bootstrap";
import CalendarHome from './CalendarHome';
import DriversList from '../components/DriversList';
import TimeZone from '../../utils/timeZone';
import { startTime, endTime, dateClicked, filterDrivers, resetSearch } from '../ducks/actions';
import { fetchTrips } from '../ducks/operations';
import { connect } from "react-redux";



class SearchAvailability extends Component {
  
  componentDidMount(){
    this.props.getTrips()
  }

  renderHours1 = () => {
    let count = 0;
    let hours = []
    while (count < (this.props.home.end || 24)){
        hours.push(<option key={count}>{count+":00"}</option>);
        count +=1;
    }
    return hours
  }

  renderHours2 = () => {
    let count = this.props.home.start || 1;
    let hours = []
    while (count <= 24){
        hours.push(<option key={count}>{count+":00"}</option>);
        count +=1;
    }
    return hours
  }

  clickDate = () =>{
    this.props.clickDate()
  }

  searchAvailable = () => {
    const { trips, selectedDate, start, end } = this.props.home
    const { drivers } = this.props
      let arr = trips.map(el => {
        el.end_time = TimeZone.toCentralTime(el.end_time)
        el.start_time = TimeZone.toCentralTime(el.start_time)
        return el
      })
    
        if (selectedDate && end > start ){
          let d = new Date(selectedDate).toString().slice(4,15);
          let intersectedDate = arr.filter(trip => trip.start_time.slice(4,15) === d);
          let intersectedTime = intersectedDate.filter(trip => {
            let s = new Date(trip.start_time).getHours();
            let e = new Date(trip.end_time).getHours() || 24;
            return (start > s && start < e) || (end > s && end < e) || (start <= s && end >= e)
          })
          let busyDrivers = intersectedTime.map(trip => trip.driver_id)
          let driversAvailable = drivers.filter(driver => !busyDrivers.includes(driver.id))
        
          this.props.filter(driversAvailable)
        }
  }

  handleChange = (event) =>{
    this.props[event.target.name](parseInt(event.target.value))
  }

  reset = () => {
    this.props.reset()
  }

  render(){
    const { home } = this.props
  
    return(
      <div className="search-container">
        <div className="form-container">
          <h4>Search for available chauffeurs:</h4>
          <Form id="form">
            <Row id="row">
              <Form.Control autoComplete="off"
                            defaultValue={home.selectedDate? new Date(home.selectedDate).toString().slice(4,15): ""} 
                            onClick={this.clickDate} 
                            id="date-home" 
                            placeholder="Choose Date">
              </Form.Control>
              <select onChange={this.handleChange} name="start" className="time-home" as="select">
                <option>Start Time</option>
                {this.renderHours1()}
              </select>
              <select onChange={this.handleChange} name="end" className="time-home" as="select">
              <option>End Time</option>
                {this.renderHours2()}
              </select>
              <Button variant="light" onClick={this.searchAvailable} type="button" id="filter">Search</Button>
              <Button variant="light" onClick={this.reset} type="reset" id="reset">Reset</Button>
            </Row>
          </Form>
          <div id="available"> 
            {home.clicked && <CalendarHome />}
            {home.driversAvailable &&  <p id="note">For this date and time there are a total of <b>{home.driversAvailable.length}</b> drivers available:</p>}
          </div>
        </div>
        <DriversList /> 
      </div>
    )
  }
}


function mapStateToProps(state){
  return {drivers: state.drivers.drivers, home: state.home}
}

function mapDispatchToProps(dispatch){
  return {
    getTrips: () => dispatch(fetchTrips()),
    clickDate: () => dispatch(dateClicked()),
    start: (time) => dispatch(startTime(time)),
    end: (time) => dispatch(endTime(time)),
    filter: (drivers) => dispatch(filterDrivers(drivers)),
    reset: () => dispatch(resetSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAvailability);