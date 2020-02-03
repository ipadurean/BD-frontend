import React, { Component } from 'react';
import '../../Styles/Day.css';
import TimeZone from '../../Utils/timeZone';

class Day extends Component {
  constructor(){
    super()
    this.state = {
      trips: []
    }
  }

  componentDidMount() {
   fetch(`https://radiant-fjord-35660.herokuapp.com/drivers/${this.props.driver.id}`)
      .then(res => res.json())
      .then(data => this.setState({trips: data.trips}))
  }

  //Filter trips belonging to selected driver, based on selected date, and return his booked hours
  filterTrips = (items) => {
  
    let bookedHours = [];
    let date = new Date(this.props.day);
    let arr = items.filter(el => TimeZone.toCentralTime(el.start_time).slice(0, 15) === date.toString().slice(0, 15));
    let newArr = arr.map(el => [parseInt(TimeZone.toCentralTime(el.start_time).slice(16, 18)), parseInt(TimeZone.toCentralTime(el.end_time).slice(16, 18))||24])
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
      let i = 0;
      let a = parseInt(this.props.start);
      let b = parseInt(this.props.end);

      while (i < 24){
          if(i>a && bookedHours.includes(i)){
              for(let k=i; k<24; k++){
                  hours.push(<div data-val={0} key={k} className="busy">N/A</div>)
              } return hours;
          } else if(bookedHours.includes(i)){
            hours.push(<div data-val={0} key={i} className="busy">N/A</div>)
          } else if (i === a) {
          hours.push(<div data-val={i} key={i} className="hr" id="selected">{i%12||12}:00 {i<12?"am":"pm"}</div>)
          } else if(i>=a && i<b) {
          hours[i] = <div data-val={i} key={i} className="hr" id="selected">{i%12||12}:00 {i<12?"am":"pm"}</div>
          } else {
          hours.push(<div data-val={i} key={i} className="hr">{i%12||12}:00 {i<12?"am":"pm"}</div>)
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