import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components.css"

class NavBar extends Component {
  constructor(){
    super()
    this.state ={
      keyword: null
    }
  }

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value
    })
  }


  render() {


    return (
      <div className="nav-container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/flatrates">Flatrates</Nav.Link>
              <NavDropdown title="Sort drivers" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={this.props.sortByRating} >Highest rated</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Availability</NavDropdown.Item>
                <NavDropdown.Item onClick={this.props.sortByRate} >Rate</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form onChange={this.handleChange} inline className="search">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button onClick={() => this.props.search(this.state.keyword)} variant="outline-success">Search</Button>
              <Button onClick={() => this.props.reset()} variant="outline-success">Reset</Button>
            </Form>
           {!this.props.logged? 
           <div>
            <span className="bttn">
              <Button href="/login" variant="outline-success">Login</Button>
              </span>
            <span className="bttn">
              <Button href="register" variant="outline-success">Sign up</Button>
              </span>
              </div> :
              
              <span className="bttn">
              <Button onClick={this.props.logout} href="/" variant="outline-success">Logout</Button>
              </span>
            }

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;

