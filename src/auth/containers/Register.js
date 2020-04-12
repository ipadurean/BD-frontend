import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from '../ducks/operations';
import { LgBlueBtn, ButtonMain } from '../../styles/StyledButtons';
import { MainInput } from '../../styles/StyledInputs';
import { FlexColumn, StyledContainer } from '../../styles/StyledContainers';

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
      <StyledContainer>
        {created ?
          <FlexColumn>
            <h2>Your account has been created! Please log in!</h2>
            <a href='/login'><ButtonMain>Login</ButtonMain></a>
          </FlexColumn> :
          creating ?
            <FlexColumn><h2>Creating account...</h2></FlexColumn> :
              <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <FlexColumn>
                  <MainInput id="firstName" type="text" placeholder="first name" />
                  <MainInput id="lastName" type="text" placeholder="last name" />
                  <MainInput id="email" type="email" placeholder="email" />
                  <MainInput id="username" type="text" placeholder="username" />
                  <MainInput id="phoneNumber" type="text" placeholder="phone number" />
                  <MainInput id="password" type="password" placeholder="password" /> 
                  <MainInput id="confirmPassword" type="password" placeholder="confirm pasword" />
                  <LgBlueBtn style={{ 'outline': 'none' }} disabled={!this.validateForm()}>Register</LgBlueBtn>
                </FlexColumn>
              </form>}
      </StyledContainer>
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
