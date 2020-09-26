import React from 'react';
import Driver from './Driver';
import '../style.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FlexRow2, FlexColumn1, StyledContainer2 } from '../../styles/StyledContainers';
import { Title3 } from '../../styles/StyledText';
import { Select1 } from '../../styles/StyledSelect';
import { sortDrivers } from '../ducks/actions';


const DriversList = (props) => {

  const { drivers, sortType } = props;
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
      <FlexRow2>
        <Title3>* There are a total of <b>{drivers.length}</b> drivers available:</Title3>
        <Select1 onChange={sort} type="text" style={{ 'width': '200px', 'marginLeft': '5vw' }}>
          <option>Sort drivers</option>
          <option value="rating">by Highest Rated</option>
          <option value="rate">by Lowest Hourly Rate</option>
        </Select1>
      </FlexRow2>
      <FlexColumn1>
        {renderDrivers()}
      </FlexColumn1>
    </StyledContainer2>
  );
}

DriversList.propTypes = {
  drivers: PropTypes.array.isRequired,
}
  
function mapStateToProps(state){
  return {
    drivers: state.drivers.drivers,
    sortType: state.home.sortType,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortBy: (type) => dispatch(sortDrivers(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversList);