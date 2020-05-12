import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  25% { opacity: 0; }
  100% { opacity: 1; }
`

export const StyledContainer = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 1s;
  min-height: 100vh;
  min-width: 100vw;
  padding-top: calc(4vh + 2vw);
`

export const StyledContainer2 = styled.div`
  padding: 3% 1%;
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
  padding: 1%;
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
  padding: 1% 2%;
`

export const FlexRowFull = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  hight: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
`

export const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
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
  position: fixed;
  top: 30vh;
  left: 40vw;
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
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 
              0px 24px 38px 3px rgba(0,0,0,0.14), 
              0px 9px 46px 8px rgba(0,0,0,0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;            
`

export const FixedContainer1 = styled.div`
  position: fixed;
  top: 40vh;
  bottom: auto;
  left: calc(50vw - 150px);
  right:auto;
  border-radius: 5px;
  z-index: 2;
  background-image: linear-gradient(to bottom, #dae0e8 0%, #ebf0f0 100%);
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 
              0px 24px 38px 3px rgba(0,0,0,0.14), 
              0px 9px 46px 8px rgba(0,0,0,0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;            
`

export const FixedContainer2 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  padding: 3%;
  background-color: rgba(231, 235, 225, 0.5);
  border: 5px solid rgb(253, 253, 253);
  width: 80vw;
  height: calc(40vh + 20vw);
  top: 10vh;
  bottom: 10vh;
  left: 10vw;
  right: 10vw;
  border-radius: 5px;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 
              0px 24px 38px 3px rgba(0,0,0,0.14), 
              0px 9px 46px 8px rgba(0,0,0,0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;            
`





