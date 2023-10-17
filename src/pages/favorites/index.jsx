import { NavMenu } from "../../components/NavMenu/NavMenu";
import * as S from "./favorite.style";
import iconSprite from "../../img/icon/sprite.svg";
import { useContext, useState } from "react";
import UserContext from "../../components/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllFavoriteTracks } from "../../store/actions/thunk/getListFavorites";
import { NameTrack } from "../../components/NameTracks/NameTrack";
import { setCurrentTrack, setPlaying, shouldPlayFromFavorite } from "../../store/actions/trackActions";
import { useNavigate } from "react-router-dom";

export function FavoritesTracks() {
  // const { email, resetEmail } = useContext(UserContext);
  const dispatch = useDispatch();
  // const { token } = useContext(UserContext);
  const tracks = useSelector((state) => state.track);
  const currentTrackId = useSelector((state) => state.currentTrackId);
  const isPlaying = useSelector((state) => state.isPlaying);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const email = localStorage.getItem('email')
  const navigate = useNavigate();
  let token = JSON.parse(localStorage.getItem('token'));



  // useEffect(() => {
  //   if (token && token.access && token.refresh) {
  //     dispatch(getAllFavoriteTracks(token.access, token.refresh));
  //   }
  // }, [dispatch, token]);

  useEffect(() => {
    if (search === "") {
      setSearchResults(tracks);
    } else {
      setSearchResults(
        tracks.filter((track) =>
          track.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, tracks]);
  
  const handleSearchChange = (event) => setSearch(event.target.value);

  const handleResetClick = () => {
    localStorage.removeItem('email')
    localStorage.removeItem(JSON.parse(localStorage.getItem('token')))
    navigate('/signin')
  };

  useEffect(() => {
    dispatch(getAllFavoriteTracks(token.access, token.refresh));
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(shouldPlayFromFavorite());
  }, []);

  useEffect(() => {
    console.log('Tracks updated', tracks);
  }, [tracks]);

  const handleTrackClick = (id) => {
    if (id === currentTrackId) {
      isPlaying ? dispatch(setPlaying(false)) : dispatch(setPlaying(true));
    } else {
      dispatch(setCurrentTrack(id));
      dispatch(setPlaying(true))
    }
  };

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
                  onChange={handleSearchChange}
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
                {Array.isArray(searchResults) && searchResults.length > 0 && searchResults.map((tracks,index) => (
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

            <S.MainSidebar>
              <S.PersonalSidebar>
                <S.PersonalName>{email}</S.PersonalName>
                <S.SidebarIcon>
                  <svg alt="logout" onClick={handleResetClick}>
                    <use xlinkHref={`${iconSprite}#logout`}></use>
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
