import React, { Component } from 'react';
import "./FlatRates.css"

class FlatRates extends Component {
  constructor(){
    super()
    this.state = {
       data: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/flat_rates')
    .then(res => res.json())
    .then(items => this.setState({data: items}))
    .catch(function(error) {
      console.log('Looks like there was a problem: \n', error)
    });
  }
  

  render(){
    
    return(
      <div className="flat">
        <ul>
        {this.state.data.map((el, index) => {
        return <li key={index}>{el.route}<span>  (average duration - </span>{el.duration*60}min) </li> })}
        </ul>
     </div>
    )
  }
}

export default FlatRates;