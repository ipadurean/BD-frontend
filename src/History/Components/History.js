import React, { Component } from 'react';
import '../../Styles/History.css';
import Trip from './Trip';
import { Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

class History extends Component {
  constructor(){
    super()
    this.state = {
      trips: [],
      user: {},
      currentTime: new Date().getTime()
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
      return   <Trip review={!el.review} key={el.id} driver={this.props.drivers.filter(item => item.id === el.driver_id)[0]} trip={el} />
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
               <Navbar expand="lg">
                  <Link to="/">Home</Link>
               </Navbar>
            </div>
            <div className="user" >
                <h3>Hello <em>{this.state.user.username}</em>! This is the history of your rides:</h3>
           
                {!!this.getCurrentTrips().length && 
                  <div>
                    <h5>Current rides:</h5>
                      {this.getCurrentTrips()}
                  </div>}
                {!!this.getFutureTrips().length && 
                  <div>
                    <h5>Upcoming rides:</h5>
                      {this.getFutureTrips()}
                  </div>}
                {!!this.getPastTrips().length && 
                <div>
                    <h5>Past rides:</h5>
                      {this.getPastTrips()}
                </div>}
            </div>
        </div>
      );
  }
}

export default History;