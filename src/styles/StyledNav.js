import styled from 'styled-components';

export const StyledNav = styled.div`
  background-color: rgb(216, 230, 231);
  box-shadow: 0 2px 5px -2px rgb(77, 75, 75);
  position: fixed;
  left: 0;
  right: 0;
  padding: 1vw;
  top: 0;
  z-index: 1;
  height: calc(4vh + 2vw);
`

export const NavItem = styled.a`
  display: inline;
  font-size: calc(10px + 0.7vw);
  text-decoration: none;
  color: rgb(107, 107, 107) !important;
  line-height: 32px;
  padding: 0 1vw;
  border-right: 3px solid rgb(246, 246, 250); 
  &:hover {
   color: rgb(47, 52, 78) !important;
`

export const StyledWelcome = styled.div`
  display: inline;
  font-family: Lato;
  font-size: calc(10px + 0.5vw);
  color: blue;
  margin: 0 1vw;
  background-color: white;
  padding: 3px 10px;
  border-radius: 5px;
`