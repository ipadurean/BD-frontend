import React from 'react';
import Driver from './Driver';
import '../styles/Driver.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const DriversList = (props) => {

  const { drivers, loading, sortType } = props;

  const sortedDrivers = sortType === "rating" ? drivers.sort((a, b) => b[sortType] - a[sortType]) : drivers.sort((a, b) => a[sortType] - b[sortType])
  
  return (
    <div className="driver-list">
      <div id="note">* There are a total of <b>{drivers.length}</b> drivers available:</div>
      {loading && <div className="loading">Loading...</div>}
      {sortedDrivers.map(driver => {
        return  <Link to={`/drivers/${driver.name}`} key={driver.id} style={{ 'textDecoration':"none" }}>
                  <Driver key={driver.id}  driver={driver}  /> 
                </Link>
      })
      }
    </div>
  );
}

DriversList.propTypes = {
  drivers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}
  
function mapStateToProps(state){
  return {
    drivers: state.drivers.drivers,
    loading: state.drivers.loading,
    sortType: state.home.sortType
  }
}

export default connect(mapStateToProps, null)(DriversList);