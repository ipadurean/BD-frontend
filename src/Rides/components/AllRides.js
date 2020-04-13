import React from 'react';
import Trip from '../containers/Trip';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { StyledContainer, FlexColumn, Loading, FlexRowFull } from '../../styles/StyledContainers';
import { TitlePrimary } from '../../styles/StyledTitles';
import SideBar from './SideBar';


const AllRides = (props) => {

  const { user, loading, authorized } = props

  const getPastTrips = () => {
    let currentTime = new Date().getTime()
    let pastTrips = user.trips.filter(el => new Date(el.end_time).getTime() < currentTime)
    return pastTrips.map(el => {
      return  <Trip review={!el.review} key={el.id} trip={el} />
    })
  }

  const getCurrentTrips = () => {
    let currentTime = new Date().getTime()
    let currentTrips = user.trips.filter(el => new Date(el.end_time).getTime() > currentTime && new Date(el.start_time).getTime() < currentTime)
    return currentTrips.map(el => {
      return  <Trip key={el.id} trip={el} />
    })
  }

  const getFutureTrips = () => {
    let currentTime = new Date().getTime()
    let futureTrips = user.trips.filter(el => new Date(el.start_time).getTime() > currentTime).sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime())
    return futureTrips.map(el => {
      return  <Trip  cancel={true} key={el.id} trip={el} />
    })
  }

  return (
    <StyledContainer>
      {authorized ?
        <FlexRowFull>
          <SideBar />
          <FlexColumn>
            <TitlePrimary>Hello <em>{user.username}</em>! This is a summary of your rides:</TitlePrimary>
            
              {getCurrentTrips()}
           
          
            
              {getFutureTrips()}
            
          
            
              {getPastTrips()}
            
          </FlexColumn>
        </FlexRowFull>  :
        loading && <Loading>Loading...</Loading>}
    </StyledContainer>
  );
}

AllRides.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  authorized: PropTypes.bool.isRequired
}

function mapStateToProps(state){
  return {
    user: state.auth.user,
    loading: state.auth.loading,
    authorized: state.auth.authorized,
  }
}

export default connect(mapStateToProps, null)(AllRides)