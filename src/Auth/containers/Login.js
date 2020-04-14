import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from '../ducks/operations';
import { LgBlueBtn } from '../../styles/StyledButtons';
import { InputPrimary } from '../../styles/StyledInputs';
import { FlexColumn, FlexColumnFull } from '../../styles/StyledContainers';
import { StyledForm } from '../../styles/StyledForms';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state)
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.login({username: 'Guest', password: 'guestpass'})
  }

  render() {
    return (
      <FlexColumnFull>
        <StyledForm onSubmit={this.handleSubmit}>
          <FlexColumn>
            <InputPrimary
              id="username"
              type="text"
              placeholder= "username"
              onChange={this.handleChange}
            />
            <InputPrimary
              id="password"
              type="password"
              placeholder="password"
              onChange={this.handleChange}
              />
            <LgBlueBtn disabled={!this.validateForm()} style={{ 'outline': 'none' }}>Login</LgBlueBtn>
            <LgBlueBtn onClick={this.handleClick} style={{'outline':'none'}}>Continue as Guest</LgBlueBtn>
          </FlexColumn>
        </StyledForm>
      </FlexColumnFull>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { 
    login: (loginParams) => dispatch(loginAction(loginParams))
  }
}

export default connect(null, mapDispatchToProps)(Login)