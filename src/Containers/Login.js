import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../Style/Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    
    return (
      <div className="Login">
        <h5>For Demo please login !</h5>
        <h6>Username: Guest</h6>
        <h6>Password: pass</h6>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bssize="large">
            
            <FormControl
              autoFocus
              type="text"
              placeholder= "username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup  controlId="password" bssize="large">
            
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
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}