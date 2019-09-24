import React, { Component } from "react";
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import Routes from "./Routes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-container">
         <Header />
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">About</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="flatrates">Flat rates</Nav.Link>
              <NavDropdown title="Sort drivers" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Highest rated</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Availability</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline className="search">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <span className="bttn">
              <Button href="login" variant="outline-success">Login</Button>
              </span>
            <span className="bttn">
              <Button href="register" variant="outline-success">Sign up</Button>
              </span>
          </Navbar.Collapse>
        </Navbar>
       
        <Routes />
      </div>
    );
  }
}

export default App;
