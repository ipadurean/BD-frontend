import React, { Component } from 'react';
import { FormGroup, FormControl, Form } from "react-bootstrap";
import '../styles/TripForm.css';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

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
    const { start, end } = this.props
    return this.state.address.length > 0 && start && end;
  }

  render(){
    const { driver, daySelected, start, end, submit } = this.props 
    
    return (
      <div className="trip-form">
        <table>
          <tbody>
            <tr>
              <th>You are booking a ride with: </th>
              <th><div className="fake-input">{driver.name}</div></th>
            </tr>
            <tr>
              <th>Date:</th>
              <th><div className="fake-input">{daySelected && new Date(new Date(daySelected).setHours(start)).toString().slice(0,15)}</div></th> 
            </tr>
            <tr>
              <th>From: </th>
              <th><div className="fake-input">{new Date(new Date(daySelected).setHours(start)).toString().slice(15, 21)}</div></th>
            </tr>
            <tr>
              <th>To: </th>
              <th><div className="fake-input">{new Date(new Date(daySelected).setHours(end)).toString().slice(15, 21)}</div></th>
            </tr>
            <tr>
              <th>Total time selected:</th>
              <th><div className="fake-input">{end - start} hours</div></th>
            </tr>
            <tr>
              <th>Total: </th>
              <th><div className="fake-input">${(end - start) * driver.rate}</div></th>
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

function mapStateToProps(state) {
  return {
    daySelected: state.booking.daySelected,
    start: state.booking.time.start,
    end: state.booking.time.end
  }
}

export default connect(mapStateToProps, null)(Trip);