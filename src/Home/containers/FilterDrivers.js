import React, { Component } from 'react';
import '../style.css';
import CalendarHome from './CalendarHome';
import { startTime, endTime, dateClicked, resetSearch, clickSearch } from '../ducks/actions';
import { connect } from "react-redux";
import { selectDay, setTime } from '../../Booking/ducks/actions';
import { withRouter } from 'react-router';
import { FlexRow } from '../../styles/StyledContainers';
import { Title1 } from '../../styles/StyledText';
import { Select1 } from '../../styles/StyledSelect';
import { Button1 } from '../../styles/StyledButtons';



class FilterDrivers extends Component {
  
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
    const differenceToChicagoTime = (new Date().getTimezoneOffset() - 300) * 60000
    const date1 = new Date(selectedDate).setHours(start) + differenceToChicagoTime;
    const date2 = new Date(selectedDate).setHours(end) + differenceToChicagoTime;
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


  render() {
    const { selectedDate, clickDate } = this.props.home;
    
      return (
        <div className="search-container">
          <Title1>Search for available chauffeurs:</Title1>
          <FlexRow>
            <div className="input-box" onClick={this.clickBox}>{selectedDate ? new Date(selectedDate).toString().slice(4, 15) : "Select Date"}</div>
            <Select1 onChange={this.handleChange} name="start">
              <option>Start Time</option>
                {this.renderHours1()}
            </Select1>
            <Select1 onChange={this.handleChange} name="end">
              <option>End Time</option>
                {this.renderHours2()}
            </Select1>
            <input onChange={this.addFilter} className="input-box" placeholder="Add keyword" type="text" />
              <Button1 onClick={this.searchAvailable} disabled={!this.validateForm()} style={{ 'outline': 'none' }}>Search</Button1>
              <Button1 onClick={this.reset} style={{ 'outline': 'none' }}>Reset</Button1>
          </FlexRow>
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
    sendTime: (time) => dispatch(setTime(time))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilterDrivers));