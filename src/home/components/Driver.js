import React from 'react';
import { connect } from "react-redux";
import '../styles/style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import star from '../../utils/assets/star-solid.svg';
import { FlexRow, FlexRow2, FlexColumn } from '../../styles/StyledContainers';
import { DriverCard } from '../../styles/StyledDriver';
import { Title2, Text1 } from '../../styles/StyledText';
import { ButtonBook1 } from '../../styles/StyledButtons';

const Driver = (props) => {

  const { driver, home } = props
  return (
    <DriverCard>
      <FlexRow style={{'max-height': '90px'}}>
        <FlexRow2>
          <FlexColumn style={{'width': '15vw'}}>
            <Title2>{driver.username}</Title2>
            <Text1>Rating <b>{driver.rating}</b><img className="star" alt="star" src={star} /></Text1>
            <Text1>Rate: <b>${driver.rate}/hour</b></Text1>
          </FlexColumn>
          <LazyLoadImage id="driver-img" alt="img" effect="opacity" src={driver.photo} />
          <div id="vehicle"><i> ~ {driver.car} ~ </i></div>
        </FlexRow2>
        <FlexRow2>
          {home.clickSearch && <div id="total">Total: ${driver.rate * (home.end - home.start)}</div>}
          <ButtonBook1>Book ride with this chauffeur</ButtonBook1>
        </FlexRow2>
      </FlexRow>
    </DriverCard>
  )
}

Driver.propTypes = {
  home: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
    clickSearch: PropTypes.bool
  }),
  driver: PropTypes.shape({
    rating: PropTypes.number,
    rate: PropTypes.number,
    photo: PropTypes.string,
    car: PropTypes.string,
    username: PropTypes.string
  })
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(Driver);