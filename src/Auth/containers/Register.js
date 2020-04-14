import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from '../ducks/operations';
import { Button2, Button1 } from '../../styles/StyledButtons';
import { InputPrimary } from '../../styles/StyledInputs';
import { FlexColumn, FlexColumnFull, Loading } from '../../styles/StyledContainers';
import { StyledForm } from '../../styles/StyledForms';

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

  validateForm = () => {
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
    }, this.props.history)
  }

  render() {
    const { creating, created } = this.props
    return (
      <FlexColumnFull>
        {created ?
          <FlexColumn>
            <h2>Your account has been created! Please log in!</h2>
            <br /><br />
            <a href='/login'><Button1>Login</Button1></a>
          </FlexColumn> :
          creating ?
            <Loading>Creating account...</Loading> :
              <StyledForm onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <FlexColumn>
                  <InputPrimary id="firstName" type="text" placeholder="first name" />
                  <InputPrimary id="lastName" type="text" placeholder="last name" />
                  <InputPrimary id="email" type="email" placeholder="email" />
                  <InputPrimary id="username" type="text" placeholder="username" />
                  <InputPrimary id="phoneNumber" type="text" placeholder="phone number" />
                  <InputPrimary id="password" type="password" placeholder="password" /> 
                  <InputPrimary id="confirmPassword" type="password" placeholder="confirm pasword" />
                  <Button2 style={{ 'outline': 'none' }} disabled={!this.validateForm()}>Register</Button2>
                </FlexColumn>
              </StyledForm>}
      </FlexColumnFull>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (registerParams, history) => dispatch(register(registerParams, history))
  }
}

function mapStateToProps(state) {
  return {
    creating: state.auth.creating,
    created: state.auth.created
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
