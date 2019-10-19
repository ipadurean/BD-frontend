import React, { Component } from 'react';
import './Day.css'

class Day extends Component {
  constructor(){
    super()
    this.state = {
      trips: []
    }
  }

  componentDidMount() {
   
    fetch(`http://localhost:3000/drivers/${this.props.driver.id}`)
      .then(res => res.json())
      .then(data => this.setState({trips: data.trips}))
  }

  //Filter selected driver's trips based on selected date, and return his booked hours
  filterTrips = (items) => {
    let date = new Date();
    date.setTime(this.props.day);
    let arr = items.filter(el => new Date(el.start_time).toString().slice(0, 15) === date.toString().slice(0, 15));
    let bookedHours = arr.map(el => [new Date(el.start_time).getHours(), new Date(el.end_time).getHours()])
   return bookedHours;
    // let arr = items.filter(el => Math.floor(el.start_time/x) === Math.floor(date/x));
    // return arr.map(el => [new Date(el.start_time).getHours(), new Date(el.end_time).getHours()]);
    
  }

 

  renderHours = () => {
    // let bookedHours = this.filterTrips(this.state.trips);
    let hours = [];
    let i = 1;
    while (i < 25){
      
      parseInt(this.props.start) === i-1 ?
      hours.push(<div  style={{background: "#96B56C"}} data-val={i} key={i} className="hr"></div>):
      parseInt(this.props.end) === i ?
      hours.map(el => {
        for (let k = parseInt(this.props.start); k< parseInt(this.props.end); k++){
             hours[k] = <div  style={{background: "#96B56C"}} data-val={k} key={k+100} className="hr"></div>
            }; return hours
        }):
      hours.push(<div  data-val={i} key={i} className="hr"></div>)
      i++;
    }
    return hours;
  }

 

   render(){
   console.log(this.filterTrips(this.state.trips)) 
    return (<div onClick={this.props.select} className="ruler">{this.renderHours()}</div>)
   }

}

export default Day;