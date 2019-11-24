import React, { Component } from 'react';
import './DayHome.css'

class DayHome extends Component {
  constructor(){
    super()
    this.state = {
    
    }
  }

 
   renderHours = () => {
    const bookedHours = this.filterTrips(this.state.trips);
    let hours = [];
    let i = 0;
    let a = parseInt(this.props.start);
    let b = parseInt(this.props.end);

    while (i < 24){
      if(i>a && bookedHours.includes(i)){
          for(let k=i; k<24; k++){
              hours.push(<div data-val={0} key={k} className="busy"></div>)
          } return hours;
          } else if(bookedHours.includes(i)){
            hours.push(<div data-val={0} key={i} className="busy"></div>)
          } else if (i === a) {
            hours.push(<div  style={{background: "#a2c0da"}} data-val={i} key={i} className="hr"></div>)
          }
          else if(i>=a && i<b) {
              hours[i] = <div  style={{background: "#a2c0da"}} data-val={i} key={i} className="hr"></div>
          } else {
            hours.push(<div data-val={i} key={i} className="hr"></div>)
          }
    i++;
    }
    return hours;
  }

 

   render(){
   
    return (<div onClick={this.props.select} className="ruler">{this.renderHours()}</div>)
   }

}

export default DayHome;