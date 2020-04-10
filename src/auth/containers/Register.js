import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import '../styles/Register.css';
import { register } from '../ducks/operations';

class Register extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.email.length > 0 &&
      this.state.username.length > 0 &&
      this.state.phoneNumber.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.registerUser({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.phoneNumber
    })
  }

  render() {
    return (
      <div className="signup">
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <FormGroup controlId="firstName">
            <FormControl
              type="text"
              placeholder="first name"
            />
          </FormGroup>
          <FormGroup controlId="lastName">
            <FormControl
              type="text"
              placeholder="last name"
            />
          </FormGroup>
          <FormGroup controlId="email">
            <FormControl
              type="email"
              placeholder="email"
            />
          </FormGroup>
          <FormGroup controlId="username">
            <FormControl
              type="text"
              placeholder="username"
            />
          </FormGroup>
          <FormGroup controlId="phoneNumber">
            <FormControl
              type="text"
              placeholder="phone number"
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormControl
              placeholder="password"
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword">
            <FormControl
              placeholder="confirm pasword"
              type="password"
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit" >
            Register
          </Button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (registerParams) => dispatch(register(registerParams))
  }
}

function mapStateToProps(state) {
  return {
    created: state.auth.created
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
