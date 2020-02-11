import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/NavBar.css';
import { logout } from '../../Auth/Ducks/actions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


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

  logout = () => {
    this.props.logout();
    localStorage.removeItem('jwt');
    this.props.history.push('/login')
  }


  render() {


    return (
        <div className="nav-container">
            <Navbar expand="lg">
                <Navbar.Brand href="/" className="nav-btn">Home</Navbar.Brand>
                <Link to="/about"><Navbar.Brand className="nav-btn">About</Navbar.Brand></Link>
                <Navbar.Brand href="/history" className="nav-btn">Ride History</Navbar.Brand>
         
              {/* <Nav className="mr-auto">
                <NavDropdown title="Sort drivers" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={this.props.sortByRating} >by Highest Rated</NavDropdown.Item>
                  <NavDropdown.Item onClick={this.props.sortByRate} >by Lowest Hourly Rate</NavDropdown.Item>
                </NavDropdown>
              
                  <Form onChange={this.handleChange} inline className="search-drivers">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="light" onClick={() => this.props.search(this.state.keyword)} >Search</Button>
                    <Button variant="light" onClick={() => this.props.reset()} >Reset</Button>
                  </Form>
                 
              </Nav> */}
                <Button id="bttn" variant="light" onClick={this.logout} to="/" >Logout</Button>
            </Navbar>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { logout: () => dispatch(logout()) }
}
 
export default connect(null, mapDispatchToProps)(withRouter(NavBar))

