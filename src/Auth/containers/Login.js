import React, { Component } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import '../styles/Login.css';
import { connect } from "react-redux";
import { loginAction } from '../ducks/operations';


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

  render() {
   
    return (
      <div className="login">
        <h5>For Demo please login !</h5>
        <h6>Username: Guest</h6>
        <h6>Password: guestpass</h6>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bssize="large">
          <Form.Label>Username</Form.Label>
            <FormControl
              label="Username"
              autoFocus
              type="text"
              placeholder= "username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup  controlId="password" bssize="large">
            <Form.Label>Password</Form.Label>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder= "password"
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit" >
              Login
          </Button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { 
    login: (loginParams) => dispatch(loginAction(loginParams))
  }
}

export default connect(null, mapDispatchToProps)(Login)