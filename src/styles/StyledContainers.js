import styled from "styled-components";

export const StyledContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  padding-top: calc(4vh + 2vw);
`

export const StyledContainer2 = styled.div`
  padding: 2%;
  height: 100%;
`

export const StyledContainer3 = styled.div`
  margin: 3% 0;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 2%;
`

export const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: rgb(75, 93, 117);
  padding: 1%;
  height: 100%;
`

export const FlexRowWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
`

export const FlexRowFull = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  height: calc(96vh - 2vw);
  overflow: hidden;
  background-color: rgb(244, 247, 248);
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
`

export const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3%;
  height: 100%;
  overflow: scroll;
`

export const FlexColumnFull = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Loading = styled.div`
  text-align: center;
  font-size: calc(2vh + 2vw);
  color: gray;
`

export const FixedContainer = styled.div`
  position: fixed;
  top: 30vh;
  bottom: auto;
  left: 30vw;
  right:auto;
  border-radius: 5px;
  z-index: 2;
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 
              0px 24px 38px 3px rgba(0,0,0,0.14), 
              0px 9px 46px 8px rgba(0,0,0,0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;            
`

export const FixedContainer2 = styled.div`
  position: absolute;
  padding: 3%;
  background-color: rgb(231, 235, 225);
  border: 5px solid rgb(253, 253, 253);
  top:100px;
  bottom:100px;
  left:100px;
  right:100px;
  border-radius: 5px;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 
              0px 24px 38px 3px rgba(0,0,0,0.14), 
              0px 9px 46px 8px rgba(0,0,0,0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;            
`



