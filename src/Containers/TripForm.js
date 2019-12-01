import React, { Component } from 'react';
import { FormGroup, FormControl } from "react-bootstrap";
import '../styles/TripForm.css';

class Trip extends Component {
   constructor(){
     super();
     this.state = {
       address: "",
       extra: ""
     }
}


   handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm = () => {
    return this.state.address.length > 0 && this.props.time > 0;
  }

render(){
  
  return (
     <div className="trip-form">
       <p>You are booking a ride with: <b>{this.props.driver.name}</b></p>
       <p>For: <b>{this.props.date.slice(0,15)} at: {this.props.date.slice(16,18)}:00</b> </p>
       <p>Total time booked: <b>{this.props.time}</b> hours</p>
       <p>Total: <b>${this.props.time*this.props.driver.rate}</b></p>
       <form  onSubmit={(e) => this.props.submit(e,this.state)} >
          <FormGroup  controlId="address" bssize="large">
         
             <FormControl
                className="req"
                type="address"
                placeholder="enter pick-up address*"
                value={this.state.address}
                onChange={this.handleChange}
              />
              </FormGroup>
            <FormGroup controlId="extra" bssize="large">
              
              <FormControl as="textarea"
                value={this.state.extra}
                onChange={this.handleChange}
                placeholder="add note to driver (optional)"
                type="text"
              />
            </FormGroup>
            <input id="btn" type="submit" value="Book ride" disabled={!this.validateForm()}/>
       </form>
     </div>
  )
}

}

export default Trip;