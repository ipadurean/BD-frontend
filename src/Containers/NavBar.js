import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <Navbar.Brand href="/about">About</Navbar.Brand>
          <Navbar.Brand href="/account">My Account</Navbar.Brand>
          { !this.props.selected &&
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Sort drivers" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={this.props.sortByRating} >by Highest rated</NavDropdown.Item>
                  <NavDropdown.Item onClick={this.props.sortByRate} >by Hourly Rate</NavDropdown.Item>
                </NavDropdown>
              
                  <Form onChange={this.handleChange} inline className="search">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button onClick={() => this.props.search(this.state.keyword)} variant="outline-success">Search</Button>
                    <Button onClick={() => this.props.reset()} variant="outline-success">Reset</Button>
                  </Form>
              </Nav>
            <span className="bttn">
              <Button onClick={this.props.logout} href="/" variant="outline-success">Logout</Button>
            </span> 
            </Navbar.Collapse>}
        </Navbar> 
        
      </div>
    );
  }
}

export default NavBar;

