import React, { Component } from 'react';
import '../style.css';
import Booking from './Booking';
import ReviewsList from '../components/ReviewsList';
import { connect } from "react-redux";
import { fetchDriver } from '../ducks/operations';
import { openReviews } from '../ducks/actions';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import star from '../../utils/assets/star-solid.svg';
import { Title, Title2, Title3, Text } from '../../styles/StyledText';
import { StyledContainer, FlexRowWrap, FlexColumn2, Loading } from '../../styles/StyledContainers';
import { Button5 } from '../../styles/StyledButtons';



class DriverProfile extends Component {

  constructor(props) {
    super(props);
    this.driverRef = React.createRef();
  }
  
  componentDidMount() {
    this.props.getDriver(this.props.driverName)
    this.driverRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }  

  handleClick = () => {
    this.props.showReviews()
  }

  render(){
    const { driver, authorized, loading, reviewsOpen } = this.props
   
    return (
      <StyledContainer ref={this.driverRef}>
        <FlexRowWrap>
        {authorized && loading ? <Loading>Loading...</Loading> :
          authorized &&
            <FlexRowWrap className='driver-card'>
              <FlexColumn2 style={{ 'maxWidth': '180px' }}>
                <Title style={{ 'width': '100%' }}>{driver.name}</Title>
                <Title3>~ Chauffeur ~</Title3>
                  <img id="profile-photo" alt="img" src={driver.photo} />
                  <div style={{'display': 'inline-block'}}>
                    <em>Rating {driver.rating} </em>
                    <img className="star" alt="star" src={star} />
                  </div>
                <Button5 onClick={this.handleClick}><u>Driver reviews</u></Button5>
              </FlexColumn2>
                <FlexColumn2 style={{ 'maxWidth': '480px' }}>
                  <div id="driver-description">
                    <Text>{driver.description}</Text>
                  </div>
                  <Title2>Rate: ${driver.rate}/hour</Title2>
                </FlexColumn2>
                <div>
                  <div id="vehicle-model">{driver.car}</div>
                  <LazyLoadImage effect="blur" className="car-photo" alt="car" src={driver.car_photo} />
                </div>
            {reviewsOpen && <ReviewsList />}
          </FlexRowWrap>}
          <Booking driver={driver} />
        </FlexRowWrap>
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
    loading: state.booking.loading,
    reviewsOpen: state.booking.reviewsOpen
  }
}

function mapDispatchToProps(dispatch){
  return {
    getDriver: (name) => dispatch(fetchDriver(name)),
    showReviews: () => dispatch(openReviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverProfile);