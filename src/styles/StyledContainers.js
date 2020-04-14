import styled from "styled-components";

export const StyledContainer = styled.div`
  min-height: 100vh;
  padding-top: calc(4vh + 2vw);
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  height: 100%;
`

export const FlexRowFull = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  height: calc(96vh - 2vw);
  overflow: hidden;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3%;
  height: 100%;
  overflow: scroll;
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

