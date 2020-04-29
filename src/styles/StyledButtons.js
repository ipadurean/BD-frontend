import styled from 'styled-components';

export const Button1 = styled.button`
  border-radius: 3px;
  font-size: calc(8px + 0.5vw);
  cursor: pointer;
  margin: 2px;
  background:linear-gradient(0.3turn, #c5bc97, #eee5cb, #c7ac8b);
  &:hover {
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
                0px 2px 2px 0px rgba(0,0,0,0.14), 
                0px 1px 5px 0px rgba(0,0,0,0.12);
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
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
              0px 2px 2px 0px rgba(0,0,0,0.14), 
              0px 1px 5px 0px rgba(0,0,0,0.12);
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    cursor: not-allowed;
  }
`

export const Button3 = styled.button`
  border-radius: 2px;
  font-size: calc(5px + 0.5vw);
  cursor: pointer;
  background:linear-gradient(0.3turn, #c5bc97, #eee5cb, #c7ac8b);
   &:hover {
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
                0px 2px 2px 0px rgba(0,0,0,0.14), 
                0px 1px 5px 0px rgba(0,0,0,0.12);
  }
`

export const ButtonBook1 = styled.button`
  font-family: Roboto;
  font-size: calc(7px + 0.5vw);
  font-weight: 600;
  margin: 10px;
  height: calc(20px + 1vw);
  border-radius: 20px;
  background-color: #96b5b1;
  border: 1px solid white;
  box-shadow: 1px 1px 1px 1px #757272;
  color: white;
  padding: 6px 10px;
`

export const ButtonBook2 = styled.button`
  border-radius: 20px;
  background:linear-gradient(0.3turn, #948b68, #d1c5a4, #a88b68);
  border: 1px solid rgb(202, 202, 218);
  box-shadow: 1px 1px 1px 1px #757272;
  width: 420px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 7px 4px -2px rgba(0,0,0,0.2), 
                0px 9px 7px 0px rgba(0,0,0,0.14), 
                0px 4px 12px 0px rgba(0,0,0,0.12);
  }
  &:disabled {
    box-shadow: none;
    cursor: default;
  }
`

export const ButtonArrow = styled.img`
  background: none;
  border: 0;
  outline: none;
  cursor: pointer;
  width: ${ props => props.small ? '15px' : '20px'}
`