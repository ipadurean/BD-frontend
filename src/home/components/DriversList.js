import React from 'react';
import Driver from './Driver';
import '../styles/Driver.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const DriversList = (props) => {

  const { driversAll, driversAvailable, loading } = props;
  let drivers = driversAvailable || driversAll
 
  return (
    <div className="list">
      {loading && <div className="loading">Loading...</div>}
      {drivers.map(driver => {
        return  <Link to={`/${driver.name}`} key={driver.id} style={{ 'textDecoration':"none" }}>
                  <Driver key={driver.id}  driver={driver}  /> 
                </Link>
      })
      }
    </div>
  );
}

DriversList.propTypes = {
  driversAll: PropTypes.array.isRequired,
  driversAvailable: PropTypes.array,
  loading: PropTypes.bool.isRequired
}
  
function mapStateToProps(state){
  return {
    driversAll: state.drivers.drivers,
    driversAvailable: state.home.driversAvailable,
    loading: state.drivers.loading}
}

export default connect(mapStateToProps, null)(DriversList);