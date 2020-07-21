import styled from "styled-components";

export const DayBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 480px;
  margin: 10px;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const HourBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${ props => props.busy ? 'none' : '1px 1px 1px 1px rgb(182, 181, 181)'};
  font-size: 12px;
  background-color: ${ props => props.busy ? 'white' : props.selected ? '#a69d7c' : '#f2eedf'};
  color: ${ props => props.selected? 'white' : props.busy? 'silver' : 'black'};
  border: ${ props => props.busy ? '1px solid silver' : '1px solid white'};
  width: 60px;
  height: 26px;
  margin: 4px;
  border-radius: 10px;
  cursor: ${ props => props.busy ? 'default' : 'pointer'};
  &:hover {
    background-color: ${ props => props.busy ? 'white' : '#9e8a60'};
  }
`

export const ScrollArrow = styled.img`
  width: 40px;
  cursor: pointer;
`