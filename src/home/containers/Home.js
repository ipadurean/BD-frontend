import React from "react";
import '../styles/Home.css';
import SearchAvailability from "./SearchAvailability";
import DriversList from '../components/DriversList';
import { fetchDrivers } from '../../app/ducks/operations';
import { connect } from 'react-redux';


const Home = (props) => {

  props.query && props.fetchDrivers(props.query)
  return (
    <div className="home-container">
      <SearchAvailability /> 
      <DriversList /> 
    </div>  
  )
}


function mapDispatchToProps(dispatch) {
  return {
    fetchDrivers: (q) => dispatch(fetchDrivers(q))
  }
}

export default connect(null, mapDispatchToProps)(Home);