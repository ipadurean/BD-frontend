import styled from 'styled-components';

export const Button1 = styled.button`
  border-radius: 3px;
  font-size: calc(8px + 0.5vw);
  cursor: pointer;
  margin: 2px;
  background:linear-gradient(0.3turn, #c5bc97, #eee5cb, #c7ac8b);
  &:hover {
    box-shadow: 0.5px 0.5px 1px 1px #2b2b27;
  }
`

export const Button2 = styled.button`
  border-radius: 20px; 
  width: 300px;
  background: #5aafc4;
  color: white; 
  border: none;
  cursor: pointer;
  margin: 5px;
  padding: 3px;
  box-shadow: 1px 1px 1px 1px #757272;
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`

export const Button3 = styled.button`
  border-radius: 2px;
  font-size: calc(5px + 0.5vw);
  cursor: pointer;
  background:linear-gradient(0.3turn, #c5bc97, #eee5cb, #c7ac8b);
  &:hover {
    box-shadow: 0.5px 0.5px 1px 1px #757272;
  }
`

export const ButtonBook1 = styled.button`
  font-family: Roboto;
  font-size: calc(7px + 0.5vw);
  font-weight: 400;
  margin: 10px;
  height: calc(20px + 1vw);
  border-radius: 20px;
  background:linear-gradient(0.3turn, #c5bc97, #eee5cb, #c7ac8b);
  border: 1px solid rgb(255, 255, 255);
  box-shadow: 1px 1px 1px 1px #757272;
`