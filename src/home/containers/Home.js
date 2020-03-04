import React, { Component } from "react";
import '../styles/Home.css';
import SearchAvailability from "./SearchAvailability";
import DriversList from '../components/DriversList';
import { fetchDrivers } from '../../app/ducks/operations';
import { connect } from 'react-redux';


class Home extends Component {

  componentDidMount() {
    const { query, fetchDrivers } = this.props;
    fetchDrivers(query)
  }

  componentDidUpdate(prevProps) {
    const { query, fetchDrivers } = this.props;
    if (JSON.stringify(prevProps.query) !== JSON.stringify(query)) {
      fetchDrivers(query)
    }
  }

  
 
 
  render(){
    return (
      <div className="home-container">
        <SearchAvailability />
        <DriversList />
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchDrivers: (q) => dispatch(fetchDrivers(q))
  }
}

export default connect(null, mapDispatchToProps)(Home);