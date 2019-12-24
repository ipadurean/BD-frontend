import React, { Component } from "react";
import '../styles/Home.css';
import DriverProfile from "../Components/DriverProfile";
import NavBar from './NavBar'
import SearchAvailability from "./SearchAvailability";



export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      selectedDriver: null,
      presentTrips: null,
      timeToBook:{}
    }
  }
  
 

  selectDriver = (driver, time) => {
    this.setState({ 
      selectedDriver: driver,
      timeToBook: time 
    })
  }

  back = () => {
    this.setState({ selectedDriver: null })
  }



  
  
  
    render(){

      return(
       <div className="home-container">
           <p>  Welcome <em>{this.props.user.username}</em> !</p>  
           <NavBar  logged={this.props.logged} 
                    logout={this.props.logout} 
                    sortByRate={this.props.sortByRate}
                    sortByRating={this.props.sortByRating} 
                    search={this.props.search} 
                    reset={this.props.reset}
                    change={this.props.change}
                    selected={this.state.selectedDriver} />
           {this.state.selectedDriver ?
           <DriverProfile  driver={this.state.selectedDriver} 
                           back={this.back}
                           timeToBook={this.state.timeToBook} /> :
           <SearchAvailability drivers={this.props.drivers}
                               select={this.selectDriver}
                               logged={this.props.logged} 
                               driver={this.state.selectedDriver} /> 
           }
       </div>  
        )
    }
}
