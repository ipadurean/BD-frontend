import React, { Component } from 'react';
import "./MyAcc.css";
import Trip from '../Components/Trip';
import Auth from '../authAdapter';

class MyAcc extends Component {
  constructor(){
    super()
    this.state = {
      trips: [],
      user: {}
    }
  }

  componentWillMount(){
    if (localStorage.getItem('jwt')) {
    Auth.currentUser()
      .then(user => {
        if (!user.error) {
          this.setState({
            trips: user.trips.reverse(),
              user: {id: user.id, username: user.username}
               })
          }
        })
      }
  }
  
 render(){

      return (
        <div className="list">
          <div id="user" >
          <h3>Hello <em>{this.state.user.username}</em>! This is the history of your trips:</h3>
          </div>
         
          {this.state.trips.map(el => {
          return  <Trip key={el.id} driver={this.props.drivers.filter(item => item.id === el.driver_id)[0]} trip={el} />
          })
          }
        </div>
      );
  }
}

export default MyAcc;