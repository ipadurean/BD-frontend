import styled from "styled-components";

export const DriverCard = styled.div`
  margin: 0.5vw 5vw;
  width: 80vw;
  max-width: 980px;
  min-width: 600px;
  border-radius: 5px;
    &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19); 
    transform: translate(-0.8px, -1px);
    transition: transform 0.8s, box-shadow 0.8s;
  }
`