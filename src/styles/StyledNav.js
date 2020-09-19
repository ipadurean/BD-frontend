import styled from 'styled-components';

export const StyledNav = styled.div`
  background-image: linear-gradient(
    to bottom,
    #b0c1ccd7 0%,
    #d1dde8 50%,
    #c8d2dbab 90%
  );
  position: fixed;
  left: 0;
  right: 0;
  padding: 1vw;
  top: 0;
  z-index: 5;
  height: calc(6vh + 2vw);
`;

export const NavItem = styled.a`
  font-size: calc(10px + 0.7vw);
  font-weight: 700;
  text-decoration: none;
  color: gray !important;
  line-height: 32px;
  padding: 0 1vw;
  border-right: 3px solid white; 
  cursor: pointer;
  &:hover {
   color: silver !important;
   text-decoration: none;
  }
`

export const StyledWelcome = styled.div`
  display: flex;
  font-family: Lato;
  font-size: calc(10px + 0.5vw);
  color: #526482;
  margin: 0 1vw;
  padding: 3px 5px;
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