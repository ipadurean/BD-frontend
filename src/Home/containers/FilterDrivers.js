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
  hideQuarters
} from '../ducks/actions';
import { connect } from "react-redux";
import { selectDay, setTime } from '../../Booking/ducks/actions';
import { withRouter } from 'react-router';
import { FlexRowWrap, FlexColumn, FlexRow } from '../../styles/StyledContainers';
import { Title2 } from '../../styles/StyledText';
import {
  FakeSelect,
  SelectOptionOuterBox,
  SelectOptionInnerBox,
  OptionBox,
  QuarterBox,
  Quarters
} from '../../styles/StyledSelect';
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
    return  value > 1380 ?
            (value % 1440)/60 + ':00(+1 day)' :
            value/60 + ':00'
  }

  displaySelectedTime = (minutes) => {
     return parseInt(minutes/60)%24 + ':' + (minutes%60 || '00')
  }

  setQuarters = (event) => {
    this.props.showQuarters(parseInt(event.target.dataset.val))
  }

  renderHours1 = () => {
    const { end, quarters } = this.props.home
    let count = 0;
    let hours = []
      while (count < (end && end < 1440 ? end : 1440)){
        hours.push(
          <FlexRow key={count}>
            <OptionBox onMouseOver={this.setQuarters}
                       data-val={count}>
              {this.displayHours(count)}
            </OptionBox>
            {(quarters === count) && <Quarters>
              {(end || 1440) - count > 15 && <QuarterBox data-val={count + 15}>:15</QuarterBox>}
              {(end || 1440) - count > 30 && <QuarterBox data-val={count + 30}>:30</QuarterBox>}
              {(end || 1440) - count > 45 && <QuarterBox data-val={count + 45}>:45</QuarterBox>}
            </Quarters>}
          </FlexRow>
        );
          count+=60;
      }
    return hours
  }

  renderHours2 = () => {
    const { start, quarters } = this.props.home
    let count = (start - start%60) || 0;
    let hours = []
      while (count < 1800){
        hours.push(
          <FlexRow key={count}>
            <OptionBox onMouseOver={this.setQuarters}
                       data-val={count}>
              {this.displayHours(count)}
            </OptionBox>
            {(quarters === count) && <Quarters>
              {(start - count < 15) && <QuarterBox data-val={count + 15}>:15</QuarterBox>}
              {(start - count < 30) && <QuarterBox data-val={count + 30}>:30</QuarterBox>}
              {(start - count < 45) && <QuarterBox data-val={count + 45}>:45</QuarterBox>}
            </Quarters>}
          </FlexRow>
        );
          count+=60;
      }
    return hours
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

  handleClick1 = (event) => {
    this.props.start(parseInt(event.target.dataset.val))
  }

  handleClick2 = (event) => {
    this.props.end(parseInt(event.target.dataset.val))
  }


  render() {
    const { selectedDate, clickDate, clickStart, clickEnd, start, end } = this.props.home;
    console.log(start, end)
      return (
        <div className="search-container">
          <Title2>Search for available chauffeurs:</Title2>
          <FlexRowWrap>
            <FlexColumn>
              <div className="input-box" onClick={this.props.dateClick}>{selectedDate ? Parse.formatDate(new Date(selectedDate)) : "Select Date"}</div>
              {clickDate && <CalendarHome />}
            </FlexColumn>
            <FlexColumn>
              <FakeSelect onClick={this.props.startClick}>{start ? this.displaySelectedTime(start) : 'Start time'}</FakeSelect>
              {clickStart && <SelectOptionOuterBox onClick={this.handleClick1}><SelectOptionInnerBox>{this.renderHours1()}</SelectOptionInnerBox></SelectOptionOuterBox>}
            </FlexColumn>
            <FlexColumn>
              <FakeSelect onClick={this.props.endClick}>{end ? this.displaySelectedTime(end) : 'End time'}</FakeSelect>
              {clickEnd && <SelectOptionOuterBox onClick={this.handleClick2}><SelectOptionInnerBox>{this.renderHours2()}</SelectOptionInnerBox></SelectOptionOuterBox>}
            </FlexColumn>
            <div>
              <input onChange={this.addFilter} className="input-box" placeholder="Add keyword" type="text" />
              <Button1 onClick={this.searchAvailable} disabled={!this.validateForm()} style={{ 'outline': 'none' }}>Search</Button1>
              <Button1 onClick={this.reset} style={{ 'outline': 'none' }}>Reset</Button1>
            </div>
          </FlexRowWrap>
         
           
         
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
    sendTime: (time) => dispatch(setTime(time)),
    resetClicks: () => dispatch(cancelClicks()),
    showQuarters: (value) => dispatch(showQuarters(value)),
    hideQuarters: () => dispatch(hideQuarters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilterDrivers));