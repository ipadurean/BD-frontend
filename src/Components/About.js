import React from 'react';
import { Navbar } from "react-bootstrap";



const About = () => {
 
      return (
        <div>
          <div className="nav-container">
             <Navbar bg="light" expand="lg">
                 <Navbar.Brand href="/">Home</Navbar.Brand>
            </Navbar>
            </div>
            <div  className="about">
              <p><b>BookAChauffeur</b> is an app that connects chauffeurs with customers. 
                  It allows users to select a private chauffeur from a list based on different features from his/her individual profile. 
                  Then they can click on a date, select hours needed and ultimately booking a ride. 
              </p>
              <p>* <em>The present version is for demonstration purposes only. All drivers profiles are fake and booking a ride will not incur any charges</em></p>
          </div>
         </div>
      )
}
  







export default About;