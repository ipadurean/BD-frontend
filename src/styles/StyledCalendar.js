import styled from "styled-components";

export const CalendarBox = styled.div`
  font-size: 16px;
  max-width: 320px;
  min-width: 320px;
  height: 480px;
  box-sizing: border-box;
  margin: 20px;
`

export const CalendarBoxSmall = styled.div`
  display: block !important;
  font-size: 14px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 1px silver;
  min-width: 240px;
  max-height: 240px;
  max-width: 240px;
  position: absolute;
  top: calc(48px + 9vh + 4.8vw);
  z-index: 1;
`

export const CalendarBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3%;
  background-color: white;
  min-height: ${ props => props.small ? '170px' : '220px'};
  border-radius: 0 0 10px 10px;
  border: ${ props => props.small ? 'none' : '1px solid #d6d8dd'};
`

export const CalendarHeader = styled.div`
  align-items: center;
  display: flex;
  padding: 2%;
  text-transform: uppercase;
  border-radius: 10px;
`

export const Label = styled.div`
  font-weight: bold;
  text-align: center;
  width: 100%;
`

export const DateOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 14.28%;
  max-width: 14.28%;
`

export const DateInner = styled.div`
  display: flex;
  border-radius: 10px;
  width: 80%;
  height: 80%;
  align-items: center;
  justify-content: center;
  cursor: ${ props => props.disabled ? 'not-allowed' : 'pointer'};
  color: ${ props => props.today ? '#3c83b5' : props.selected ? 'white' : props.disabled ? 'silver' : 'black'};
  background-color: ${ props => props.selected ? '#6e7f8f' : 'white'};
  &:hover {
    background-color: ${ props => props.disabled ? 'white' : '#d1e5e8'};
  }
`

export const WeekContainer = styled.div`
  padding: 1%;
  background-color: ${ props => props.small ? 'white' : '#6e7f8f'};
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px 10px 0 0;
  border:  ${ props => props.small ? 'none' : '1px solid #d6d8dd'};
  & span {
    color: ${ props => props.small ? '#3b6280' : 'white' };
    flex: 0 0 14.28%;
    font-size: ${ props => props.small ? '14px' : '16px'};
    font-weight: bold;
    max-width: 14.28%;
    text-align: center;
    justify-content: center;
  }
`