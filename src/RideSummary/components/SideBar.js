import React from 'react';
import { FlexColumnFull } from '../../styles/StyledContainers';
import { SideItem } from '../../styles/StyledNav';

const SideBar = () => {
  return (
    <FlexColumnFull className="side-bar">
      <SideItem href='/rides/current'>Current rides</SideItem>
      <SideItem href='/rides/future'>Future rides</SideItem>
      <SideItem href='/rides/past'>Past rides</SideItem>
    </FlexColumnFull>
  )
}

export default SideBar;