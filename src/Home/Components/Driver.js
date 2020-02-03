import React from 'react';
import '../../Styles/Driver.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Driver = (props) => {
 const { driver } = props


 
  return (
      <div className="driver-card">
          <Link to={`/${driver.name}`} className="driver-brief">
              <div className="title">
                  <h5>{driver.username}</h5><span>Rating {driver.rating}*</span>
                  <p>Rate: ${driver.rate}/hour</p>
              </div>
              <img id="img" alt="img" src={driver.photo}/>
              <div id="vehicle"><p> ~ {driver.car} ~ </p></div>
          {/* <div id="total">{filter && <p>Total: ${driver.rate * ((selectedTime.end || 24) - selectedTime.start)}</p>}</div> */}
          </Link>
          <button id="select">Book ride with this chauffeur</button>
      </div> 
  )
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, null)(Driver);