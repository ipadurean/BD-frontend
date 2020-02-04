import React, { Component } from "react";
import '../../Styles/Home.css';
import NavBar from '../../App/Components/NavBar'
import SearchAvailability from "./SearchAvailability";
import { connect } from "react-redux";




class Home extends Component {

  



  render(){
 
      return(
       <div className="home-container">
           <p>  Welcome <em>{this.props.auth.user.username}</em> !</p>  
           <NavBar  />
           <SearchAvailability drivers={this.props.drivers.drivers} /> 
           }
       </div>  
        )
    }
}


function mapStateToProps(state){
  return state
}


export default connect(mapStateToProps, null)(Home)