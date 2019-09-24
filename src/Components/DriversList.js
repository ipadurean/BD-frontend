import React from 'react';
import Driver from './Driver'
const DriversList = (props) => {
  return (
    <div className="list">
      {props.drivers.map(driver => 
      <Driver key={driver.id} select={props.select} driver={driver} />
        )
      }
        
      
    </div>
  );
}

export default DriversList;