import React, { Component } from "react";
import { FormGroup, FormControl, Button, Navbar, Form } from "react-bootstrap";
import '../styles/Register.css';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.name.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }



  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
  }

 

  render() {
    return (
      <div className="signup">
        <Navbar>
            <span className="bttn">
                  <Button href="/login" variant="outline-success">Login</Button>
            </span>
        </Navbar>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Form.Label>First Name</Form.Label>
            <FormControl
              type="text"
              placeholder="first name"
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Last Name</Form.Label>
            <FormControl
              type="text"
              placeholder="last name"
            />
          </FormGroup>
          <FormGroup controlId="email" bssize="large">
            <Form.Label>Email</Form.Label>
            <FormControl
              autoFocus
              type="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <Form.Label>Password</Form.Label>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" bssize="large">
            <Form.Label>Confirm Password</Form.Label>
            <FormControl
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              placeholder="confirm pasword"
              type="password"
            />
          </FormGroup>
        </form>
      </div>
    );
  }
}
