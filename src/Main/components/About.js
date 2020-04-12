import React from 'react';
import { StyledContainer } from '../../styles/StyledContainers'

const About = () => {
 
  return (
    <StyledContainer>
      <p><b>Chauffeur </b> 
        is an app that connects private chauffeurs with customers looking for transportation in an upscale vehicle. 
        It allows users to sort, filter chauffeurs based on the different features from their individual profiles, such as availability, hourly rate or rating. 
        Upon selecting a chauffeur they can book a ride on his/her profile page by choosing date and hours needed, a pick-up address, and optionally a note with any extra instructions . 
      </p>
      <p>* <em>The present version is for demonstration purposes only. All driver profiles are fake and booking a ride will not incur any liability whatsoever</em></p>
    </StyledContainer>
  )
}
  
export default About;