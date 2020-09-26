import styled from 'styled-components';

export const Select1 = styled.select`
  height: 30px;
  margin: 2px;
  font-size: calc(10px + 0.5vw);
  color: rgb(78, 77, 77);
  width: calc(50px + 5vw);
  outline: none;
  border: 1px solid silver;
  border-radius: 7px;
`

export const FakeSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border: 1px solid #e0e0e0;
  border-radius: 7px;
  background-color: white;
  width: calc(80px + 3vw);
  height: calc(15px + 1vw);
  padding: 1px 2%;
  cursor: text;
  font-size: calc(10px + 0.5vw);
  outline: none;
`

export const SelectOptionOuterBox = styled.div`
  position: absolute;
  top: calc(48px + 11vh + 4.8vw);
  max-height: 50vh;
  z-index: 2;
  overflow-y: scroll;
`

export const SelectOptionInnerBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
`

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid silver;
  border-radius: 4px;
  background-color: #edf7f7;
  width: calc(80px + 3vw);
  height: calc(10px + 1vw);
  padding: 1px;
  cursor: pointer;
  font-size: calc(10px + 0.5vw);
  box-shadow: 0px 7px 4px -2px rgba(0, 0, 0, 0.2),
    0px 9px 7px 0px rgba(0, 0, 0, 0.14), 0px 4px 12px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    color: #777a7a;
  }
`;

export const QuarterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid silver;
  border-radius: 4px;
  background-color: #edf7f7;
  width: calc(20px + 1vw);
  height: calc(10px + 1vw);
  padding: 1px 5%;
  cursor: pointer;
  font-size: calc(10px + 0.5vw);
  box-shadow: 0px 7px 4px -2px rgba(0, 0, 0, 0.2),
    0px 9px 7px 0px rgba(0, 0, 0, 0.14), 0px 4px 12px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    color: #777a7a;
  }
`;

export const Quarters = styled.span`
  position: absolute;
  margin-left: calc(140px + 6vw);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
