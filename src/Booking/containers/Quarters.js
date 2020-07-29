import React from 'react';
import '../style.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { QuarterBox } from '../../styles/StyledDay';
// import { FlexColumn } from '../../styles/StyledContainers';
// import { DayBar, HourBox, ScrollArrow } from '../../styles/StyledDay';

const Quarters = (props) => { 
  
  return (
    <>
      <QuarterBox data-val={props.minutes + 15} className="quarter"> :15</QuarterBox>
      <QuarterBox data-val={props.minutes + 30} className="quarter"> :30</QuarterBox>
      <QuarterBox data-val={props.minutes + 45} className="quarter"> :45</QuarterBox>
    </>
    )
}

export default Quarters;