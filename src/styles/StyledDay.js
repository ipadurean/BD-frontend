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
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  height: calc(265px + 10vw);
  width: calc(150px + 6vw);
  padding: 0 calc(20px + 0.5vw);
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
  margin: 3px;
  box-shadow: ${ props => props.busy ? 'none' : '1px 1px 1px 1px rgb(182, 181, 181)'};
  background-color: ${ props => props.busy ? 'white' : props.selected ? '#a37f0a' : '#f0d98d'};
  border: ${ props => props.busy ? '1px solid silver' : 'none'};
  width:  ${ props => props.quarter ? 'calc(15px + 1vw)' : 'calc(30px + 2vw)'};
  min-height: calc(14px + 0.5vw);
  border-radius: 5px;
  cursor: ${ props => props.busy ? 'default' : 'pointer'};
  &:hover {
    background-color: ${ props => props.busy ? 'white' : props.selected ? '#a37f0a' : '#f7ecc8'};
  }
`

export const HourText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 0.3vw);
  width: calc(35px + 2vw);
  color: ${ props => props.selected ? 'white' : props.busy ? 'silver' : '#2a4152'};
  &:hover {
    color: '#f7ecc8';
  }
`

export const ScrollArrow = styled.img`
  width: calc(45px + 2vw);
  cursor: pointer;
`
