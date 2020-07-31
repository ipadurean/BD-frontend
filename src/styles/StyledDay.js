import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  25% { opacity: 0; }
  100% { opacity: 1; }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(185px + 1vw);
  min-height: calc(15px + 0.5vw);
  padding: 1px;
  margin: 3px;
`

export const DayBar = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  display: flex;
  flex-direction: column;
  height: calc(260px + 10vw);
  width: calc(185px + 1vw);
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
  box-shadow: ${ props => props.busy ? 'none' : '1px 1px 1px 1px rgb(182, 181, 181)'};
  background-color: ${ props => props.busy ? 'white' : props.selected ? '#a69d7c' : '#f2eedf'};
  border: ${ props => props.busy ? '1px solid silver' : '2px solid white'};
  width: calc(40px + 2vw);
  min-height: calc(15px + 0.5vw);
  border-radius: 10px;
  cursor: ${ props => props.busy ? 'default' : 'pointer'};
  &:hover {
    background-color: ${ props => props.busy ? 'white' : '#9e8a60'};
  }
`

export const HourText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 0.3vw);
  width: calc(35px + 2vw);
  color: ${ props => props.selected ? 'white' : props.busy ? 'silver' : 'black'};
`


export const QuarterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${ props => props.busy ? 'none' : '1px 1px 1px 1px rgb(182, 181, 181)'};
  font-size: calc(10px + 0.3vw);
  background-color: ${ props => props.busy ? 'white' : props.selected ? '#a69d7c' : '#f2eedf'};
  color: ${ props => props.selected ? 'white' : props.busy ? 'silver' : 'black'};
  border: ${ props => props.busy ? '1px solid silver' : '1px solid white'};
  width: calc(22px + 1vw);
  min-height: calc(15px + 0.5vw);
  margin-left: 4px;
  border-radius: 10px;
  cursor: ${ props => props.busy ? 'default' : 'pointer'};
  &:hover {
    background-color: ${ props => props.busy ? 'white' : '#9e8a60'};
  }
`

export const ScrollArrow = styled.img`
  width: calc(45px + 2vw);
  cursor: pointer;
  align-self: flex-start;
`

export const Arrows = styled.img`
  cursor: pointer;
  height: calc(8px + 0.5vw);
  margin-right: -2px;
`