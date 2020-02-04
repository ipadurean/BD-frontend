import React, { Component } from 'react';
import '../../Styles/SearchAvailability.css';
import { Form, Row, Button } from "react-bootstrap";
import CalendarHome from '../Components/CalendarHome';
import DriversList from './DriversList';
import TimeZone from '../../Utils/timeZone';
import { fetchTrips } from '../Ducks/actions';
import { connect } from "react-redux";
import { timeToBook } from '../Ducks/actions'



class SearchAvailability extends Component {
  constructor(){
    super()
    this.state = {
      dateClicked: false,
      selectedDate: "",
      start: null,
      end: null,
      filter: false
    }
    
  }

  componentDidMount(){
     this.props.getTrips()
  }

  renderHours1 = () => {
    let count = 0;
    let hours = []
    while (count < (this.state.end || 24)){
        hours.push(<option key={count}>{count+":00"}</option>);
        count +=1;
    }
    return hours
  }

  renderHours2 = () => {
    let count = this.state.start || 0;
    let hours = []
    while (count <= 24){
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
    event.target.className === "calendar-date calendar-date--active" &&
    this.setState({
      dateClicked: false,
      selectedDate: parseInt(event.target.dataset.calendarDate)
    })
  }

  searchAvailable = () => {
    const { selectedDate, start, end } = this.state
    this.props.sendTimeToBook(selectedDate, start, end)
    let s = this.state.start
    let e = this.state.end || 24
    let arr = this.props.trips.map(el => {
          el.end_time = TimeZone.toCentralTime(el.end_time)
          el.start_time = TimeZone.toCentralTime(el.start_time)
    return el
    })
    
        if (this.state.selectedDate && e > s ){
            let d = new Date(this.state.selectedDate).toString().slice(4,15);
            let intersectedDate = arr.filter(trip => trip.start_time.slice(4,15) === d);
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
        [event.target.name] : parseInt(event.target.value)
      })
  }

  reset = () => {
    this.setState({filter: false})
  }

  render(){

    return(
        <div className="search-container">
            <div className="form-container">
               <h4>Search for available chauffeurs:</h4>
               <Form onChange={this.handleChange} id="form">
                  <Row id="row">
                    <Form.Control autoComplete="off"
                                  defaultValue={this.state.selectedDate && new Date(this.state.selectedDate).toString().slice(4,15)} 
                                  onClick={this.clickDate} 
                                  id="date-home" 
                                  placeholder="Choose Date">
                    </Form.Control>
                    <select name="start" className="time-home" as="select">
                      <option>Start Time</option>
                      {this.renderHours1()}
                    </select>
                    <select name="end" className="time-home" as="select">
                    <option>End Time</option>
                      {this.renderHours2()}
                    </select>
                    <Button variant="light" onClick={this.searchAvailable} type="button" id="filter">Search</Button>
                    <Button variant="light" onClick={this.reset} type="reset" id="reset">Reset</Button>
                  </Row>
               </Form>
               <div id="available"> 
                  {this.state.dateClicked && <CalendarHome select={this.selectDate} />}
                  {this.state.filter &&  <p id="note">For this date and time there are a total of <b>{this.state.filter.length}</b> drivers available:</p>}
               </div>
            </div>
            <DriversList filter={this.state.filter} /> 
        </div>
    )
  }
}


function mapStateToProps(state){
  return {drivers: state.drivers.drivers, trips: state.home.trips}
}

function mapDispatchToProps(dispatch){
  return {
    getTrips: () => dispatch(fetchTrips()),
    sendTimeToBook: (selectedDate, start, end) => dispatch(timeToBook(selectedDate, start, end))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAvailability);