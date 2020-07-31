import React, { Component } from "react";
import FilterDrivers from "./FilterDrivers";
import DriversList from '../components/DriversList';
import { fetchDrivers } from '../../Main/ducks/operations';
import { connect } from 'react-redux';
import { StyledContainer, Loading } from '../../styles/StyledContainers';


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

  
  render() {
    const { loading } = this.props
    return (
      <StyledContainer>
        {loading ?
          <Loading>Loading...</Loading> :
          <>
            <FilterDrivers />
            <DriversList />
          </>
        }
      </StyledContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.drivers.loading,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    fetchDrivers: (q) => dispatch(fetchDrivers(q))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);