import { NavMenu } from "../../components/NavMenu/NavMenu";
import * as S from "../favorites/favorite.style";
import iconSprite from "../../img/icon/sprite.svg";
import { useParams } from "react-router-dom";
import { musicCategory } from "../../components/constants";
import { getAllTracksById } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoritesSuccess, getTrackList, getTrackListError, setCurrentTrack } from "../../store/actions/trackActions";
import { useContext, useEffect, useState } from "react";
import { NameTrack } from "../../components/NameTracks/NameTrack";
import UserContext from "../../components/UserContext";

export function Category() {
  const params = useParams();
  const dispatch = useDispatch();
  const { email} = useContext(UserContext);
  const currentTrackId = useSelector((state) => state.currentTrackId);

const [tracks, setTracks] = useState([]);
const [nameList, setNameList] = useState("");
// const tracks = useSelector((state) => state.track || []);
const category = musicCategory.find(
  (category) => category.id === parseInt(params.id, 10)
);


useEffect(() => {
  getAllTracksById(category.id)
    .then((response) => {
      setTracks(response.items);
      setNameList(response)
      console.log(response.items);
    })
    .then(() => {

      if (!currentTrackId) {
        dispatch(setCurrentTrack(tracks[0].id));
      }
      dispatch(getTrackList(tracks));
      dispatch(fetchFavoritesSuccess(tracks.filter((track) => track.isFavorite)));
    })
    .catch((error) => {
      dispatch(getTrackListError(`Error fetching data from the server: ${error}`));
    });
}, [dispatch]);


  if (!category) {
    return <div>Плейлист не найден</div>;
  }

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
              <S.CentralblockH2>{nameList.name}</S.CentralblockH2>
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

                {tracks.map((track, index) => (
  <NameTrack
    key={index}
    id={track.id}
    track={track.name}
    author={track.author}
    album={track.album}
    time={track.duration_in_seconds} 
    trackfile={track.track_file}

  />
))}
                </S.FPlaylistContent>
              </S.CentralblockContent>
            </S.MainCenterblock>

            <S.MainSidebar>
              <S.PersonalSidebar>
                <S.PersonalName>Dmitriy.Borisevich</S.PersonalName>
                <S.SidebarIcon>
                  <svg alt="logout">
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
