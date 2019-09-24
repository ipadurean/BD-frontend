import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Containers/Home";
import FlatRates from "./Containers/FlatRates";
import Register from "./Containers/Register";
import MainContainer from "./Containers/MainContainer";

export default function Routes() {
return (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Home} />
    <Route path="/flatrates" exact component={FlatRates} />
    <Route path="/register" exact component={Register} />
    <Route path="/drivers" exact component={MainContainer} />
  </Switch>
)};