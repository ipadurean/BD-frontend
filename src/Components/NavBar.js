import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components.css"

class NavBar extends Component {
  constructor(){
    super()
    this.state ={}
  }
  render() {
    return (
      <div className="nav-container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">About</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/flatrates">Flatrates</Nav.Link>
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
           {!this.props.logged? 
           <div>
            <span className="bttn">
              <Button onClick={() => this.props.click()} variant="outline-success">Login</Button>
              </span>
            <span className="bttn">
              <Button href="register" variant="outline-success">Sign up</Button>
              </span>
              </div> :
              
              <span className="bttn">
              <Button onClick={() => this.props.logout()} href="/" variant="outline-success">Logout</Button>
              </span>
            }

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

