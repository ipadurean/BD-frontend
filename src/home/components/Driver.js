import React from 'react';
import '../styles/Driver.css';
import { connect } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import star from '../../utils/assets/star-solid.svg'

const Driver = (props) => {

  const { driver, home } = props

  return (
    <div className="driver-card">
      <div className="driver-brief">
        <div className="title">
          <div id="username">{driver.username}</div><span>Rating <b>{driver.rating}</b><img className="star" alt="star" src={star} /></span>
          <div>Rate: <b>${driver.rate}/hour</b></div>
        </div>
        <LazyLoadImage id="driver-img" alt="img" effect="opacity" src={driver.photo} />
        <div id="vehicle"><i> ~ {driver.car} ~ </i></div>
      </div>
      <div className="book-ride">
        {home.clickSearch && <div id="total">Total: ${driver.rate * (home.end - home.start)}</div>}
        <button id="select">Book ride with this chauffeur</button>
      </div>
    </div> 
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