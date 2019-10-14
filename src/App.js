import React, { Component } from "react";
import DriversList from './Components/DriversList';
import Header from './Components/Header';
import { Router, Route, Redirect } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './Components/NavBar';
import Login from './Containers/Login';
import Home from './Containers/Home'
import "./App.css";
import Auth from './authAdapter'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

class App extends Component {
  constructor() {
    super()
    this.state = {
      drivers: [],
      loggedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/drivers')
      .then(res => res.json())
      .then(data => {
        return this.setState({ drivers: data })
      })
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error)
      });
   }

    componentWillMount(){
      if (localStorage.getItem('jwt')) {
      Auth.currentUser()
        .then(user => {
          if (!user.error) {
            this.setState({
                loggedIn: true,
                user: user
              })
            }
          })
        }
    }
  
    logout(){
      localStorage.removeItem('jwt')
      this.setState({ isLoggedIn: false, user:{}})
    }

    logIn(loginParams){
      
      Auth.login(loginParams)
        .then( user => {
          if (!user.error) {
            this.setState({
              loggedIn: true, 
              user: user
            })
            localStorage.setItem('jwt', user.token )
          }
        })
    }


  render(){
console.log(this.state.loggedIn, this.state.user)
      return(
          <Router history={history}>
            <div>
              <Header />
              <NavBar logged={this.state.loggedIn} 
                      logout={this.logout} />
              <Route exact path='/' render={()=>{
              return this.state.loggedIn ? <Home drivers={this.state.drivers} 
                                                 history={history} 
                                                 user={this.state.user} />: 
              <Redirect to="/login"/>
              
            }} />
    <Route path='/login' render={() =>{
              return this.state.loggedIn ? <Redirect to="/"/> : 
              <div>
                <Login onSubmit={this.logIn.bind(this)} />
                <DriversList drivers={this.state.drivers} />
              </div>}
            }/>
              <Routes />
              
            </div>
          </Router>
      )
  }
}

export default App;
