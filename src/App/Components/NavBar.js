import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import { logout } from '../../auth/ducks/actions';
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
          <a href="/" className="nav-btn">Home</a>
          <Link to="/about" className="nav-btn">About</Link>
          <a href="/history" className="nav-btn">Ride History</a>
         
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
          <button id="bttn" onClick={this.logout} to="/" >Logout</button>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { logout: () => dispatch(logout()) }
}
 
export default connect(null, mapDispatchToProps)(withRouter(NavBar))

