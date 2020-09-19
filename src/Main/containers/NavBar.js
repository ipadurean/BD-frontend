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
import { Button1 } from '../../styles/StyledButtons';
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
            <span style={{ minWidth: "calc(100px + 3vw)" }}>
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
            <span style={{ width: "calc(200px + 1vw)" }}>
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
              {authorized ? (
                <Button1
                  onClick={this.logout}
                  id="logout"
                  style={{ outline: "none" }}
                >
                  Logout
                </Button1>
              ) : (
                <>
                  <a href="/login">
                    <Button1 id="login" style={{ outline: "none" }}>
                      Login
                    </Button1>
                  </a>
                  <a href="/register">
                    <Button1 id="register" style={{ outline: "none" }}>
                      Register
                    </Button1>
                  </a>
                </>
              )}
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

