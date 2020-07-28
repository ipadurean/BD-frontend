import React from 'react';
import '../style.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { QuarterBox } from '../../styles/StyledDay';
// import { FlexColumn } from '../../styles/StyledContainers';
// import { DayBar, HourBox, ScrollArrow } from '../../styles/StyledDay';

const Quarters = () => { 
  
  return (
    <>
      <QuarterBox className="quarter"> :15</QuarterBox>
      <QuarterBox className="quarter"> :30</QuarterBox>
      <QuarterBox className="quarter"> :45</QuarterBox>
    </>
    )
}

export default Quarters;