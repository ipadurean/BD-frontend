import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  25% { opacity: 0; }
  100% { opacity: 1; }
`

export const DayBar = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(265px + 10vw);
  width: calc(100px + 3vw);
  overflow-y: scroll;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const HourBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  box-shadow: ${ props => props.busy ? 'none' : '1px 1px 1px 1px rgb(182, 181, 181)'};
  background-color: ${ props => props.busy ? 'white' : props.selected ? '#a69d7c' : '#f2eedf'};
  border: ${ props => props.busy ? '1px solid silver' : props.quarter? 'none' : props.half ? 'none' : '1px solid white'};
  width:  ${ props => props.half ? 'calc(25px + 3vw)' : props.quarter ? 'calc(20px + 2vw)' : 'calc(30px + 4vw)'};
  min-height: ${ props => props.quarter ? 'calc(6px + 0.2vw)' : props.half ? 'calc(6px + 0.2vw)' : 'calc(14px + 0.5vw)'};
  border-radius: 10px;
  cursor: ${ props => props.busy ? 'default' : 'pointer'};
  &:hover {
    background-color: ${ props => props.busy ? 'white' : '#d6c598'};
  }
`

export const HourText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 0.3vw);
  width: calc(35px + 2vw);
  color: ${ props => props.selected ? 'white' : props.busy ? 'silver' : props.quarter ? '#3a3d42' : 'black'};
`

export const ScrollArrow = styled.img`
  width: calc(45px + 2vw);
  cursor: pointer;
`
