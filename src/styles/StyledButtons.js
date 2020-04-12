import styled from 'styled-components';

export const ButtonMain = styled.button`
  border-radius: 3px;
  background:linear-gradient(0.3turn, #c5bc97, #eee5cb, #c7ac8b);
  &:hover {
    box-shadow: 0.5px 0.5px 1px 1px #757272;
  }
`

export const LgBlueBtn = styled.button`
  border-radius: 20px; 
  width: 300px;
  background: #0099ff;
  color: white; 
  border: none;
  margin: 5px;
  padding: 3px;
  box-shadow: 1px 1px 1px 1px #757272;
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`