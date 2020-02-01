import React, { Component } from 'react';
import Driver from './Driver';
import '../styles/general.css';
import { connect } from "react-redux";


class DriversList extends Component {
render(){
 console.log(this.props)
      return (
        <div className="list">
          {this.props.drivers.drivers.map(driver => {
            return  <Driver key={driver.id} 
                        select={this.props.select} 
                        driver={driver} 
                        hoursTotal={this.props.hoursTotal} 
                        filter={this.props.filter}
                        timeToBook={this.props.timeToBook} /> 
                })
          }
        </div>
        );
      }
    }  
      function mapStateToProps(state){
        return state
      }

export default connect(mapStateToProps, null)(DriversList);