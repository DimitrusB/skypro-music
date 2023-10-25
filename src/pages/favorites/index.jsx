import { NavMenu } from "../../components/NavMenu/NavMenu";
import * as S from "./favorite.style";
import iconSprite from "../../img/icon/sprite.svg";
import { useContext, useState } from "react";
import UserContext from "../../components/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllFavoriteTracks } from "../../store/actions/thunk/getListFavorites";
import { NameTrack } from "../../components/NameTracks/NameTrack";
import {
  getTrackList,
  setCurrentTrack,
  setPlaying,
  shouldPlayFromFavorite,
} from "../../store/actions/trackActions";
import { useNavigate } from "react-router-dom";
import clientStorage from "../../utils/client-storage";

export function FavoritesTracks({ setIsLogged }) {
  // const { email, resetEmail } = useContext(UserContext);
  const dispatch = useDispatch();
  // const { token } = useContext(UserContext);
  const tracks = useSelector((state) => state.track);
  const favoriteTracks = useSelector((state) => state.favoritetracks);
  const currentTrackId = useSelector((state) => state.currentTrackId);
  const playFromFavorite = useSelector((state) => state.playFavorite);
  const isPlaying = useSelector((state) => state.isPlaying);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const email = clientStorage.getEmailUser();
  const navigate = useNavigate();
  const token = clientStorage.getTokenUser();
  const { isLoading, setIsLoading } = useContext(UserContext);
  const { whiteTheme, setWhiteTheme } = useContext(UserContext);

  useEffect(() =>{
    const theme = localStorage.getItem('theme');
    if (theme) {
      setWhiteTheme(theme === 'white' ? true : false);
    }
  },[]);

  useEffect(() => {
    if (token && token.access && token.refresh) {
      dispatch(getAllFavoriteTracks(token.access, token.refresh))
      .then(() => {
        setIsLoading(false);
      })
    }
  }, []);

  useEffect(() => {
    if (search === "") {
      setSearchResults(favoriteTracks);
    } else {
      setSearchResults(
        favoriteTracks.filter((track) =>
          track.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    if (playFromFavorite) {
      dispatch(getTrackList(favoriteTracks));
    }
  }, [search, favoriteTracks]);

  const handleSearchChange = (event) => setSearch(event.target.value);

  const handleResetClick = () => {
    clientStorage.clearUserInfo();
    navigate("/signin");
    setIsLogged(null);
  };

  const handleTrackClick = (id) => {
    if (id === currentTrackId) {
      isPlaying ? dispatch(setPlaying(false)) : dispatch(setPlaying(true));
    } else {
      dispatch(setCurrentTrack(id));
      dispatch(setPlaying(true));
    }
    dispatch(getTrackList(favoriteTracks));
    dispatch(shouldPlayFromFavorite());
  };

  return (
    <header className="App-header">
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <S.MainCenterblock whiteTheme={whiteTheme}>
              <S.MainCenterblockSearch>
                <S.MainSearchSvg>
                  <use xlinkHref={`${iconSprite}#icon-search`}></use>
                </S.MainSearchSvg>

                <S.MainSearchText
                  type="search"
                  placeholder="Поиск"
                  name="search"
                  onChange={handleSearchChange}
                />
              </S.MainCenterblockSearch>
              <S.CentralblockH2 whiteTheme={whiteTheme}>Мои треки</S.CentralblockH2>
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
                  {Array.isArray(searchResults) &&
                    searchResults.length > 0 &&
                    searchResults.map((tracks, index) => (
                      <NameTrack
                        id={tracks.id}
                        track={tracks.name}
                        mix={tracks.mix}
                        author={tracks.author}
                        album={tracks.album}
                        time={tracks.duration_in_seconds}
                        trackfile={tracks.track_file}
                        onClick={() => handleTrackClick(tracks.id)}
                        playing={currentTrackId === tracks.id}
                      />
                    ))}
                </S.FPlaylistContent>
              </S.CentralblockContent>
            </S.MainCenterblock>

            <S.MainSidebar whiteTheme={whiteTheme}>
              <S.PersonalSidebar>
                <S.PersonalName whiteTheme={whiteTheme}>{email}</S.PersonalName>
                <S.SidebarIcon whiteTheme={whiteTheme}>
                  <svg alt="logout" onClick={handleResetClick}>
                  <use
                        xlinkHref={`${iconSprite}${
                          whiteTheme ? "#icon-logoutWhite" : "#logout"
                        }`}
                      ></use>
                  </svg>
                </S.SidebarIcon>
              </S.PersonalSidebar>
              <S.SidebarBlock></S.SidebarBlock>
            </S.MainSidebar>
          </S.Main>

          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </header>
  );
}
