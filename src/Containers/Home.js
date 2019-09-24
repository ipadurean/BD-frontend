import React, { Component } from "react";
import "./Home.css";

import MainContainer from "./MainContainer";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
         
          <MainContainer />
        </div>
      </div>
    );
  }
}