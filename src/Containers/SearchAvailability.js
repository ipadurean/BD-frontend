import React, { Component } from 'react';
import '../styles/SearchAvailability.css';
import { Form, Row } from "react-bootstrap";
import CalendarHome from '../Components/CalendarHome';
import DriversList from '../Components/DriversList';

class SearchAvailability extends Component {
  constructor(){
    super()
    this.state = {
      dateClicked: false,
      selectedDate: "",
      start: null,
      end: null,
      trips: [],
      filter: false
    }
    
  }

  componentDidMount(){
    fetch("https://radiant-fjord-35660.herokuapp.com/trips")
    .then(res => res.json())
    .then(data => {
      this.setState({trips: data})
    })
  }

  renderHours = () => {
    let count = 0;
    let hours = []
    while (count < 24){
        hours.push(<option key={count}>{count+":00"}</option>);
        count +=1;
    }
    return hours
  }

  clickDate = () =>{
    this.setState({
      dateClicked: true
    })
  }

  selectDate = (event) =>{
    let date = new Date();
    date.setTime(event.target.dataset.calendarDate)
    event.target.className === "calendar-date calendar-date--active" &&
    this.setState({
      dateClicked: false,
      selectedDate: date
    })
  }

  searchAvailable = () =>{
    let s = parseInt(this.state.start)
    let e = parseInt(this.state.end) || 24
    let arr = this.state.trips.map(el => {
      el.end_time = new Date(el.end_time).toLocaleString("en-US", {timeZone: "America/Chicago"})
      el.start_time = new Date(el.start_time).toLocaleString("en-US", {timeZone: "America/Chicago"})
      return el
  })
    
        if (this.state.selectedDate && e > s ){
        let d = this.state.selectedDate.toLocaleString().slice(0,10);
        let intersectedDate = arr.filter(trip => trip.start_time.slice(0,10) === d);
        let intersectedTime = intersectedDate.filter(trip => {
                                  let start = new Date(trip.start_time).getHours();
                                  let end = new Date(trip.end_time).getHours() || 24;
                                  return (s > start && s < end) || (e > start && e < end) || (s <= start && e >= end)
                              })
        let busyDrivers = intersectedTime.map(trip => trip.driver_id)
        let filterDrivers = this.props.drivers.filter(driver => !busyDrivers.includes(driver.id))
            this.setState({
              filter: filterDrivers
            })
        }
  }

  handleChange = (event) =>{
      this.setState({
        [event.target.name] : event.target.value
      })
  }

  reset = () => {
    this.setState({filter: false})
  }

  render(){
  
    return(
      <div className="search-container">
        <div className="form-container">
            <h4>Search for available drivers:</h4>
          <Form onChange={this.handleChange} id="form">
              <Row id="row">
              
                  <Form.Control 
                                autoComplete="off"
                                defaultValue={this.state.selectedDate.toString().slice(4, 15)} 
                                onClick={this.clickDate} id="date-home" 
                                placeholder="Choose Date">
                  </Form.Control>
                    <Form.Control name="start" id="time-home" as="select">
                      <option>Start Time</option>
                      {this.renderHours()}
                    </Form.Control>
                    <Form.Control name="end" id="time-home" as="select">
                    <option>End Time</option>
                      {this.renderHours()}
                    </Form.Control>
                    <button onClick={this.searchAvailable} type="button" id="filter">Search</button>
                    <button onClick={this.reset} type="reset" id="reset">Reset</button>
              </Row>
            </Form>
            <div id="available"> 
            {this.state.dateClicked && <CalendarHome select={this.selectDate} />}
              {this.state.filter &&  <p id="note">For this date and time there are a total of <b>{this.state.filter.length}</b> drivers available:</p>}</div>
          </div>
                <DriversList drivers={this.state.filter || this.props.drivers}
                             select={this.props.select}
                             logged={this.props.logged}
                             filter={this.state.filter}
                             hoursTotal={parseInt(this.state.end)||24 - parseInt(this.state.start)} /> 
          
      </div>
    )
  }
}

export default SearchAvailability;