import React from 'react';
import Driver from './Driver';
import '../styles/style.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FlexRow2, FlexColumn, StyledContainer2, Loading } from '../../styles/StyledContainers';
import { Title } from '../../styles/StyledText';
import { Select1 } from '../../styles/StyledSelect';
import { sortDrivers } from '../ducks/actions';


const DriversList = (props) => {

  const { drivers, loading, sortType } = props;
  const sortedDrivers = sortType === "rating" ? drivers.sort((a, b) => b[sortType] - a[sortType]) : drivers.sort((a, b) => a[sortType] - b[sortType])
  
  const renderDrivers = () => sortedDrivers.map(driver => {
    return  <Link to={`/drivers/${driver.name}`}
                  key={driver.id}
                  style={{ 'textDecoration': "none" }}>
              <Driver key={driver.id} driver={driver} />
            </Link> })

  const sort = (e) => {
    props.sortBy(e.target.value)
  }
  
  return (
    <StyledContainer2>
      {loading && <Loading>Loading...</Loading>}
      <FlexRow2>
        <Title>* There are a total of <b>{drivers.length}</b> drivers available:</Title>
        <Select1 onChange={sort} type="text" style={{ 'width': '200px', 'marginLeft': '5vw' }}>
          <option>Sort drivers</option>
          <option value="rating">by Highest Rated</option>
          <option value="rate">by Lowest Hourly Rate</option>
        </Select1>
      </FlexRow2>
      <FlexColumn>
        {renderDrivers()}
      </FlexColumn>
    </StyledContainer2>
  );
}

DriversList.propTypes = {
  drivers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}
  
function mapStateToProps(state){
  return {
    drivers: state.drivers.drivers,
    loading: state.drivers.loading,
    sortType: state.home.sortType,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortBy: (type) => dispatch(sortDrivers(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversList);