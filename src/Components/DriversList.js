import React, { Component } from 'react';
import Driver from './Driver';
import IntroProfiles from './IntroProfiles';
import SearchAvailability from '../Containers/SearchAvailability'

class DriversList extends Component {


  render(){
      return (
        <div className="list">
          < SearchAvailability />
          {this.props.drivers.map(driver => {
          return  this.props.logged?
          <Driver key={driver.id} select={this.props.select} driver={driver} /> :
          <IntroProfiles key={driver.id} driver={driver}/>
          })
          }
        </div>
        );
      }
  }

export default DriversList;