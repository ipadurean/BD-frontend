import React, { Component } from "react";
import Login from './Containers/Login';
import DriversList from './Components/DriversList';
import DriverProfile from "./Components/DriverProfile";
import NavBar from './Components/NavBar'
import "./App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      drivers: [],
      selectedDriver: null,
      loggedIn: !!localStorage.getItem("jwt"),
      loggedUser: 1,
      presentTrips: null,
      clicklogin: false,
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

  login = (credentials) => {
   
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({user:
        credentials
      })
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('jwt', data.jwt)
        this.setState({
        selectedDriver: null,
        loggedIn: data.jwt,
        loggedUser: data.user.id
       })
    })
   }

  selectDriver = (driver) => {
    this.setState({ selectedDriver: driver })
  }

 

  logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    this.setState({
      loggedUser: false,
      loggedIn: false
    })
  }

    clickLogin = () => {
      this.setState({
        selectedDriver: null,
        clicklogin: true
      })
  }
  
  
  
    render(){
console.log(this.state)
      return(
       <div className="app-container">
          <NavBar click={this.clickLogin} logout={this.logout} logged={this.state.loggedIn} />
          {this.state.selectedDriver&&this.state.loggedIn ?
          <DriverProfile user={this.state.loggedUser} driver={this.state.selectedDriver} /> :
          !this.state.loggedIn&&this.state.clicklogin ?
          <div>
          <Login login={this.login} /> 
          <DriversList select={this.selectDriver} drivers={this.state.drivers} /> 
          </div>:
          this.state.loggedIn?
          <DriversList select={this.selectDriver} drivers={this.state.drivers} />:
          <DriversList select={this.selectDriver} drivers={this.state.drivers} />

          }
       </div>  
        )
    }
}

export default App;
