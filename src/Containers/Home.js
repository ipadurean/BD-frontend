import React, { Component } from "react";
import '../styles/Home.css';
import DriverProfile from "../Components/DriverProfile";
import NavBar from './NavBar'
import SearchAvailability from "./SearchAvailability";
import { connect } from "react-redux";
import { authorize } from '../Actions/authorize';
import { fetchDrivers }  from '../Actions/fetchDrivers';



class Home extends Component {

  constructor() {
    super()
    this.state = {
      selectedDriver: null,
      presentTrips: null,
      timeToBook:{}
    }
  }

  componentDidMount(){
     this.props.authorize()
     this.props.fetchDrivers()
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
  console.log(this.props)
      return(
       <div className="home-container">
           <p>  Welcome <em>{this.props.auth.user.username}</em> !</p>  
           <NavBar  
          
                    selected={this.state.selectedDriver} />
           {this.state.selectedDriver ?
           <DriverProfile  driver={this.state.selectedDriver} 
                           back={this.back}
                           timeToBook={this.state.timeToBook} /> :
           <SearchAvailability drivers={this.props.drivers.drivers}
                               select={this.selectDriver}
                               
                               driver={this.state.selectedDriver} /> 
           }
       </div>  
        )
    }
}


function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return { 
    authorize: () => dispatch(authorize()),
    fetchDrivers: () => dispatch(fetchDrivers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)