import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import RideHistory from '../../history/components/RideHistory';
import Home from '../../home/components/Home';
import Register from '../../auth/containers/Register';
import Login from '../../auth/containers/Login';
import '../styles/App.css';
import About from '../components/About';
import Invoice from '../../booking/components/Invoice';
import { connect } from 'react-redux';
import DriverProfile from '../../booking/containers/DriverProfile';
import { fetchDrivers } from '../ducks/operations';
import { authorize } from '../../auth/ducks/operations';
import NavBar from './NavBar';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    token && this.props.authorizeUser(this.props.history)
    this.props.fetchDrivers();
  }

  render() {
    const token = localStorage.getItem('jwt');
    const { drivers, authorized, booking } = this.props;
    
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/login' render={() => {
            return !authorized ? <Login /> :
              <Redirect to="/home" />
          }} />
          <Route exact path="/register" component={Register} />
          <Route exact path='/about' component={About} />
          <Route path="/history" render={() => {
            return token ? <RideHistory /> :
              <Redirect to='/login' />
          }} />
          <Route exact path="/:name" render={({ match }) => {
            const { name } = match.params
            const driver = drivers.find(el => el.name === name)
            
            return !token ? <Redirect to='/login' /> :
                    booking.booked ? <Invoice driver={driver} /> :
                    driver ? <DriverProfile driver={driver} /> :
                    <div>Page not found</div>
          }} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  drivers: PropTypes.array.isRequired,
  authorized: PropTypes.bool.isRequired,
  booking: PropTypes.shape({
    booked: PropTypes.bool.isRequired
  })
}

function mapStateToProps(state) {
  return {
    authorized: state.auth.authorized,
    loading: state.auth.loading,
    drivers: state.drivers.drivers,
    booking: state.booking
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDrivers: () => dispatch(fetchDrivers()),
    authorizeUser: (history) => dispatch(authorize(history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
