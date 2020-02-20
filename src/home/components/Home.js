import React from "react";
import '../styles/Home.css';
import SearchAvailability from "../containers/SearchAvailability";
import DriversList from '../components/DriversList';




const Home = () => {

  return (
    <div className="home-container">
      <SearchAvailability /> 
      <DriversList /> 
    </div>  
  )
}


export default Home;