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
      loggedUser: null,
      presentTrips: null,
      clicklogin: false,
      clickBook: false
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
      this.setState({
        selectedDriver: null,
        loggedUser: data.user});
      localStorage.setItem('jwt', data.jwt)})

}

  selectDriver = (driver) => {
    this.setState({ selectedDriver: driver })
  }

  bookRide = (time) => {
    fetch('http://localhost:3000/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        user_id:this.state.loggedUser.id, 
        driver_id: this.state.selectedDriver.id,
        time_booked: time,
        total: this.state.selectedDriver.rate * time
      })
    })
    .then(res => res.json())
    .then(this.setState({clickBook: true}))
    
  }

  logout = () => {
    localStorage.clear();
    this.setState({
      loggedUser: null
    })
  }
    clickLogin = () => {
      this.setState({
        selectedDriver: null,
        loggedUser: null,
        clicklogin: true
      })
  }
  
  
  
    render(){
      
      return(
       <div className="app-container">
          <NavBar click={this.clickLogin} logout={this.logout} logged={this.state.loggedUser} />
          {this.state.selectedDriver&&this.state.loggedUser ?
          <DriverProfile booked={this.state.clickBook} book={this.bookRide} driver={this.state.selectedDriver} /> :
           !this.state.loggedUser&&this.state.clicklogin ?
           <div>
            <Login login={this.login} /> 
            <DriversList select={this.selectDriver} drivers={this.state.drivers} />
            </div> :
           
            <DriversList select={this.selectDriver} drivers={this.state.drivers} /> 

          }
       </div>  
        )
    }
}

export default App;
