import React, { Component } from 'react';
import { FormGroup, FormControl, Form } from "react-bootstrap";
import '../styles/TripForm.css';
import PropTypes from 'prop-types';

class Trip extends Component {
  constructor(){
    super();
    this.state = {
      address: "",
      extra: ""
    }
  }


   handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm = () => {
    return this.state.address.length > 0 && this.props.time > 0;
  }

  render(){
    const { driver, date, time , submit } = this.props
    return (
      <div className="trip-form">
        <table>
          <tbody>
            <tr>
              <th>You are booking a ride with: </th>
              <th><div className="fake-input">{driver.name}</div></th>
            </tr>
            <tr>
                <th>For:</th>
                <th><div className="fake-input">{date.day && new Date(date.day).toString().slice(0,15)}</div></th> 
            </tr>
            <tr>
                <th>At: </th>
                <th><div className="fake-input">{date.start && <span>{date.start}:00</span>}</div></th>
            </tr>
            <tr>
                <th>Total time booked:</th>
                <th><div className="fake-input">{time} hours</div></th>
            </tr>
            <tr>
                <th>Total: </th>
                <th><div className="fake-input">${time * driver.rate}</div></th>
            </tr>
          </tbody>
        </table>
        <form  onSubmit={(e) => submit(e, this.state)} >
            <FormGroup  controlId="address" bssize="large">
            <Form.Label>Pick-up address *</Form.Label>
              <FormControl
                  className="req"
                  type="address"
                  placeholder="enter pick-up address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="extra" bssize="large">
              <Form.Label>Note (optional)</Form.Label>  
                <FormControl as="textarea"
                  value={this.state.extra}
                  onChange={this.handleChange}
                  placeholder="add note to driver"
                  type="text"
                />
              </FormGroup>
              <input id="btn" type="submit" value="Book ride" disabled={!this.validateForm()}/>
        </form>
      </div>
    )
  }
}

Trip.propTypes = {
  driver: PropTypes.object,
  date: PropTypes.object,
  time: PropTypes.number,
  submit: PropTypes.func
}

export default Trip;