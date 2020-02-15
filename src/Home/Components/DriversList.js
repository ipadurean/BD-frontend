import React from 'react';
import Driver from './Driver';
import '../styles/Driver.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


const DriversList = (props) => {

  const { driversAll, driversAvailable } = props;
  let drivers = driversAvailable || driversAll
 
  return (
    <div className="list">
      {drivers.map(driver => {
        return  <Link to={`/${driver.name}`} key={driver.id} style={{ 'textDecoration':"none" }}>
                      <Driver key={driver.id}  driver={driver}  /> 
                </Link>
        })
      }
    </div>
  );
}
  
function mapStateToProps(state){
  return {driversAll: state.drivers.drivers, driversAvailable: state.home.driversAvailable }
}

export default connect(mapStateToProps, null)(DriversList);