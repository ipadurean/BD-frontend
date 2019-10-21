import React from 'react';
import "./MyAcc.css";
import Trip from './Trip'

const MyAcc = (props) => {
  console.log(props.trips)
  return (
    <div className="list">
      
      {props.trips.map(el => {
      return  <Trip trip={el} />
      })
      }
    </div>
  );
}

export default MyAcc;