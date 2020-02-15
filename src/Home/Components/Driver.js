import React from 'react';
import '../styles/Driver.css';
import { connect } from "react-redux";



const Driver = (props) => {
 const { driver, home } = props

 
    return (
        <div className="driver-card">
           
                <div className="driver-brief">
                    <div className="title">
                        <h5><b>{driver.username}</b></h5><span>Rating {driver.rating}*</span>
                        <p>Rate: ${driver.rate}/hour</p>
                    </div>
                    <img id="img" alt="img" src={driver.photo}/>
                    <div id="vehicle"><i> ~ {driver.car} ~ </i></div>
                    {home.driversAvailable && <div id="total">Total: ${driver.rate * (home.end - home.start)}</div>}
                </div>
                <button id="select">Book ride with this chauffeur</button>
           
        </div> 
    )
}

function mapStateToProps(state){
  return state
}


export default connect(mapStateToProps)(Driver);