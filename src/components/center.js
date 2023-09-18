import iconSprite from "../img/icon/sprite.svg";
import { NameTrack } from "./NameTrack";
import { GenreFilter } from "./genreFilter";
import { TrackFilter } from "./trckFilter";
import { YearFilter } from "./yaerFilter";
import { useEffect, useState } from "react";
import * as S from "./styled/Center.style";
import { Link } from "react-router-dom";
import { getAllTracks } from "../api";

export function Center({ onTrackSelection }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Получение данных из API.
    getAllTracks()
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        alert(`Ошибка получения данных с сервера: ${error}`);
      });
  }, []);

  const handleTrackClick = (track, author,trackfile) => {
    onTrackSelection(track, author, trackfile);
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
          {todos.map((tracks) => (
            <NameTrack
              track={tracks.name}
              mix={tracks.mix}
              author={tracks.author}
              album={tracks.album}
              time={tracks.duration_in_seconds}
              trackfile={tracks.track_file}
              onClick={() => handleTrackClick(tracks.name, tracks.author, tracks.track_file)}
            />
          ))}
        </S.FPlaylistContent>
      </S.CentralblockContent>
    </S.MainCenterblock>
  );
}
