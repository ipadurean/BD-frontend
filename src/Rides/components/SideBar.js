import React from 'react';
import PropTypes from 'prop-types';
import { FlexColumn } from '../../styles/StyledContainers';
import { SideItem } from '../../styles/StyledNav';

const SideBar = () => {
  return (
    <FlexColumn className="side-bar">
      <SideItem href='/rides/current'>Current rides</SideItem>
      <SideItem href='/rides/future'>Future rides</SideItem>
      <SideItem href='/rides/past'>Past rides</SideItem>
    </FlexColumn>
  )
}

export default SideBar;