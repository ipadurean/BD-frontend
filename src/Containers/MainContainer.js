import React, { Component } from 'react';
import Login from './Login'
import DriversList from '../Components/DriversList';
import "./Main.css";
import DriverProfile from "../Components/DriverProfile"

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      drivers: [],
      selectedDriver: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/drivers')
      .then(res => res.json())
      .then(data => {
        return this.setState({ drivers: data })
      })
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error)
      });

  }

  selectDriver = (driver) => {
    this.setState({ selectedDriver: driver })
  }

  renderContent = () => {
    return this.state.selectedDriver ?
        <DriverProfile driver={this.state.selectedDriver} /> :
      <div>
        <Login />
        <DriversList select={this.selectDriver} drivers={this.state.drivers} />
      </div>
  }

  render() {

    return (
      <div className="main-container">
        {this.renderContent()}

      </div>

    );

  }
}

export default MainContainer;