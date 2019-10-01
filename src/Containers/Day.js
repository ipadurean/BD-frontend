import React, { Component } from 'react';
import './Day.css'

class Day extends Component {
  //  constructor(){
  //    super()
  //    this.state = {
        
  //    }
  // }

  renderHours = () => {
    let hours = [];
    let i = 0;
    while (i <= 24){
      hours.push(<div key={i} value={i} className='hr'>
      <div key="15" value="15" className='qt'></div>
      <div key="30" value="30" className='hv'></div>
      <div key="45" value="45" className='qt'></div>
      </div>)
      i++;
    }
    return hours;
  }

 

   render(){
    return (<div onSelect={()=>this.props.select()} className="ruler">{this.renderHours()}</div>)
   }

}

export default Day;