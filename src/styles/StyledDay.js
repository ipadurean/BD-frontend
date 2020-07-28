import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  25% { opacity: 0; }
  100% { opacity: 1; }
`

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   width: auto;
`

export const DayBar = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  display: flex;
  flex-direction: column;
  height: calc(260px + 10vw);
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
  box-shadow: ${ props => props.busy ? 'none' : '1px 1px 1px 1px rgb(182, 181, 181)'};
  font-size: calc(6px + 0.5vw);
  background-color: ${ props => props.busy ? 'white' : props.selected ? '#a69d7c' : '#f2eedf'};
  color: ${ props => props.selected? 'white' : props.busy? 'silver' : 'black'};
  border: ${ props => props.busy ? '1px solid silver' : '1px solid white'};
  width: calc(30px + 3vw);
  min-height: calc(10px + 1vw);
  margin: calc(1px + 0.2vw);
  border-radius: 10px;
  cursor: ${ props => props.busy ? 'default' : 'pointer'};
  &:hover {
    background-color: ${ props => props.busy ? 'white' : '#9e8a60'};
  }
`
export const QuarterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${ props => props.busy ? 'none' : '1px 1px 1px 1px rgb(182, 181, 181)'};
  font-size: calc(6px + 0.5vw);
  background-color: ${ props => props.busy ? 'white' : props.selected ? '#a69d7c' : '#f2eedf'};
  color: ${ props => props.selected ? 'white' : props.busy ? 'silver' : 'black'};
  border: ${ props => props.busy ? '1px solid silver' : '1px solid white'};
  width: calc(15px + 1.5vw);
  min-height: calc(10px + 1vw);
  margin: calc(1px + 0.2vw);
  border-radius: 10px;
  cursor: ${ props => props.busy ? 'default' : 'pointer'};
  &:hover {
    background-color: ${ props => props.busy ? 'white' : '#9e8a60'};
  }
`

export const ScrollArrow = styled.img`
  width: calc(20px + 2vw);
  cursor: pointer;
`