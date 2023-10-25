import { useContext, useState } from "react";
import logo from "../../img/logo.png";
import logoWhite from "../../img/logoWhite.png";
import * as S from "./NavMenu.Style";
import { Link, useNavigate } from "react-router-dom";
import clientStorage from "../../utils/client-storage";
import { useDispatch, useSelector } from "react-redux";
import { setPlaying } from "../../store/actions/trackActions";
import UserContext from "../UserContext";

export function NavMenu({setIsLogged}) {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.isPlaying);
  const navigate = useNavigate();
  const { whiteTheme, setWhiteTheme } = useContext(UserContext);
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
    <S.MainNav whiteTheme={whiteTheme}>
      <S.NavLogo>
        <Link to="/">
          <S.NavImage src={whiteTheme ? logoWhite : logo} alt="logo" />
        </Link>
      </S.NavLogo>
      <S.NavBurger onClick={handleMoreClick}>
        <S.BurgerLine whiteTheme={whiteTheme}></S.BurgerLine>
        <S.BurgerLine whiteTheme={whiteTheme}></S.BurgerLine>
        <S.BurgerLine whiteTheme={whiteTheme}></S.BurgerLine>
      </S.NavBurger>
      <S.NavMenu>
        <S.MenuList showMore={showMore}>
          <S.NavMenuItem>
            <S.NavMenuLink whiteTheme={whiteTheme} to="/">Главное</S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem>
            <S.NavMenuLink whiteTheme={whiteTheme} to="/favorites">Мой плейлист</S.NavMenuLink>
          </S.NavMenuItem>
          <S.NavMenuItem onClick={handleResetClick}>
            <S.NavMenuLink whiteTheme={whiteTheme} to="/">Выйти</S.NavMenuLink>
          </S.NavMenuItem>
        </S.MenuList>
      </S.NavMenu>
    </S.MainNav>
  );
}
