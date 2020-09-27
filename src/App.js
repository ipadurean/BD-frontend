import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllRides from './RideSummary/components/AllRides';
import Home from './Home/containers/Home';
import Register from './Auth/containers/Register';
import Login from './Auth/containers/Login';
import About from './Main/components/About';
import Invoice from './Booking/components/Invoice';
import { connect } from 'react-redux';
import DriverProfile from './Booking/containers/DriverProfile';
import { fetchDrivers } from './Main/ducks/operations';
import { authorize } from './Auth/ducks/operations';
import NavBar from './Main/containers/NavBar';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Parse from './utils/parse';
import { GlobalStyle } from './styles/GlobalStyle';

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    token && this.props.authorizeUser(this.props.history)
  }

  render() {
    const token = localStorage.getItem('jwt');
    const { authorized, booking } = this.props;
    const { selectedDate, start, end } = this.props.home;
    const differenceToChicagoTime = (300 - new Date().getTimezoneOffset()) * 60000;
    const date1 = new Date(selectedDate).setMinutes(start) + differenceToChicagoTime;
    const date2 = new Date(selectedDate).setMinutes(end) + differenceToChicagoTime;
    const homeURL = `/home/drivers/search?from=${date1}&to=${date2}`;
   
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/home/drivers/search' render={({ location }) => {
            const searchParams = Parse.getParams(location.search)
            return <Home query={searchParams} />
          }} />
          <Route path='/login' render={() => {
            return !authorized ? <Login /> :
              <Redirect to={homeURL} />
          }} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/about' component={About} />
          <Route path="/rides" render={() => {
            return token ? <AllRides /> :
              <Redirect to='/login' />
          }} />
          <Route exact path='/drivers/:name' render={({ match }) => {
            const { name } = match.params
           
            return !token ? <Redirect to='/login' /> :
              booking.booked ? <Invoice driverName={name} /> :
                    name ? <DriverProfile driverName={name} /> :
                    <div>Page not found</div>
          }} />
        </Switch>
        <GlobalStyle />
      </>
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
    booking: state.booking,
    reviewOpen: state.rideSummary.reviewOpen,
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDrivers: (q) => dispatch(fetchDrivers(q)),
    authorizeUser: (history) => dispatch(authorize(history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
