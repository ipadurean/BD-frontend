import React from 'react';
import Driver from './Driver';
import IntroProfiles from './IntroProfiles';


const DriversList = (props) => {

 
      return (
        <div className="list">
          <h5>{props.drivers.length} drivers available</h5>
          {props.drivers.map(driver => {
            return  props.logged?
            <Driver key={driver.id} select={props.select} driver={driver} /> :
            <IntroProfiles key={driver.id} driver={driver}/>
            })
          }
        </div>
        );
      }
  

export default DriversList;