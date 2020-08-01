import React, { Component } from 'react';
import '../style.css';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { ButtonBook2 } from '../../styles/StyledButtons';
import { Input3, TextArea2, FakeInput } from '../../styles/StyledInputs';
import { StyledContainer2, StyledContainer3 } from '../../styles/StyledContainers';
import Parse from '../../utils/parse';

class BookingForm extends Component {
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
      <StyledContainer2 id='booking-form'>
        <table>
          <tbody>
            <tr>
              <th>You are booking a ride with: </th>
              <th><FakeInput>{driver.name}</FakeInput></th>
            </tr>
            <tr>
              <th>Date:</th>
              <th><FakeInput>{daySelected && Parse.formatDate(new Date(new Date(daySelected).setMinutes(start * 15)))}</FakeInput></th> 
            </tr>
            <tr>
              <th>From: </th>
              <th><FakeInput>{new Date(new Date(daySelected).setMinutes(start * 15)).toString().slice(15, 21)}</FakeInput></th>
            </tr>
            <tr>
              <th>To: </th>
              <th><FakeInput>{new Date(new Date(daySelected).setMinutes(end * 15)).toString().slice(15, 21)}</FakeInput></th>
            </tr>
            <tr>
              <th>Total time selected:</th>
              <th><FakeInput>{parseFloat((end - start)/4)} hours</FakeInput></th>
            </tr>
            <tr>
              <th>Total: </th>
              <th><FakeInput>${parseFloat((end - start)/4) * driver.rate}</FakeInput></th>
            </tr>
          </tbody>
        </table>
        <form onSubmit={(e) => submit(e, this.state)} >
          <StyledContainer3>
          <label>Pick-up address *</label>
            <Input3
                id='address'
                placeholder="enter pick-up address"
                onChange={this.handleChange}
            />
          </StyledContainer3>
          <StyledContainer3>
            <label>Note (optional)</label>  
              <TextArea2 as="textarea"
                onChange={this.handleChange}
                placeholder="add note to driver"
            />
          </StyledContainer3>
            <ButtonBook2 disabled={!this.validateForm()}>Book Ride</ButtonBook2>
        </form>
      </StyledContainer2>
    )
  }
}

BookingForm.propTypes = {
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

export default connect(mapStateToProps, null)(BookingForm);