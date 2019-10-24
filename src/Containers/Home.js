import React, { Component } from "react";
import "./Home.css";
import DriverProfile from "../Components/DriverProfile";
import DriversList from "../Components/DriversList";
import NavBar from './NavBar'



export default class Home extends Component {

    constructor() {
    super()
    this.state = {
      selectedDriver: null,
      presentTrips: null
    }
  }
  
 

  selectDriver = (driver) => {
    this.setState({ selectedDriver: driver })
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
          <DriverProfile user={this.props.user} 
                        driver={this.state.selectedDriver} 
                        back={this.back} /> :
          <DriversList drivers={this.props.drivers}
                       select={this.selectDriver}
                       logged={this.props.logged} /> 
          }
       </div>  
        )
    }
}
