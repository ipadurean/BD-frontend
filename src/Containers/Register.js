import React, { Component } from "react";
import { FormGroup, FormControl, Button, Navbar } from "react-bootstrap";
import "./Register.css";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      name: "",
      password: "",
      confirmPassword: "",
      newUser: null
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

 

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
        <FormControl
         type="text"
         placeholder="First Name"
         />
        </FormGroup>
        <FormGroup>
        <FormControl
         type="text"
         placeholder="Last Name"
         />
        </FormGroup>
        <FormGroup controlId="email" bssize="large">
          <FormControl
            autoFocus
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
          
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bssize="large">
          
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            placeholder="confirm pasword"
            type="password"
          />
        </FormGroup>
        {/* <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Signup"
          loadingText="Signing up…"
        /> */}
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        <Navbar>
            <span className="bttn">
                  <Button href="/login" variant="outline-success">Login</Button>
             </span>
        </Navbar>
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderForm()}
      </div>
    );
  }
}
