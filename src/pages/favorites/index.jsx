import { NavMenu } from "../../components/NavMenu/NavMenu";
import { AudioPlayer } from "../../components/player/Player";
import * as S from "./favorite.style";
import { NameTrackFavorites } from "../../components/NameTracks/NameTrackFavorites";
import iconSprite from "../../img/icon/sprite.svg";
import { useContext } from "react";
import UserContext from "../../components/UserContext";

export function FavoritesTracks() {
  const { email } = useContext(UserContext);
  return (
    <header className="App-header">
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <S.MainCenterblock>
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
              <S.CentralblockH2>Мои треки</S.CentralblockH2>
              <S.CentralblockContent>
                <S.FContentTitle>
                  <S.FPlaylistTitleCol col="col01">Трек</S.FPlaylistTitleCol>
                  <S.FPlaylistTitleCol col="col02">
                    ИСПОЛНИТЕЛЬ
                  </S.FPlaylistTitleCol>
                  <S.FPlaylistTitleCol col="col03">АЛЬБОМ</S.FPlaylistTitleCol>
                  <S.FPlaylistTitleCol col="col04">
                    <S.FPlaylistTitleSvg alt="time">
                      <use xlinkHref={`${iconSprite}#icon-watch`}></use>
                    </S.FPlaylistTitleSvg>
                  </S.FPlaylistTitleCol>
                </S.FContentTitle>
                <S.FPlaylistContent>
                  <NameTrackFavorites
                    track="Guilt"
                    author="Nero"
                    album="Welcome Reality"
                    time="4:44"
                  />
                  <NameTrackFavorites
                    track="Elektro"
                    author="Dynoro, Outwork, Mr. Gee"
                    album="Elektro"
                    time="2:22"
                  />
                  <NameTrackFavorites
                    track="I’m Fire"
                    author="Ali Bakgor"
                    album="I’m Fire"
                    time="2:22"
                  />
                  <NameTrackFavorites
                    track="Non Stop"
                    author="Стоункат, Psychopath"
                    album="Non Stop"
                    time="4:12"
                  />
                  <NameTrackFavorites
                    track="Run Run"
                    author="Jaded, Will Clarke, AR/CO"
                    album="Run Run"
                    time="2:54"
                  />
                  <NameTrackFavorites
                    track="Eyes on Fire"
                    author="Blue Foundation, Zeds Dead"
                    album="Eyes on Fire"
                    time="5:20"
                  />
                </S.FPlaylistContent>
              </S.CentralblockContent>
            </S.MainCenterblock>

            <S.MainSidebar>
              <S.PersonalSidebar>
                <S.PersonalName>{email}</S.PersonalName>
                <S.SidebarIcon>
                  <svg alt="logout">
                    <use xlinkHref={`${iconSprite}#logout`}></use>
                  </svg>
                </S.SidebarIcon>
              </S.PersonalSidebar>
              <S.SidebarBlock></S.SidebarBlock>
            </S.MainSidebar>
          </S.Main>
          <AudioPlayer />
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </header>
  );
}
