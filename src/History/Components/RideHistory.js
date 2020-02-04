import React, { Component } from 'react';
import '../../Styles/History.css';
import Trip from './Trip';
import { connect } from "react-redux";


class RideHistory extends Component {



  getPastTrips = (tr, dr) => {
    let currentTime = new Date().getTime()
    let pastTrips = tr.filter(el => new Date(el.end_time).getTime() < currentTime)
    return pastTrips.map(el => {
      return   <Trip review={!el.review} key={el.id} driver={dr.filter(item => item.id === el.driver_id)[0]} trip={el} />
    })
  }

  getCurrentTrips = (tr, dr) => {
    let currentTime = new Date().getTime()
    let currentTrips = tr.filter(el => new Date(el.end_time).getTime() > currentTime && new Date(el.start_time).getTime() < currentTime)
    return currentTrips.map(el => {
      return   <Trip key={el.id} driver={dr.filter(item => item.id === el.driver_id)[0]} trip={el} />
    })
  }

  getFutureTrips = (tr, dr) => {
    let currentTime = new Date().getTime()
    let futureTrips = tr.filter(el => new Date(el.start_time).getTime() > currentTime)
    return futureTrips.map(el => {
      return   <Trip  cancel={true} key={el.id} driver={dr.filter(item => item.id === el.driver_id)[0]} trip={el} />
     })
  }

 
  
render(){
    const {user, drivers} = this.props

      return (
        <div className="trip-history">
            <div className="user" >
                <h3>Hello <em>{user.username}</em>! This is the history of your rides:</h3>
         
                
                  <div>
                    <h5>Current rides:</h5>
                      {this.getCurrentTrips(user.trips, drivers)}
                  </div>
              
                  <div>
                    <h5>Upcoming rides:</h5>
                      {this.getFutureTrips(user.trips, drivers)}
                  </div>
              
                <div>
                    <h5>Past rides:</h5>
                      {this.getPastTrips(user.trips, drivers)}
                </div>
            </div>
        </div>
      );
  }
}


function mapStateToProps(state){
  return {user: state.auth.user, drivers: state.drivers.drivers}
}




export default connect(mapStateToProps, null)(RideHistory)