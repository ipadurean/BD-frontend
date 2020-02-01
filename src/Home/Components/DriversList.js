import React from 'react';
import Driver from './Driver';
import '../../styles/general.css';
import { connect } from "react-redux";


const DriversList = (state) => {

    const { drivers, select, hoursTotal, filter, timeToBook } = state
 
      return (
        <div className="list">
          {drivers.drivers.map(driver => {
            return  <Driver key={driver.id} 
                        select={select} 
                        driver={driver} 
                        hoursTotal={hoursTotal} 
                        filter={filter}
                        timeToBook={timeToBook} /> 
                })
          }
        </div>
        );
}
  
function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, null)(DriversList);