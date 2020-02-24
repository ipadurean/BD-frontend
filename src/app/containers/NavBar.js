import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import { logout } from '../../auth/ducks/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { fetchDrivers } from '../ducks/operations';
import { resetSearch } from '../../home/ducks/actions';
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.reset()
    this.props.fetchDrivers(this.state.query);
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
        {loading ? <div>Loading...</div> : <div className="welcome">Welcome <em>{user.username}</em> !</div>}
        <a href="/home" style={{'textDecoration': 'none' }} className="nav-item">Home</a>
        <Link to="/about" style={{ 'textDecoration': 'none' }} className="nav-item">About</Link>
        <a href="/history" style={{ 'textDecoration': 'none' }} className="nav-item">Ride History</a> 
        <form onSubmit={this.handleSubmit} className="search-drivers">
          <input onChange={this.handleChange} type="text" ref="input" />
          <button className="button" id="search">Search</button>
        </form>
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
    reset: () => dispatch(resetSearch())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))

