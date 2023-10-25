import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainNav = styled.nav`  
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;

  ${props => props.whiteTheme && `
  background-color: #ffffff; 

`}
  `

export const NavLogo = styled.div` 
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
  `
export const NavImage = styled.img` 
  width: 113.33px;
  height: 17px;
  color: #181818;
  `

export const BurgerLine = styled.span` 
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
  `
export const NavBurger = styled.div` 
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;
  `
export const NavMenuItem = styled.li` 
  padding: 5px 0;
  margin-bottom: 16px;
  `

export const NavMenuLink = styled(NavLink)` 
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  &:hover {
    color: blue;
  }
  &:active {
    background-color: #d9d9d9;
  }
  ${props => props.whiteTheme && `
  color: #000;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

`}
  `
export const NavMenu = styled.div`
display: block;
visibility: visible;
`
export const MenuList = styled.ul`
max-height: 0;
overflow: hidden;
transition: max-height 1s ease-in-out;
  ${({ showMore }) => showMore &&
    `
    max-height: 100vh;
    `
  }
`