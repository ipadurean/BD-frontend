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

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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
  height: 100%;
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
  left: 35vw;
  right:auto;
  border-radius: 5px;
  z-index: 2;
`



