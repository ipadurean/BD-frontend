import styled from 'styled-components';

export const Button1 = styled.button`
  border-radius: 3px;
  font-size: calc(8px + 0.5vw);
  cursor: pointer;
  background:linear-gradient(0.3turn, #c5bc97, #eee5cb, #c7ac8b);
  &:hover {
    box-shadow: 0.5px 0.5px 1px 1px #757272;
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