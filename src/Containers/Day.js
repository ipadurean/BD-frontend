import React, { Component } from 'react';
import './Day.css'

class Day extends Component {
  

 

  renderHours = () => {
  
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
    
    return (<div onClick={this.props.select} className="ruler">{this.renderHours()}</div>)
   }

}

export default Day;