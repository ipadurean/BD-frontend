import React from "react";
import '../styles/Home.css';
import SearchAvailability from "../containers/SearchAvailability";
import { connect } from "react-redux";




const Home = (props) => {

  return (
    <div className="home-container">
      <p>  Welcome <em>{props.auth.user.username}</em> !</p>  
      <SearchAvailability /> 
    </div>  
 )
}


function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, null)(Home)