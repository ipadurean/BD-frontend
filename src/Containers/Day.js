import React, { Component } from 'react';
import './Day.css'

class Day extends Component {
   constructor(){
     super()
     this.state ={
       start: null,
       end: null
     }
   }

   handleClick = (event) => {
    !this.state.start?
          this.setState({start: event.target.dataset.val}) :
     !this.state.end&&this.state.start?
          this.setState({end: event.target.dataset.val }) :
     this.setState({start: event.target.dataset.val, end:null})
}

  renderHours = () => {
  
    let hours = [];
    let i = 1;
    while (i < 25){
      
      parseInt(this.state.start) === i ?
      hours.push(<div  style={{background: "brown"}} data-val={i} key={i} className="hr"></div>):
      parseInt(this.state.end) === i ?
      hours.map(el => {
        for (let k = parseInt(this.state.start); k< parseInt(this.state.end); k++){
             hours[k] = <div  style={{background: "brown"}} data-val={k} key={k} className="hr"></div>
            }; return hours
        }):
      hours.push(<div  data-val={i} key={i} className="hr"></div>)
      i++;
    }
    return hours;
  }

 

   render(){
    console.log(this.state.start, this.state.end)
    return (<div onClick={this.handleClick} className="ruler">{this.renderHours()}</div>)
   }

}

export default Day;