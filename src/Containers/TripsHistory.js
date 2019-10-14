import React, { Component } from 'react';

class TripsHistory extends Component {
  constructor(){
    super()
    this.state={
      trips:[]
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/trips")
    .then(res => res.json())
    .then(data => {
      return this.setState({
        trips: data
      })
    })
  }

  render(){
    console.log(this.state.trips)
    return(

      this.state.trips.map(el => {
       return <div>
          <h3>{el.price}</h3>
        </div>
      })
    )
  }
}

export default TripsHistory;