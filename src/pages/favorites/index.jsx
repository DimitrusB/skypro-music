import { NavMenu } from "../../components/NavMenu/NavMenu";
import { AudioPlayer } from "../../components/player/Player";
import * as S from "./favorite.style";
import { NameTrackFavorites } from "../../components/NameTracks/NameTrackFavorites";
import iconSprite from "../../img/icon/sprite.svg";
import { useContext } from "react";
import UserContext from "../../components/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllFavoriteTracks } from "../../store/actions/thunk/getListFavorites";




export function FavoritesTracks() {
  const {email} = useContext(UserContext)
  const dispatch = useDispatch();
  const { token } = useContext(UserContext);
  const tracks = useSelector((state) => state.favoritetracks || []);

  console.log('your token : ', token.access);
  useEffect(() => {
    dispatch(getAllFavoriteTracks(token.access, token.refresh)); 
  }, [dispatch, token]); 


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
                {tracks.map((tracks, index) => (
  <NameTrackFavorites
    key={index} // Добавлен ключ
    track={tracks.name}
    mix={tracks.mix}
    author={tracks.author}
    album={tracks.album}
    time={tracks.duration_in_seconds}
    trackfile={tracks.track_file}
  />
))}
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
