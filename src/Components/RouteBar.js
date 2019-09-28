import React from "react";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components.css"

 const RouteBar = () => {

  return (
          <Nav>   
              <Nav.Link href="/">Home</Nav.Link>
          </Nav> 
  )
}

export default RouteBar;