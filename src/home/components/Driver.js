import React from 'react';
import '../styles/Driver.css';
import { connect } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

const Driver = (props) => {

  const { driver, home } = props

  return (
    <div className="driver-card">
      <div className="driver-brief">
        <div className="title">
          <h5><b>{driver.username}</b></h5><span>Rating {driver.rating}*</span>
          <p>Rate: ${driver.rate}/hour</p>
        </div>
        <LazyLoadImage id="img" alt="img" effect="opacity" src={driver.photo} />
        <div id="vehicle"><i> ~ {driver.car} ~ </i></div>
        {home.driversAvailable && <div id="total">Total: ${driver.rate * (home.end - home.start)}</div>}
      </div>
      <button id="select">Book ride with this chauffeur</button>
    </div> 
  )
}

Driver.propTypes = {
  home: PropTypes.shape({
    driversAvailable: PropTypes.array,
    start: PropTypes.number,
    end: PropTypes.number
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