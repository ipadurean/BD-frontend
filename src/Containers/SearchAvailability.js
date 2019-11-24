import React, { Component } from 'react';
import './SearchAvailability.css';
import { Form, Row, Button } from "react-bootstrap";
import CalendarHome from '../Components/CalendarHome';

class SearchAvailability extends Component {
  constructor(){
    super()
    this.state = {
      dateClicked: false,
      selectedDate: ""
    }
    
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

  render(){
    console.log(this.state.selectedDate)
    return(
      <div className="search-container">
        <h4>Search for available drivers:</h4>
       <Form id="form">
          <Row>
          
              <Form.Control value={this.state.selectedDate.toString().slice(4, 15)} 
                            onClick={this.clickDate} id="date-home" 
                            placeholder="Choose Date">
              </Form.Control>
                <Form.Control id="time-home" as="select">
                  <option>Choose Time</option>
                  {this.renderHours()}
                </Form.Control>
                <Form.Control id="time-home" as="select">
                <option>Choose Time</option>
                  {this.renderHours()}
                </Form.Control>
                <Button id="submit" type="submit" variant="dark">Search</Button>
            
          </Row>
        </Form>
        {this.state.dateClicked && <CalendarHome select={this.selectDate} />}
      </div>
    )
  }
}

export default SearchAvailability;