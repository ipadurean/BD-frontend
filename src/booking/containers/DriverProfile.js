import React, { Component } from 'react';
import '../style.css';
import BookingCalendar from './BookingCalendar';
import { connect } from "react-redux";
import { fetchDriver } from '../ducks/operations';
import ReviewCard from '../components/ReviewCard';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import star from '../../utils/assets/star-solid.svg';
import { Title, Title3, Text } from '../../styles/StyledText';
import { StyledContainer, FlexRow1, FlexRowWrap, FlexColumn, FlexColumn1, FlexColumn2 } from '../../styles/StyledContainers';

class DriverProfile extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 10);
    this.props.getDriver(this.props.driverName)
  }  

  render(){
    const { driver, authorized, loading } = this.props
   
    return (
      <StyledContainer>
        {authorized && loading ? <div>Loading...</div> :
          authorized &&
          <FlexRowWrap>
            <FlexRow1 style={{'width': '50vw', 'minHeight': '300px'}}>
              <FlexColumn1>
                <Title style={{ 'width': '100%' }}>{driver.name} <Title3>~ Chauffeur ~</Title3></Title>
                  <img id="profile-photo" alt="img" src={driver.photo} />
                  <div style={{'display': 'inline-block'}}>
                    <em>Rating {driver.rating} </em>
                    <img className="star" alt="star" src={star} />
                  </div>
                  <div id="hourly-rate">Rate: ${driver.rate}/hour</div>
              </FlexColumn1>
              <FlexColumn2 style={{ 'width': '70%' }}><Text>{driver.description}</Text></FlexColumn2>
            </FlexRow1>
            <FlexColumn>
              <div id="vehicle-model">{driver.car}</div>
              <LazyLoadImage effect="blur" className="car-photo" alt="car" src={driver.car_photo} />
            </FlexColumn>
            <FlexColumn2 style={{'maxHeight': '300px', 'backgroundColor': 'white'}}>
              <Title>Reviews:</Title>
              {driver.trips.map(trip => {
                return trip.review && <ReviewCard key={trip.id} review={trip.review} />
              })}
            </FlexColumn2>
            <BookingCalendar driver={driver} />
          </FlexRowWrap>}
      </StyledContainer>
    )
  }
}

DriverProfile.propTypes = {
  driver: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    rate: PropTypes.number,
    photo: PropTypes.string,
    car: PropTypes.string,
    username: PropTypes.string, 
    trips: PropTypes.array
  })
}

function mapStateToProps(state){
  return {
    driver: state.booking.driver,
    authorized: state.auth.authorized,
    loading: state.booking.loading
  }
}

function mapDispatchToProps(dispatch){
  return {
    getDriver: (name) => dispatch(fetchDriver(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverProfile);