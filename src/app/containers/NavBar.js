import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import { logout } from '../../auth/ducks/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { fetchDrivers } from '../ducks/operations';


class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  logout = () => {
    this.props.logout();
    localStorage.removeItem('jwt');
    this.props.history.push('/login')
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchDrivers(this.state.query);
    this.setState({
      query: ''
    });
    this.refs.input.value = '';
  }

  render() {
    return (
      <div className="nav-container">
        <a href="/home" style={{'textDecoration': 'none' }} className="nav-item">Home</a>
        <Link to="/about" style={{ 'textDecoration': 'none' }} className="nav-item">About</Link>
        <a href="/history" style={{ 'textDecoration': 'none' }} className="nav-item">Ride History</a>
        <form onSubmit={this.handleSubmit} className="search-drivers">
          <input onChange={this.handleChange} type="text" ref="input" />
          <button className="button" id="search">Search</button>
        </form>
        <button className="button" id="logout" onClick={this.logout} >Logout</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    logout: () => dispatch(logout()),
    fetchDrivers: (query) => dispatch(fetchDrivers(query)),
  }
}
 
export default connect(null, mapDispatchToProps)(withRouter(NavBar))

