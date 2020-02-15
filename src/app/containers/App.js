import React, { Component } from 'react';
import Header from '../components/Header';
import { Route, Redirect, Switch } from 'react-router-dom';
import RideHistory from '../../history/components/RideHistory';
import Home from '../../home/components/Home';
import Register from '../../auth/containers/Register';
import Login from '../../auth/containers/Login';
import '../styles/App.css';
import About from '../components/About';
import { connect } from 'react-redux';
import DriverProfile from '../../booking/containers/DriverProfile';
import { fetchDrivers } from '../ducks/operations';
import { authorize } from '../../auth/ducks/operations';
import NavBar from './NavBar';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class App extends Component {

  componentDidMount() {
    this.props.fetchDrivers();
    localStorage.getItem('jwt') && this.props.authorize(this.props.history);
  }

  render() {
    const { drivers, loading, authorized } = this.props
    
    return (
      <div>
        <Header />
          {loading && <div className="loading">Loading...</div>}
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' render={() => {
            return localStorage.getItem('jwt') ?
              <Home /> :
            <Redirect to="/login" />
          }} />
                  
          <Route exact path='/login' render={() => {
            return authorized ?
              <Redirect to="/home" /> :
              <Login />
          }} />

          <Route exact path="/history" render={() => {
              return authorized && <RideHistory />
          }} />
          <Route exact path="/register" component={Register} />
          <Route exact path='/about' component={About} />
          <Route exact path="/:name" render={({ match }) => {
              const { name } = match.params
              const driver = drivers.find(el => el.name === name)
              return driver ? <DriverProfile driver={driver} /> :
                  <div>Page not found</div>
          }} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  drivers: PropTypes.array,
  authorized: PropTypes.bool,
  loading: PropTypes.bool
}

function mapStateToProps(state) {
  return {
    authorized: state.auth.authorized,
    drivers: state.drivers.drivers,
    loading: state.drivers.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDrivers: () => dispatch(fetchDrivers()),
    authorize: (history) => dispatch(authorize(history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))