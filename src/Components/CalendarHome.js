import React, { Component } from 'react';
import '../styles/calendarHome.css';



class CalendarHome extends Component {

      constructor() {
        super()
        this.state = {
          selectedMonth: new Date().getMonth(),
          dayClicked:false,
          start:null,
          end:null
        }
      }



      createMonth = () => {
        let now = new Date();
        let date = new Date(now.getFullYear(), this.state.selectedMonth, 1, 0, 0, 0);
        let select = new Date(now.getFullYear(), this.state.selectedMonth, 1, 0, 0, 0);
        select.setTime(this.state.dayClicked);
        
        let daysArr = [];
        let days = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
        let d = 1;
          for (let i=0; i<date.getDay(); i++){
            daysArr.push( <div key={i+100} className="calendar-date calendar-date--disabled"></div>)
            }
          while (d <= days) {
                date.setDate(d) < now.getTime()?
                    daysArr.push( <div key={d} className="calendar-date calendar-date--disabled" data-calendar-date={date.setDate(d)} >{d}</div>) :
                this.state.dayClicked && d === select.getDate()?
                    daysArr.push( <div key={d} className="calendar-date calendar-date--active calendar-date--selected" data-calendar-date={date.setDate(d)} >{d}</div>):
                d === now.getDate() && now.getMonth() === date.getMonth()?
                    daysArr.push( <div key={d} className="calendar-date calendar-date--active" id="calendar-date--today" data-calendar-date={date.setDate(d)} >{d}</div>):
                    daysArr.push( <div key={d} className="calendar-date calendar-date--active" data-calendar-date={date.setDate(d)} data-calendar-status="active">{d}</div>)
                d++
            }
        
        return daysArr;
      }



      monthPrev = () => {
        this.state.selectedMonth &&
          this.setState(prevState => ({
          selectedMonth: prevState.selectedMonth - 1,
          dayClicked: false
        }))
      }

      monthNext = () => {
        this.setState(prevState => ({
          selectedMonth: prevState.selectedMonth + 1,
          dayClicked: false
        }))
      }

      getMonthYear = () => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date();
        date.setMonth(this.state.selectedMonth);
        return months[this.state.selectedMonth%12] + " " + date.getFullYear()
      }

      //determining the selected date in order to display the hours belonging the that specific date
      displayDay = (event) => {
      
        event.target.className === "calendar-date calendar-date--active" &&
            this.setState({
                dayClicked: event.target.dataset.calendarDate,
                start:null,
                end:null
            }) 
      }


      render(){
        return(
            <div id="myCalendar" className="calendar-home" >
                <div className="calendar-header">
                    <button onClick={this.monthPrev} className="calendar-btn" data-calendar-toggle="previous">
                      <svg height="18" version="1.1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
                      </svg>
                    </button>
                    <div className="calendar-header__label" data-calendar-label="month">{this.getMonthYear()}</div>
                    <button onClick={this.monthNext} className="calendar-btn" data-calendar-toggle="next">
                      <svg height="18" version="1.1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z">
                        </path>
                      </svg>
                    </button>
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
                      <div onClick={(event) => this.props.select(event)} className="calendar-body" data-calendar-area="month">
                          {this.createMonth()}
                          
                      </div>
                  </div>
        )
      }
}

export default CalendarHome;