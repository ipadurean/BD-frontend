import styled from 'styled-components';

export const Button1 = styled.button`
  border-radius: 3px;
  font-size: calc(8px + 0.5vw);
  font-weight: 600;
  width: calc(70px + 3vw);
  color: #484a49;
  height: calc(15px + 1vw);
  cursor: pointer;
  margin: 2px;
  border: none;
  background-color: #f0d98d;
  &:hover {
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
                0px 2px 2px 0px rgba(0,0,0,0.14), 
                0px 1px 5px 0px rgba(0,0,0,0.12);
  }
`

export const Button2 = styled.button`
  border-radius: 20px; 
  width: 300px;
  height: calc(12px + 1.6vw);
  background: #0f7c90;
  color: white; 
  font-size: calc(6px + 0.8vw);
  font-weight: 600;
  border: none;
  cursor: pointer;
  border: none;
  margin: 4px;
  padding: 3px;
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    cursor: not-allowed;
  }
  &:hover {
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
                0px 2px 2px 0px rgba(0,0,0,0.14), 
                0px 1px 5px 0px rgba(0,0,0,0.12);
    transform: translate(-0.2px, -0.1px);
    transition: transform 0.3s, box-shadow 0.3s;
  }
`

export const Button3 = styled.button`
  border-radius: 2px;
  font-size: calc(5px + 0.5vw);
  font-weight: 600;
  cursor: pointer;
  border: none;
  background:linear-gradient(0.3turn, #c5bc97, #eee5cb, #c7ac8b);
   &:hover {
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
                0px 2px 2px 0px rgba(0,0,0,0.14), 
                0px 1px 5px 0px rgba(0,0,0,0.12);
  }
`

export const Button4 = styled.div`
  float: right;
  cursor: pointer;
  font-weight: 600;
  font-size: calc(7px + 0.5vw);
  color: rgb(60, 120, 175);
  text-transform: uppercase;
  padding: 4px;
  &:hover {
    color: rgb(0, 86, 136);
  }
`

export const Button5 = styled.div`
  cursor: pointer;
  min-width: 200px;
  font-weight: 600;
  font-size: calc(10px + 0.5vw);
  color: #a1812a;
  text-transform: uppercase;
  padding: 15px;
  &:hover {
    color: rgb(0, 86, 136);
  }
`

export const ButtonBook1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 0.5vw);
  font-weight: 600;
  line-height: 30px;
  margin: 10px;
  height: calc(17px + 1vw);
  width: 28vw;
  max-width: 250px;
  border-radius: 20px;
  background-color: #f06b65;
  box-shadow: 1px 1px 1px 1px #757272;
  color: white;
`

export const ButtonBook2 = styled.button`
  border-radius: 20px;
  background-color: #f06b65;
  color: white;
  font-size: calc(10px + 0.5vw);
  font-weight: 600;
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
  width: ${ props => props.small ? '18px' : '24px'}
`

export const Close = styled.img`
  cursor: pointer;
  width: 30px;
  float: right;
  align-self: flex-end;
  margin: 8px;
  padding: 5px;
  border-radius: 15px;
  &:hover{
    background-color: #f5f9ff;
  }
`

export const Close1 = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  align-self: flex-end;
  margin: 5px;
  padding: 3px;
  border-radius: 15px;
  &:hover{
    background-color: #f5f9ff;
  }
`

export const Star = styled.img`
  display: inline-block;
  cursor: pointer;
  margin: 5px;
  width: 30px;
  height: 30px;
`