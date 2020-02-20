import React, { Component } from 'react';
import '../styles/SearchAvailability.css';
import { Form, Row, Button } from "react-bootstrap";
import CalendarHome from './CalendarHome';
import DriversList from '../components/DriversList';
import TimeZone from '../../utils/timeZone';
import { startTime, endTime, dateClicked, resetSearch, addSearch } from '../ducks/actions';
import { connect } from "react-redux";
import { fetchDrivers } from '../../app/ducks/operations';



class SearchAvailability extends Component {
  

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

  clickDate = () => {
    this.props.clickDate()
  }

  searchAvailable = () => {
    const { selectedDate, start, end } = this.props.home;
    const date1 = TimeZone.toCentralTime(new Date(selectedDate).setHours(start));
    const date2 = TimeZone.toCentralTime(new Date(selectedDate).setHours(end));
    this.props.getAvailableDrivers('undefined', date1, date2);
    this.props.search()
  }

  handleChange = (event) =>{
    this.props[event.target.name](parseInt(event.target.value))
  }

  reset = () => {
    this.props.reset()
  }

  render(){
    const { home, drivers } = this.props
  console.log(this.props)
    return(
      <div className="search-container">
        <div className="form-container">
          <div id="form-title">Search for available chauffeurs:</div>
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
            {home.clickDate && <CalendarHome />}
            <div id="note">There are a total of <b>{drivers.length}</b> drivers available:</div>
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
    clickDate: () => dispatch(dateClicked()),
    start: (time) => dispatch(startTime(time)),
    end: (time) => dispatch(endTime(time)),
    getAvailableDrivers: (q, from, to) => dispatch(fetchDrivers(q, from, to)),
    search: () => dispatch(addSearch()),
    reset: () => dispatch(resetSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAvailability);