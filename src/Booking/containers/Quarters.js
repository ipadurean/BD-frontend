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
      <QuarterBox> :15</QuarterBox>
      <QuarterBox> :30</QuarterBox>
      <QuarterBox> :45</QuarterBox>
    </>
    )
}

export default Quarters;