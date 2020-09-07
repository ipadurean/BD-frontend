import styled from 'styled-components';

export const StyledNav = styled.div`
  background-color: #666b6a;
  box-shadow: 0 2px 5px -2px rgb(77, 75, 75);
  position: fixed;
  left: 0;
  right: 0;
  padding: 1vw;
  top: 0;
  z-index: 5;
  height: calc(4vh + 2vw);
`

export const NavItem = styled.a`
  font-size: calc(10px + 0.7vw);
  font-weight: 700;
  text-decoration: none;
  color: white !important;
  line-height: 32px;
  padding: 0 1vw;
  border-right: 3px solid #e1e3e2; 
  cursor: pointer;
  &:hover {
   color: silver !important;
   text-decoration: none;
  }
`

export const StyledWelcome = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: Lato;
  font-size: calc(10px + 0.5vw);
  color: #526482;
  margin: 0 1vw;
  background-color: white;
  padding: 3px 5px;
  border-radius: 15px;
`

export const SideItem = styled.a`
  font-size: calc(10px + 0.7vw);
  font-weight: 700;
  color: #1b1b61;
  line-height: 32px;
  padding: 0 2vw;
  border-bottom: 1px solid white; 
  cursor: pointer;
  margin: 1px;
  width: 15vw;
  min-width: 125px;
  &:hover {
   background-color: silver;
   text-decoration: none;
   border-radius: 3px;
  }
`