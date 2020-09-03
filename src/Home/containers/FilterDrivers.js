import React, { Component } from 'react';
import '../style.css';
import CalendarHome from './CalendarHome';
import { startTime, endTime, dateClicked, startClicked, endClicked, resetSearch, clickSearch } from '../ducks/actions';
import { connect } from "react-redux";
import { selectDay, setTime } from '../../Booking/ducks/actions';
import { withRouter } from 'react-router';
import { FlexRow, FlexColumn } from '../../styles/StyledContainers';
import { Title2 } from '../../styles/StyledText';
import { FakeSelect, SelectOptionBox, OptionBox } from '../../styles/StyledSelect';
import { Button1 } from '../../styles/StyledButtons';
import Parse from '../../utils/parse';



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
      while (count < (end || 24)){
        hours.push(<OptionBox data-val={count} key={count}>{this.displayHours(count)}</OptionBox>);
          count +=1;
      }
    return hours
  }

  renderHours2 = () => {
    const { start } = this.props.home
    let count = start || 0;
    let hours = []
      while (count < 30){
        hours.push(<OptionBox data-val={count} key={count}>{this.displayHours(count)}</OptionBox>);
          count +=1;
      }
    return hours
  }

  clickDate = () => {
    this.props.dateClick();
  }

  clickStartTime = () => {
    this.props.startClick();
  }

  clickEndTime = () => {
    this.props.endClick();
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
      sendTime({start: start * 4, end: end * 4});
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
    const { selectedDate, clickDate, clickStart, clickEnd } = this.props.home;
    
      return (
        <div className="search-container">
          <Title2>Search for available chauffeurs:</Title2>
          <FlexRow>
            <div className="input-box" onClick={this.clickDate}>{selectedDate ? Parse.formatDate(new Date(selectedDate)) : "Select Date"}</div>
              <FlexColumn>
                <FakeSelect onClick={this.props.startClick}>Start time</FakeSelect>
                {clickStart && <SelectOptionBox>{this.renderHours1()}</SelectOptionBox>}
              </FlexColumn>
              <FlexColumn>
              <FakeSelect onClick={this.props.endClick}>End time</FakeSelect>
                {clickEnd && <SelectOptionBox>{this.renderHours2()}</SelectOptionBox>}
              </FlexColumn>
            <input onChange={this.addFilter} className="input-box" placeholder="Add keyword" type="text" />
              <Button1 onClick={this.searchAvailable} disabled={!this.validateForm()} style={{ 'outline': 'none' }}>Search</Button1>
              <Button1 onClick={this.reset} style={{ 'outline': 'none' }}>Reset</Button1>
          </FlexRow>
          <div>
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
    startClick: () => dispatch(startClicked()),
    endClick: () => dispatch(endClicked()),
    start: (time) => dispatch(startTime(time)),
    end: (time) => dispatch(endTime(time)),
    search: () => dispatch(clickSearch()),
    reset: () => dispatch(resetSearch()),
    sendDate: (date) => dispatch(selectDay(date)),
    sendTime: (time) => dispatch(setTime(time))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilterDrivers));