import React from 'react';
import '../../Styles/Driver.css';
import { connect } from "react-redux";

import { timeToBook } from '../Ducks/actions';

const Driver = (props) => {
 const { driver } = props

 
    return (
        <div className="driver-card">
           
                <div className="driver-brief">
                    <div className="title">
                        <h5>{driver.username}</h5><span>Rating {driver.rating}*</span>
                        <p>Rate: ${driver.rate}/hour</p>
                    </div>
                    <img id="img" alt="img" src={driver.photo}/>
                    <div id="vehicle"><p> ~ {driver.car} ~ </p></div>
            {/* <div id="total">{filter && <p>Total: ${driver.rate * ((selectedTime.end || 24) - selectedTime.start)}</p>}</div> */}
                </div>
                <button id="select">Book ride with this chauffeur</button>
           
        </div> 
    )
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
    return {
      sendTimeToBook: (selectedDate, start, end) => dispatch(timeToBook(selectedDate, start, end))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Driver);