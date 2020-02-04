import React from 'react';
import Driver from './Driver';
import '../../Styles/general.css';
import { connect } from "react-redux";


const DriversList = (state) => {

    const drivers = state.filter || state.drivers.drivers
 
      return (
        <div className="list">
          {drivers.map(driver => {
            return  <Driver key={driver.id} 
                            driver={driver}  /> 
                })
          }
        </div>
        );
}
  
function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, null)(DriversList);