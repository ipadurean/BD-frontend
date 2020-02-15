import React, { Component } from 'react'
import Header from '../components/Header'
import { Route, Redirect, Switch } from 'react-router-dom'
import RideHistory from '../../history/components/RideHistory'
import Home from '../../home/components/Home'
import Register from '../../auth/containers/Register'
import Login from '../../auth/containers/Login'
import '../styles/App.css'
import About from '../components/About'
import { connect } from 'react-redux'
import DriverProfile from '../../booking/containers/DriverProfile'
import { fetchDrivers } from '../ducks/operations'
import { authorize } from '../../auth/ducks/operations'
import NavBar from './NavBar'
import { withRouter } from 'react-router'

class App extends Component {

  componentDidMount() {
    this.props.fetchDrivers();
    localStorage.getItem('jwt') && this.props.authorize(this.props.history);
  }

  render() {
    const { drivers, auth } = this.props
        
    return (
      <div>
        <Header />
          {drivers.loading && <div className="loading">Loading...</div>}
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => {
            return localStorage.getItem('jwt') ?
              <Home /> :
            <Redirect to="/login" />
          }} />
                  
          <Route exact path='/login' render={() => {
            return auth.authorized ?
              <Redirect to="/" /> :
              <Login />
          }} />

          <Route exact path="/history" render={() => {
              return auth.authorized && <RideHistory />
          }} />
          <Route exact path="/register" component={Register} />
          <Route exact path='/about' component={About} />
          <Route exact path="/:name" render={({ match }) => {
              const { name } = match.params
              const driver = drivers.drivers.find(el => el.name === name)
              return driver ? <DriverProfile driver={driver} /> :
                  <div>Page not found</div>
          }} />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        fetchDrivers: () => dispatch(fetchDrivers()),
        authorize: (history) => dispatch(authorize(history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
