import { useState } from 'react';
import "./Nav.css";
import logo from "../img/logo.png";
import styled from 'styled-components';

const StyledMainNav = styled.nav`  
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;`

const StyledNavLogo = styled.div` 
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
  `
const StyledNavImage = styled.img` 
  width: 113.33px;
  height: 17px;
  color: #181818;
  `

const StyledBurgerLine = styled.span` 
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
  `
const StyledNavBurger = styled.div` 
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
const StyledNavMenuItem = styled.li` 
  padding: 5px 0;
  margin-bottom: 16px;
  `

const StyledNavMenuLink = styled.a` 
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  `
const StyledNavMenuShowMenu = styled.div`
display: block;
visibility: visible;
`
const StyledNavMenuList = styled.ul`
max-height: 0;
overflow: hidden;
transition: max-height 1s ease-in-out;
`
export function NavMenu() {

  const [showMore, setShowMore] = useState(false);

  
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <StyledMainNav>
      <StyledNavLogo>
        <StyledNavImage src={logo} alt="logo" />
      </StyledNavLogo>
      <StyledNavBurger onClick={handleMoreClick}>
        <StyledBurgerLine></StyledBurgerLine>
        <StyledBurgerLine></StyledBurgerLine>
        <StyledBurgerLine></StyledBurgerLine>
      </StyledNavBurger>
      <div className={`nav__menu menu${showMore ? " show" : ""}`}>
      <ul className={`menu__list${showMore ? " show" : ""}`}>  
          <StyledNavMenuItem>
            <StyledNavMenuLink href="#">
              Главное
            </StyledNavMenuLink>
          </StyledNavMenuItem>
          <StyledNavMenuItem>
            <StyledNavMenuLink href="#">
              Мой плейлист
            </StyledNavMenuLink>
          </StyledNavMenuItem>
          <StyledNavMenuItem>
            <StyledNavMenuLink href="../signin.html">
              Войти
            </StyledNavMenuLink>
          </StyledNavMenuItem>
        </ul>
      </div> 
    </StyledMainNav>
  );
}
