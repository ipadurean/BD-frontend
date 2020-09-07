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
  border: 1px solid silver;
  border-radius: 7px;
  background-color: white;
  width: calc(80px + 3vw);
  height: calc(15px + 1vw);
  padding: 1px 2%;
  cursor: text;
  font-size: calc(10px + 0.5vw);
  outline: none;
`

export const SelectOptionBox = styled.div`
  position: absolute;
  display: flex;
  top: calc(48px + 9vh + 4.8vw);
  flex-direction: column;
  align-items: flex-start;
  height: 50vh;
  overflow: scroll;
  z-index: 2;
`

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid silver;
  border-radius: 4px;
  background-color: #edf1f7;
  width: calc(80px + 3vw);
  height: calc(10px + 1vw);
  padding: 1px 5%;
  cursor: pointer;
  font-size: calc(10px + 0.5vw);
`
