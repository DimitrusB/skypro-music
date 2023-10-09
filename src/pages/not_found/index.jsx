import { NavMenu } from "../../components/NavMenu/NavMenu";
import { AudioPlayer } from "../../components/player/Player";
import * as S from "./404.style";
import iconSprite from "../../img/icon/sprite.svg";
import smile from "../../img/crying.png";
import UserContext from "../../components/UserContext";
import { useContext } from "react";

export function NotFoundPage() {
  const { email } = useContext(UserContext);
  return (
    <header className="App-header">
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <S.MainCenterblockSearch>
              <S.MainSearchSvg>
                <use xlinkHref={`${iconSprite}#icon-search`}></use>
              </S.MainSearchSvg>
              <S.MainSearchText
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </S.MainCenterblockSearch>
            <S.PersonalSidebar>
              <S.PersonalName>{email}</S.PersonalName>
              <S.SidebarIcon>
                <svg alt="logout">
                  <use xlinkHref={`${iconSprite}#logout`}></use>
                </svg>
              </S.SidebarIcon>
            </S.PersonalSidebar>
          </S.Main>
          <S.CenterError>
            <S.MainText>404</S.MainText>
            <S.Crying>
              <S.PageNotFound>Страница не найдена</S.PageNotFound>
              <img src={smile} alt="crying"></img>
            </S.Crying>
            <S.TextDel>
              Возможно, она была удалена или перенесена на другой адрес
            </S.TextDel>
            <S.ButtonBackMain>
              <S.ButtonBackMainA to="/">Вернуться на главную</S.ButtonBackMainA>
            </S.ButtonBackMain>
          </S.CenterError>

          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </header>
  );
}
