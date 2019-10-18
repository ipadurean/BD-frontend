import React, { Component } from 'react';


class Invoice extends Component {
   
  
    displayDate(time) {
      debugger;
      let date = new Date();
      date.setTime(time);
      return date.toString()
    }

   

  
    render(){
      return (
        <div className="invoice">
          <h3>Your ride with {this.props.driver.name} was booked!</h3>
         <p> Date: {this.displayDate(this.props.trip.start_time).slice(0, 16)}</p>
         <p>From: {this.displayDate(this.props.trip.start_time).slice(16,18)}:00 to:{this.displayDate(this.props.trip.end_time).slice(16,18)}:00 </p>
         <h5>The pick up address is: {this.props.trip.address}</h5>
         <p>Trip number: {this.props.trip.id + 1000}</p>
         <p>The ride was booked on: <em>{new Date(this.props.trip.created_at).toString()}</em></p>
        </div>
      )
    }
  

}





export default Invoice;