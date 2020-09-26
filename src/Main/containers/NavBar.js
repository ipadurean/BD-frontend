import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { logout } from '../../Auth/ducks/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchDrivers } from '../ducks/operations';
import { resetSearch } from '../../Home/ducks/actions';
import { resetBooked } from '../../Booking/ducks/actions'
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { FlexRow } from '../../styles/StyledContainers';
import { StyledNav, NavItem, StyledWelcome } from '../../styles/StyledNav';
import { Button2 } from '../../styles/StyledButtons';
import { Input2 } from '../../styles/StyledInputs';
import search from '../../utils/assets/search.svg';


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
        <StyledNav>
          <FlexRow>
            <Header />
            <span id="welcome-message">
              {loading ? (
                <StyledWelcome>Loading...</StyledWelcome>
              ) : (
                <StyledWelcome>
                  <span>Welcome</span> 
                  &nbsp;
                  <b> {user.username} </b>!
                </StyledWelcome>
              )}
            </span>
            <span id="nav-items">
              <NavItem href="/home">Home</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/rides/current">Rides</NavItem>
            </span>
            <div className="search-drivers">
              <Input2 onChange={this.handleChange} type="text" ref="input" />
              <img
                src={search}
                alt="search"
                onClick={this.handleClick}
                style={{ outline: "none" }}
              />
            </div>
            <div className="logInOut">
              {authorized ? 
                <Button2
                  onClick={this.logout}
                  id="logout"
                  style={{ outline: "none" }}
                >
                  Logout
                </Button2>
               : 
                <span>
                  <a href="/login">
                    <Button2 id="login" style={{ outline: "none" }}>
                      Login
                    </Button2>
                  </a>
                  <a href="/register">
                    <Button2 id="register" style={{ outline: "none" }}>
                      Register
                    </Button2>
                  </a>
                </span>
              }
            </div>
          </FlexRow>
        </StyledNav>
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

