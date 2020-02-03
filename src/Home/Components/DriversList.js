import React from 'react';
import Driver from './Driver';
import '../../Styles/general.css';
import { connect } from "react-redux";


const DriversList = (state) => {

    const { drivers } = state
 
      return (
        <div className="list">
          {drivers.drivers.map(driver => {
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