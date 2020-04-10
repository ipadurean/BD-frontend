import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import { logout } from '../../Auth/ducks/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { fetchDrivers } from '../ducks/operations';
import { resetSearch } from '../../Home/ducks/actions';
import { resetBooked } from '../../Booking/ducks/actions'
import PropTypes from 'prop-types';
import Header from '../components/Header'


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

  handleClick = () => {
    const { history, resetSearch, resetBooked } = this.props;
    history.push(`/home/drivers/search?keyword=${this.state.query}`);
    resetSearch();
    resetBooked();
    this.setState({
      query: ''
    });
    this.refs.input.value = '';
  }

  render() {

    const { user, loading, authorized } = this.props
    return (
      <div className="nav-container">
        <Header />
        {loading ? <div>Loading...</div> : <div className="welcome">Welcome <em><b>{user.username}</b></em> !</div>}
        <a href="/home" style={{'textDecoration': 'none' }} className="nav-item">Home</a>
        <Link to="/about" style={{ 'textDecoration': 'none' }} className="nav-item">About</Link>
        <a href="/history" style={{ 'textDecoration': 'none' }} className="nav-item">Ride History</a> 
        <div className="search-drivers">
          <input onChange={this.handleChange} id="search-box" type="text" ref="input" />
          <button onClick={this.handleClick} className="button" id="search">Search</button>
        </div>
        {authorized ?
          <button className="button" id="logout" onClick={this.logout}>Logout</button> :
          <div>
            <a href="/login"><button className="button" id="login">Login</button></a>
            <a href="/register"><button className="button" id="register">Register</button></a>
          </div>
          }
      </div>
    );
  }
}

NavBar.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.shape({
    username: PropTypes.string
    })
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loading: state.auth.loading,
    authorized: state.auth.authorized
  }
}

function mapDispatchToProps(dispatch){
  return {
    logout: () => dispatch(logout()),
    fetchDrivers: (query) => dispatch(fetchDrivers(query)),
    resetSearch: () => dispatch(resetSearch()),
    resetBooked: () => dispatch(resetBooked())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))

