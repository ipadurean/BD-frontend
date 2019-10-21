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

  //Filter trips belonging to selected driver, based on selected date, and return his booked hours
  filterTrips = (items) => {
    let bookedHours = [];
    let date = new Date();
    date.setTime(this.props.day);
    let arr = items.filter(el => new Date(el.start_time).toString().slice(0, 15) === date.toString().slice(0, 15));
    let newArr = arr.map(el => [new Date(el.start_time).getHours(), new Date(el.end_time).getHours()])
        for(let i=0; i<newArr.length; i++){
            for(let k=newArr[i][0]; k<newArr[i][1]; k++){
              bookedHours.push(k)
            }
        }
        return bookedHours.sort((a,b) => a-b);
  }

 

  renderHours = () => {
    const bookedHours = this.filterTrips(this.state.trips);
    let hours = [];
    let i = 1;
    let a = parseInt(this.props.start);
    let b = parseInt(this.props.end);

    while (i < 25){
      if(i>a+1 && bookedHours.includes(i)){
          for(let k=i; k<25; k++){
              hours.push(<div data-val={0} key={k} className="busy"></div>)
          } return hours;
          } else if(bookedHours.includes(i)){
            hours.push(<div data-val={0} key={i} className="busy"></div>)
          } else if (i === a+1) {
            hours.push(<div  style={{background: "#96B56C"}} data-val={i} key={i} className="hr"></div>)
          }
          else if(i>a+1 && i<=b) {
              hours[i] = <div  style={{background: "#96B56C"}} data-val={i} key={i} className="hr"></div>
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

export default Day;