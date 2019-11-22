import React, { Component } from "react";
import DriversList from './Components/DriversList';
import Header from './Components/Header';
import { Router, Route, Redirect } from 'react-router-dom';
import MyAcct from './Containers/MyAcct';
import Login from './Containers/Login';
import Home from './Containers/Home';
import Register from "./Containers/Register";
import "./App.css";
import Auth from './authAdapter';
import About from './Components/About'
import { createBrowserHistory } from 'history';
import { Navbar, Button } from "react-bootstrap";

const history = createBrowserHistory()

class App extends Component {
  constructor() {
    super()
    this.state = {
      drivers: [],
      filter: false,
      loggedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      Auth.currentUser()
        .then(user => {
          if (!user.error) {
            this.setState({
              loggedIn: true,
              user: {id: user.id, username: user.username}
              })
            }
          })
        };

    fetch('https://radiant-fjord-35660.herokuapp.com/drivers')
      .then(res => res.json())
      .then(data => {
        return this.setState({ drivers: data })
      })
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error)
      });
   }

  
  
    logout(){
      localStorage.removeItem('jwt')
      this.setState({ isLoggedIn: false, user:{}})
    }

    logIn(loginParams){
       Auth.login(loginParams)
         .then( user => {
          if (!user.error) {
            localStorage.setItem('jwt', user.token);
            this.setState({
              loggedIn: true,
              user: {id: user.id, username: user.username}
            })
          }
        })
      }


  sortByRate = () => {
    this.state.loggedIn?
    this.setState(prevState => {
      return {
        drivers: prevState.drivers.sort(function(a, b){return a.rate-b.rate})
      }
    }) :
    history.push("/")
  }

  sortByRating = () => {
    this.state.loggedIn? 
    this.setState(prevState => {
      return {
        drivers: prevState.drivers.sort(function(a, b){return b.rating-a.rating})
      }
    }):
    history.push("/")
  }

 

  searchDrivers = (keyword) => {
    keyword?
   this.setState({
        filter: this.state.drivers.filter(el => (el.username + " " + el.description+ " " + el.car).toLowerCase().includes(keyword.toLowerCase()))
      }):
    alert("type something!")
   }

   resetSearch = () => {
     this.setState({
       filter: false
     })
   }


  render(){

      return(
          <Router history={history}>
            <div>
              <Header />
               
             
              <Route exact path='/' render={()=>{
                 return this.state.loggedIn? <Home  drivers={this.state.filter || this.state.drivers} 
                                                    history={history} 
                                                    user={this.state.user}
                                                    logged={this.state.loggedIn}
                                                    logout={this.logout} 
                                                    sortByRate={this.sortByRate}
                                                    sortByRating={this.sortByRating} 
                                                    search={this.searchDrivers} 
                                                    reset={this.resetSearch}
                                                    change={this.handleChange} /> : 
              <Redirect to="/login"/>
              
            }} />
              <Route path='/login' render={() =>{
                        return this.state.loggedIn ? <Redirect to="/"/> : 
                        <div className="app">
                          <Navbar>
                            <div>
                              <span className="bttn">
                                <Button href="/login" variant="outline-success">Login</Button>
                                </span>
                              <span className="bttn">
                                <Button href="register" variant="outline-success">Sign up</Button>
                                </span>
                            </div>
                          </Navbar>  
                          <Login onSubmit={this.logIn.bind(this)} />
                          <DriversList drivers={this.state.drivers}
                                      logged={this.state.loggedIn} />
                                      
                        </div>}
                      }/>
              <Route exact path="/account" render={() => {
                                                  return this.state.loggedIn && 
                                                         <MyAcct drivers={this.state.drivers} />}} />
              <Route path="/register" exact component={Register} />
              <Route path='/about' exact component={About} />
              
            </div>
          </Router>
      )
  }
}

export default App;
