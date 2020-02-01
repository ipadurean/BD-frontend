import React, { Component } from "react";
import Header from './Components/Header';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import History from './Containers/History';
import Home from './Containers/Home';
import Register from "./Containers/Register";
import Login from './Containers/Login'
import './styles/App.css';
import About from './Components/About'
import { createBrowserHistory } from 'history';
import { Navbar, Button } from "react-bootstrap";
import { connect } from "react-redux";


const history = createBrowserHistory()

class App extends Component {
 

  
      

  
  // sortByRate = () => {
  //   this.props.loggedIn?
  //   this.setprops(prevprops => {
  //     return {
  //       drivers: prevprops.drivers.sort(function(a, b){return a.rate-b.rate})
  //     }
  //   }) :
  //   history.push("/")
  // }

  // sortByRating = () => {
  //   this.props.loggedIn? 
  //   this.setprops(prevprops => {
  //     return {
  //       drivers: prevprops.drivers.sort(function(a, b){return b.rating-a.rating})
  //     }
  //   }):
  //   history.push("/")
  // }

 

  // searchDrivers = (keyword) => {
  //   keyword?
  //     this.setprops({
  //           filter: this.props.drivers.filter(el => (el.username + " " + el.description+ " " + el.car).toLowerCase().includes(keyword.toLowerCase()))
  //     }):
  //     alert("type something!")
  //  }

  //  resetSearch = () => {
  //    this.setprops({
  //      filter: false
  //    })
  //  }


  render(){
  //  console.log(this.props)
      return(
        <div>
        <Header />
        {/* {this.props.loading && <div className="loading">Loading...</div>} */}
          <Router history={history}>
            <Switch>
              <Route exact path='/' render={()=>{
                  
                    return    <Home  history={history}  /> 
                        // <Redirect to="/login"/>
              
            }} />
              <Route path='/login' render={() =>{
                    return this.props.auth.authorized ? 
                        <Redirect to="/"/> : 
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
                            <Login />
                            </div>}
              }/>
              <Route exact path="/history" render={() => {
                                                  return this.props.loggedIn && 
                                                         <History drivers={this.props.drivers} />}} />
              <Route path="/register" exact component={Register} />
              <Route path='/about' exact component={About} />
            </Switch>   
         </Router>
      </div>
      )
  }
}



function mapStateToProps(state){
  return state
}


export default connect(mapStateToProps, null)(App)
