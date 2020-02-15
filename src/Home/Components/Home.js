import React, { Component } from "react";
import '../styles/Home.css';
import SearchAvailability from "./SearchAvailability";
import { connect } from "react-redux";




class Home extends Component {

  
    render(){
    
          return(
              <div className="home-container">
                  <p>  Welcome <em>{this.props.auth.user.username}</em> !</p>  
                  <SearchAvailability /> 
              </div>  
          )
    }
}


function mapStateToProps(state){
  return state
}


export default connect(mapStateToProps, null)(Home)