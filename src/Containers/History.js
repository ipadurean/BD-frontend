import React, { Component } from 'react';
import '../styles/History.css';
import Trip from './Trip';
import Auth from '../authAdapter';
import { Navbar } from "react-bootstrap";

class History extends Component {
  constructor(){
    super()
    this.state = {
      trips: [],
      user: {},
      currentTime: new Date().getTime()
    }
  }

  componentDidMount(){
    if (localStorage.getItem('jwt')) {
    Auth.currentUser()
      .then(user => {
        if (!user.error) {
          this.setState({
              trips: user.trips.reverse(),
              user: {id: user.id, username: user.username}
               })
          }
        })
      }
  }

  cancelRide = (tripId) => {
    fetch(`https://radiant-fjord-35660.herokuapp.com/trips/${tripId}`, {
      method: 'DELETE',
    })
    .then(
      this.setState(prevState => {
          return {
            trips: prevState.trips.filter(el => el.id !== tripId)
          }
      })
    );
  }

  getPastTrips = () => {
    let pastTrips = this.state.trips.filter(el => new Date(el.end_time).getTime() < this.state.currentTime)
    return pastTrips.map(el => {
      return   <Trip cancel={() => this.cancelRide(el.id)} key={el.id} driver={this.props.drivers.filter(item => item.id === el.driver_id)[0]} trip={el} />
    })
  }

  getCurrentTrips = () => {
     let currentTrips = this.state.trips.filter(el => new Date(el.end_time).getTime() > this.state.currentTime && new Date(el.start_time).getTime() < this.state.currentTime)
     return currentTrips.map(el => {
       return   <Trip key={el.id} driver={this.props.drivers.filter(item => item.id === el.driver_id)[0]} trip={el} />
     })
  }

  getFutureTrips = () => {
    let futureTrips = this.state.trips.filter(el => new Date(el.start_time).getTime() > this.state.currentTime)
    return futureTrips.map(el => {
      return   <Trip cancel={() => this.cancelRide(el.id)} key={el.id} driver={this.props.drivers.filter(item => item.id === el.driver_id)[0]} trip={el} />
     })
  }

 
  
 render(){

      return (
        <div className="trip-history">
           <div className="nav-container">
             <Navbar bg="light" expand="lg">
                 <Navbar.Brand href="/">Home</Navbar.Brand>
             </Navbar>
           </div>
            <div className="user" >
                <h3>Hello <em>{this.state.user.username}</em>! This is the history of your trips:</h3>
           
                {!!this.getCurrentTrips().length && 
                  <div>
                    <h5>Current trips:</h5>
                      {this.getCurrentTrips()}
                  </div>}
                {!!this.getFutureTrips().length && 
                  <div>
                    <h5>Upcoming trips:</h5>
                      {this.getFutureTrips()}
                  </div>}
                {!!this.getPastTrips().length && 
                <div>
                    <h5>Past trips:</h5>
                      {this.getPastTrips()}
                </div>}
            </div>
        </div>
      );
  }
}

export default History;