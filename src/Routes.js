import React from "react";
import { Route, Switch } from "react-router-dom";
import App from './App'
import FlatRates from "./Containers/FlatRates";
import Register from "./Containers/Register";




export default function Routes() {

return (
  <Switch>
   
    <Route path="/" exact component={App} />
    <Route path="/flatrates" exact component={FlatRates} />
    <Route path="/register" exact component={Register} />
    
  </Switch>
)};