import React, { Component } from 'react';
import Day from './Day';
import './Calendar.css';
import TripForm from './TripForm';
import Invoice from '../Components/Invoice';


class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      selectedMonth: new Date().getMonth(),
      timeNow: new Date(),
      dayClicked:false,
      start:null,
      end:null,
      booked: false
    }
  }


  createMonth = () => {
    let date = new Date();
    let select = new Date();
    date.setMonth(this.state.selectedMonth);
    select.setMonth(this.state.selectedMonth);
    date.setDate(1);
    select.setTime(this.state.dayClicked);
    let daysArr = [];
    let days = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    let d = 1;
    for (let i=0; i<date.getDay(); i++){daysArr.push( <div key={i+100} className="calendar-date calendar-date--disabled"><span></span></div>)}
    while (d <= days) {
      date.setDate(d) < this.state.timeNow.getTime()?
           daysArr.push( <div key={d} className="calendar-date calendar-date--disabled" data-calendar-date={date.setDate(d)} ><span>{d}</span></div>) :
      this.state.dayClicked && d === select.getDate()?
           daysArr.push( <div key={d} className="calendar-date calendar-date--active calendar-date--selected" data-calendar-date={date.setDate(d)} ><span>{d}</span></div>):
      d === this.state.timeNow.getDate() && this.state.timeNow.getMonth() === date.getMonth()?
           daysArr.push( <div key={d} className="calendar-date calendar-date--active" id="calendar-date--today" data-calendar-date={date.setDate(d)} ><span>{d}</span></div>):
           daysArr.push( <div key={d} className="calendar-date calendar-date--active" data-calendar-date={date.setDate(d)} data-calendar-status="active"><span>{d}</span></div>)
      d++
    }
    
    return daysArr;
  }



  monthPrev = () => {
    this.setState(prevState => ({
      selectedMonth: prevState.selectedMonth - 1
    }))
  }

  monthNext = () => {
    this.setState(prevState => ({
      selectedMonth: prevState.selectedMonth + 1
    }))
  }

  getMonthYear = () => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = new Date();
    date.setMonth(this.state.selectedMonth);
    return months[date.getMonth()] + " " + date.getFullYear()
  }

  displayDay = (event) => {
    event.target.parentNode.className === "calendar-date calendar-date--active" &&
        this.setState({
            dayClicked: event.target.parentNode.dataset.calendarDate,
            start:null,
            end:null,
            booked: false
        }) 
  }

handleClick = (event) => {
  let x = event.target.dataset.val
    if(event.target.className === "hr"){
      this.state.start===null?
            this.setState({start: x-1, end: x}) :
      (x-this.state.start)<=1 ?
            this.setState({start:x-1, end: x}) :
      this.state.end - this.state.start >1 ?
            this.setState({start: x-1, end: x}):
      (x-this.state.start)>1?
            this.setState({end: x}):
            this.setState({start:null, end:null})
    } else {
      this.setState({start:null, end:null})
    }
}

bookRide = (event, item) => {
  event.preventDefault();
  let date = new Date();
  date.setTime(this.state.dayClicked);
  let date1 = new Date(date.setHours(this.state.start));
  let date2 = new Date(date.setHours(this.state.end));

  fetch('https://radiant-fjord-35660.herokuapp.com/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Accept": 'application/json'
    },
    body: JSON.stringify({
      user_id:this.props.user.id, 
      driver_id: this.props.driver.id,
      time_booked: this.state.end - this.state.start,
      start_time: date1,
      end_time: date2,
      total: this.props.driver.rate * (this.state.end - this.state.start),
      note: item.note,
      address: item.address
    })
  })
  .then(res => res.json())
  .then(trip => 
    this.setState({
       booked: trip
    })
  )
  
  
}

getBookingTime = () => {
  let date = new Date();
  date.setTime(this.state.dayClicked);
  date.setHours(this.state.start)
  return date+"";
}

reset = () => {
  this.setState({
    dayClicked: false,
    booked: false
  })
}



  render() {
  
    return (
      
      <div className="container">
        <div>{this.state.booked && <Invoice trip={this.state.booked} 
                                                     driver={this.props.driver}
    reset={this.reset} />}</div>
    
         <div id="myCalendar" className="calendar" >
         <h6 id="note">Please select a date:</h6>
              <div className="calendar-header">
                  <button onClick={this.monthPrev} className="calendar-btn" data-calendar-toggle="previous">
                    <svg height="24" version="1.1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
                    </svg>
                  </button>
                  <div className="calendar-header__label" data-calendar-label="month">{this.getMonthYear()}</div>
                  <button onClick={this.monthNext} className="calendar-btn" data-calendar-toggle="next"><svg height="24" version="1.1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></button>
                </div>
                            <div className="calendar-week">
                              <span>Sun</span>
                              <span>Mon</span>
                              <span>Tue</span>
                              <span>Wed</span>
                              <span>Thu</span>
                              <span>Fri</span>
                              <span>Sat</span>
                            </div>
                <div onClick={this.displayDay} className="calendar-body" data-calendar-area="month">
                {this.createMonth()}
                
                </div>
                  
              </div>
              <div className="book">
                        <div className="day">{this.state.dayClicked &&
                                      <Day day={this.state.dayClicked} 
                                          select={this.handleClick}
                                          start={this.state.start}
                                          end={this.state.end}
                                          driver={this.props.driver}
                                        />}
                        </div>
                        <div>
                         
                      
                        {this.state.dayClicked &&  <TripForm time={this.state.end - this.state.start} 
                                                        driver={this.props.driver}
                                                        date={this.getBookingTime()}
                                                        submit={this.bookRide} />}
                        </div>
               </div>
      </div> 
  
    )
  }


}

export default Calendar;