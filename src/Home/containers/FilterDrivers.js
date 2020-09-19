import React, { Component } from 'react';
import '../style.css';
import CalendarHome from './CalendarHome';
import {
  startTime,
  endTime,
  dateClicked,
  startClicked,
  endClicked,
  resetSearch,
  clickSearch,
  cancelClicks,
  showQuarters,
  hideQuarters,
  showFilterBox,
} from "../ducks/actions";
import { connect } from "react-redux";
import { selectDay, setTime } from '../../Booking/ducks/actions';
import { withRouter } from 'react-router';
import { FlexRowWrap, FlexColumn, FlexRow } from '../../styles/StyledContainers';
import { Title2 } from '../../styles/StyledText';
import { FakeSelect, SelectOptionOuterBox } from '../../styles/StyledSelect';
import StartTimeOptions from '../components/StartTimeOptions';
import EndTimeOptions from '../components/EndTimeOptions';
import { Button1, Button4 } from '../../styles/StyledButtons';
import Parse from '../../utils/parse';



class FilterDrivers extends Component {
  
  constructor() {
    super();
    this.state = {
      filter: ''
    }
  }


  displaySelectedTime = (minutes) => {
     return parseInt(minutes/60)%24 + ':' + (minutes%60 || '00')
  }


  searchAvailable = () => {
    const { search, sendDate, sendTime, history } = this.props
    const { selectedDate, start, end } = this.props.home
    const differenceToChicagoTime = (300 - new Date().getTimezoneOffset()) * 60000
    const date1 = new Date(selectedDate).setMinutes(start) + differenceToChicagoTime;
    const date2 = new Date(selectedDate).setMinutes(end) + differenceToChicagoTime;
      history.push(`/home/drivers/search?keyword=${this.state.filter}&from=${date1}&to=${date2}`)
      search();
      sendDate(selectedDate);
      sendTime({start: (start/60) * 4, end: (end/60) * 4});
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
      filter: event.target.value.toLowerCase()
    })
  }

  handleClick1 = (event) => {
    this.props.start(parseInt(event.target.dataset.val))
  }

  handleClick2 = (event) => {
    const { start } = this.props.home;
    return (parseInt(event.target.dataset.val) > start + 45) &&
    this.props.end(parseInt(event.target.dataset.val))
  }


  render() {
    const { selectedDate, clickDate, clickStart, clickEnd, start, end, showFilterInput } = this.props.home;
   
      return (
        <div className="search-container">
          <Title2>Search for available chauffeurs:</Title2>
          <FlexRowWrap>
            <FlexRow>
              <FlexColumn>
                <div className="input-box" onClick={this.props.dateClick}>
                  {selectedDate
                    ? Parse.formatDate(new Date(selectedDate))
                    : "Select Date"}
                </div>
                {clickDate && <CalendarHome />}
              </FlexColumn>
              <FlexColumn>
                <FakeSelect onClick={this.props.startClick}>
                  {start ? this.displaySelectedTime(start) : "Start time"}
                </FakeSelect>
                {clickStart && (
                  <SelectOptionOuterBox onClick={this.handleClick1}>
                    <StartTimeOptions />
                  </SelectOptionOuterBox>
                )}
              </FlexColumn>
              <FlexColumn>
                <FakeSelect onClick={this.props.endClick}>
                  {end ? this.displaySelectedTime(end) : "End time"}
                </FakeSelect>
                {clickEnd && (
                  <SelectOptionOuterBox onClick={this.handleClick2}>
                    <EndTimeOptions />
                  </SelectOptionOuterBox>
                )}
              </FlexColumn>
            </FlexRow>
            {!showFilterInput && (
              <Button4 onClick={this.props.showFilter}>
                <u>Add Filter </u> (vehicle, name)
              </Button4>
            )}
            {showFilterInput && (
              <input
                onChange={this.addFilter}
                className="input-box"
                placeholder="Add filter"
                type="text"
              />
            )}
            <div style={{ marginLeft: "200px" }}>
              <Button1
                onClick={this.searchAvailable}
                disabled={!this.validateForm()}
                style={{ outline: "none" }}
              >
                Search
              </Button1>
              <Button1 onClick={this.reset} style={{ outline: "none" }}>
                Reset
              </Button1>
            </div>
          </FlexRowWrap>
        </div>
      );
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
    sendTime: (time) => dispatch(setTime(time)),
    resetClicks: () => dispatch(cancelClicks()),
    showQuarters: (value) => dispatch(showQuarters(value)),
    hideQuarters: () => dispatch(hideQuarters()),
    showFilter: () => dispatch(showFilterBox())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilterDrivers));