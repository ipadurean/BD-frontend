import React, { Component } from "react";
import FilterDrivers from "./FilterDrivers";
import DriversList from '../components/DriversList';
import { fetchDrivers } from '../../Main/ducks/operations';
import { connect } from 'react-redux';
import { StyledContainer } from '../../styles/StyledContainers';


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
      <StyledContainer>
        <FilterDrivers />
        <DriversList />
      </StyledContainer>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchDrivers: (q) => dispatch(fetchDrivers(q))
  }
}

export default connect(null, mapDispatchToProps)(Home);