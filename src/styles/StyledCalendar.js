import styled from "styled-components";

export const CalendarBox = styled.div`
  margin: 100px 1vw;
  display: block !important;
  min-width: 300px !important;
  max-width: 300px !important;
  min-height: 300px !important;
  max-height: 300px !important;
  padding: 3%;
  box-sizing: border-box;
`

export const CalendarBody = styled.div`
  padding: 5px;
  background-color:white;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0 0 10px 10px;
  border: 1px solid #d6d8dd;
`

export const CalendarHeader = styled.div`
  margin-top: 30px;
  align-items: center;
  display: flex;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 10px;
`

export const Label = styled.div`
  color: rgb(77, 77, 77);
  font-weight: bold;
  text-align: center;
  width: 100%;
`

export const DateOuter = styled.div`
  font-size: 0.9em;
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column; 
  flex: 0 0 14.28%;
  max-width: 14.28%;
  padding: 4px;
`

export const DateInner = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 30px;
  height:28px;
  align-items: center;
  justify-content: center;
  cursor: ${ props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${ props => props.selected ? 'white' : props.disabled ? 'silver' : 'black'};
  background-color: ${ props => props.today ? '#eff3fc' : props.selected ? '#6e7f8f' : 'white'}
`

export const WeekContainer = styled.div`
  padding: 5px;
  background-color: #6e7f8f;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px 10px 0 0;
  border: 1px solid #d6d8dd;
  & span {
    color: white;
    flex-direction: column;
    flex: 0 0 14.28%;
    font-size: 0.8em;
    font-weight: bold;
    max-width: 14.28%;
    padding: 7px 0px;
    text-align: center;
  }
`