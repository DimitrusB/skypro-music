import { useState } from "react";
import logo from "../../img/logo.png";
import * as S from "./NavMenu.Style";
import { Link, useNavigate } from "react-router-dom";
import clientStorage from "../../utils/client-storage";
import { useDispatch, useSelector } from "react-redux";
import { setPlaying } from "../../store/actions/trackActions";

export function NavMenu({setIsLogged}) {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.isPlaying);
  const navigate = useNavigate();

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  const handleResetClick = () => {
    if(isPlaying) {
      dispatch(setPlaying(false));
    }
    clientStorage.clearUserInfo();
    setIsLogged(null);
    navigate('/signin');
  };

  return (
    <S.MainNav>
      <S.NavLogo>
        <Link to="/">
          <S.NavImage src={logo} alt="logo" />
        </Link>
      </S.NavLogo>
      <S.NavBurger onClick={handleMoreClick}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      <S.NavMenu>
        <S.MenuList showMore={showMore}>
          <S.NavMenuItem>
            <S.NavMenuLink to="/">Главное</S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavMenuLink to="/favorites">Мой плейлист</S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem onClick={handleResetClick}>
            <S.NavMenuLink to="/">Выйти</S.NavMenuLink>
          </S.NavMenuItem>
        </S.MenuList>
      </S.NavMenu>
    </S.MainNav>
  );
}
