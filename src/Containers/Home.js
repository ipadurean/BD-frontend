import React, { Component } from "react";
import "./Home.css";
import DriverProfile from "../Components/DriverProfile";
import DriversList from "../Components/DriversList"



export default class Home extends Component {

    constructor() {
    super()
    this.state = {
      selectedDriver: null,
      presentTrips: null,
      keyword: null
    }
  }
  
 

    selectDriver = (driver) => {
    this.setState({ selectedDriver: driver })
  }

  back = () => {
    this.setState({ selectedDriver: null })
  }



  sortByRate = () => {
    this.setState(prevState => {
      return {
        drivers: prevState.drivers.sort(function(a, b){return a.rate-b.rate})
      }
    })
  }

  sortByRating = () => {
    this.setState(prevState => {
      return {
        drivers: prevState.drivers.sort(function(a, b){return b.rating-a.rating})
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value
    })
  }

  searchDrivers = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        drivers: prevState.drivers.filter(el => (el.username + " " + el.description+ " " + el.car).toLowerCase().includes(prevState.keyword.toLowerCase()))
      }
    })
  }
  
  
  
    render(){

      return(
       <div className="home-container">
       <p>  Welcome <em>{this.props.user.username}</em> !</p>  
        {this.state.selectedDriver ?
          <DriverProfile user={this.props.user} 
                        driver={this.state.selectedDriver} 
                        back={this.back} /> :
          <DriversList drivers={this.props.drivers}
                       select={this.selectDriver} /> 
          }
       </div>  
        )
    }
}
