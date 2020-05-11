import React from 'react';
import CurrentRides from './CurrentRides';
import FutureRides from './FutureRides';
import PastRides from './PastRides';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { FlexColumnFull, FlexColumn2, Loading, FlexRowFull, StyledContainer } from '../../styles/StyledContainers';
import { Title } from '../../styles/StyledText';
import SideBar from './SideBar';
import { Route, Switch } from 'react-router-dom';
import ReviewForm from '../containers/ReviewForm';
import RatingForm from '../containers/RatingForm';
import { DarkBackground } from '../../styles/GlobalStyle';


const AllRides = (props) => {

  const { user, loading, authorized, reviewOpen, ratingOpen } = props

  return (
    <StyledContainer>
      {reviewOpen && <ReviewForm />}
      {reviewOpen && <DarkBackground />}
      {ratingOpen && <RatingForm />}
      {ratingOpen && <DarkBackground />}
      {authorized ?
        <FlexRowFull className="background">
          <SideBar />
          <FlexColumn2 style={{'width': '77vw'}}>
            <Title>Hello <b>{user.username}</b>! This is a summary of your rides:</Title>
            <Switch>
              <>
                <Route path='/rides/current' component={CurrentRides} />
                <Route path='/rides/future' component={FutureRides} />
                <Route path='/rides/past' component={PastRides} />
              </>
            </Switch>
          </FlexColumn2>
        </FlexRowFull>  :
        loading &&
        <FlexColumnFull>
          <Loading>Loading...</Loading>
        </FlexColumnFull>}
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
    reviewOpen: state.rideSummary.reviewOpen,
    ratingOpen: state.rideSummary.ratingOpen
  }
}

export default connect(mapStateToProps, null)(AllRides)