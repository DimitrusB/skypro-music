import iconSprite from "../../img/icon/sprite.svg";
import { NameTrack } from "../NameTracks/NameTrack";
import { GenreFilter } from "../filters/genreFilter";
import { TrackFilter } from "../filters/trckFilter";
import { YearFilter } from "../filters/yaerFilter";
import { useContext, useEffect, useState } from "react";
import * as S from "./Center.style";
import { Link } from "react-router-dom";
import { getAllTracks } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavoritesSuccess, getTrackList, getTrackListError, setCurrentTrack, setPlaying } from "../../store/actions/trackActions";
import UserContext from "../UserContext";

export function Center({ onTrackSelection }) {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.track || []);
  const currentTrackId = useSelector((state) => state.currentTrackId);
  const isPlaying = useSelector((state) => state.isPlaying);
  // const error = useSelector((state) => state.error);
  const { email, token, filteredTracks  } = useContext(UserContext);

  useEffect(() => {
    getAllTracks()
      .then((response) => {
        const tracks = response.map(item => {
          if (item.stared_user.find((user) => user.email === email)) {
            return {...item, isFavorite: true};
          }

          return item;
        })

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

  // const handleTrackSelection = (track, author, trackfile) => {
  //   onTrackSelection(track, author, trackfile);
  // };

  const handleTrackClick = (id) => {
    if (id === currentTrackId) {
      isPlaying ? dispatch(setPlaying(false)) : dispatch(setPlaying(true));
    } else {
      dispatch(setCurrentTrack(id));
      dispatch(setPlaying(true))
    }
  };

  const [trackFilterOpen, setTrackFilterOpen] = useState(false);
  const [yearFilterOpen, setYearFilterOpen] = useState(false);
  const [genreFilterOpen, setGenreFilterOpen] = useState(false);

  const handleFilterToggle = (filter) => {
    if (filter === "track") {
      setTrackFilterOpen(!trackFilterOpen);
      setYearFilterOpen(false);
      setGenreFilterOpen(false);
    } else if (filter === "year") {
      setYearFilterOpen(!yearFilterOpen);
      setGenreFilterOpen(false);
      setTrackFilterOpen(false);
    } else if (filter === "genre") {
      setGenreFilterOpen(!genreFilterOpen);
      setYearFilterOpen(false);
      setTrackFilterOpen(false);
    }
  };

  return (
    <S.MainCenterblock>
      <S.MainCenterblockSearch>
        <Link to="/">
          <S.MainSearchSvg>
            <use xlinkHref={`${iconSprite}#icon-search`}></use>
          </S.MainSearchSvg>
        </Link>
        <S.MainSearchText type="search" placeholder="Поиск" name="search" />
      </S.MainCenterblockSearch>
      <S.CentralblockH2>Треки</S.CentralblockH2>
      <S.CentralblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <TrackFilter
          name="По исполнителю"
          onClick={() => handleFilterToggle("track")}
          isOpen={trackFilterOpen}
        />
        <YearFilter
          name="Году выпуска"
          onClick={() => handleFilterToggle("year")}
          isOpen={yearFilterOpen}
        />
        <GenreFilter
          name="Жанру"
          onClick={() => handleFilterToggle("genre")}
          isOpen={genreFilterOpen}
        />
        {/* <Filter></Filter> */}
      </S.CentralblockFilter>
      <S.CentralblockContent>
        <S.FContentTitle>
          <S.FPlaylistTitleCol col="col01">Трек</S.FPlaylistTitleCol>
          <S.FPlaylistTitleCol col="col02">ИСПОЛНИТЕЛЬ</S.FPlaylistTitleCol>
          <S.FPlaylistTitleCol col="col03">АЛЬБОМ</S.FPlaylistTitleCol>
          <S.FPlaylistTitleCol col="col04">
            <S.FPlaylistTitleSvg alt="time">
              <use xlinkHref={`${iconSprite}#icon-watch`}></use>
            </S.FPlaylistTitleSvg>
          </S.FPlaylistTitleCol>
        </S.FContentTitle>
        <S.FPlaylistContent>
          {filteredTracks.map((tracks,index) => (
            <NameTrack
              id={tracks.id}
              track={tracks.name}
              mix={tracks.mix}
              author={tracks.author}
              album={tracks.album}
              time={tracks.duration_in_seconds}
              trackfile={tracks.track_file}
              // onClick={() =>
                // handleTrackClick(tracks.name, tracks.author, tracks.track_file)
                onClick={() => handleTrackClick(tracks.id)}
                playing={currentTrackId === tracks.id}
            />
          ))}
        </S.FPlaylistContent>
      </S.CentralblockContent>
    </S.MainCenterblock>

  );
}
