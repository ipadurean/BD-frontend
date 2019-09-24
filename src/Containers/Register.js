import React, { Component } from "react";
import {
  FormGroup,
  FormControl
} from "react-bootstrap";
// import LoaderButton from "../components/LoaderButton";
import "./Register.css";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
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

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          
          <FormControl
            autoFocus
            type="tel"
            placeholder="confirmation code"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <p>Please check your email for the code.</p>
        </FormGroup>
        {/* <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Verify"
          loadingText="Verifying…"
        /> */}
      </form>
    );
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
        <FormGroup controlId="password" bsSize="large">
          
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          
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
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}
