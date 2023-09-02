import { useState } from 'react';
import logo from "../img/logo.png";
import * as S from './styled/NavMenu.Style';


export function NavMenu() {

  const [showMore, setShowMore] = useState(false);

  
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.NavImage src={logo} alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={handleMoreClick}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      <S.NavMenu>
      <S.MenuList showMore={showMore}>  
          <S.NavMenuItem>
            <S.NavMenuLink to="/">
              Главное
            </S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavMenuLink to="/favorites">
              Мой плейлист
            </S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
          <S.NavMenuLink to="/signin">
              Войти
            </S.NavMenuLink>
          </S.NavMenuItem>
        </S.MenuList>
      </S.NavMenu> 
    </S.MainNav>
  );
}
