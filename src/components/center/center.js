import iconSprite from "../../img/icon/sprite.svg";
import { NameTrack } from "../NameTracks/NameTrack";
import { GenreFilter } from "../filters/genreFilter";
import { TrackFilter } from "../filters/trckFilter";
import { YearFilter } from "../filters/yaerFilter";
import { useContext, useEffect, useState } from "react";
import * as S from "./Center.style";
import { Link } from "react-router-dom";
import { getAllTracks } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFavoritesSuccess,
  getTrackList,
  getTrackListError,
  setCurrentTrack,
  setPlaying,
} from "../../store/actions/trackActions";
import UserContext from "../UserContext";
import clientStorage from "../../utils/client-storage";

export function Center({ onTrackSelection }) {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.track || []);
  const currentTrackId = useSelector((state) => state.currentTrackId);
  const isPlaying = useSelector((state) => state.isPlaying);
  const { filteredTracks, setFilteredTracks } = useContext(UserContext);
  const { selectedGenres, setSelectedGenres } = useContext(UserContext);
  const { selectedYears, setSelectedYears } = useContext(UserContext);
  const { selectedTracks, setSelectedTracks } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const email = clientStorage.getEmailUser();
  const { isLoading, setIsLoading } = useContext(UserContext);
  const { whiteTheme, setWhiteTheme } = useContext(UserContext);

  if (currentTrackId === undefined) {
    dispatch(setCurrentTrack(0));
  }

  useEffect(() => {
    getAllTracks()
      .then((response) => {
        const tracks = response.map((item) => {
          if (item.stared_user.find((user) => user.email === email)) {
            return { ...item, isFavorite: true };
          }

          return item;
        });

        if (!currentTrackId) {
          dispatch(setCurrentTrack(tracks[0].id));
        }

        dispatch(getTrackList(tracks));
        dispatch(
          fetchFavoritesSuccess(tracks.filter((track) => track.isFavorite))
        );
      })
      .then(() => {
        setIsLoading(false); // Прекратить отображение скелетона после загрузки
      })
      .catch((error) => {
        setIsLoading(false); // Также прекратите показывать скелетон в случае ошибки
        dispatch(
          getTrackListError(`Error fetching data from the server: ${error}`)
        );
      });
  }, [dispatch, currentTrackId]);

  const handleTrackClick = (id) => {
    if (id === currentTrackId) {
      isPlaying ? dispatch(setPlaying(false)) : dispatch(setPlaying(true));
    } else {
      dispatch(setCurrentTrack(id));
      dispatch(setPlaying(true));
    }
  };

  useEffect(() => {
    let filtered = tracks;

    if (
      Array.isArray(selectedGenres) &&
      selectedGenres.length > 0 &&
      !selectedGenres.includes("Все")
    ) {
      filtered = filtered.filter((track) =>
        selectedGenres.some((genre) => track.genre === genre)
      );
    }

    if (
      Array.isArray(selectedYears) &&
      selectedYears.length > 0 &&
      !selectedYears.includes("Все")
    ) {
      filtered = filtered.filter((track) =>
        selectedYears.some(
          (year) =>
            track.release_date && track.release_date.substring(0, 4) === year
        )
      );
    }

    if (
      Array.isArray(selectedTracks) &&
      selectedTracks.length > 0 &&
      !selectedTracks.includes("Все")
    ) {
      filtered = filtered.filter((track) =>
        selectedTracks.some((author) => track.author === author)
      );
    }

    setFilteredTracks(filtered);
    console.log(filtered);
  }, [tracks, selectedGenres, selectedYears, selectedTracks]);

  useEffect(() => {
    if (search === "") {
      setSearchResults(filteredTracks);
    } else {
      setSearchResults(
        filteredTracks.filter((track) =>
          track && (track.name || track.author)
            ? track.name.toLowerCase().includes(search.toLowerCase()) ||
              track.author.toLowerCase().includes(search.toLowerCase())
            : false
        )
      );
    }
  }, [search, filteredTracks]);

  const handleSearchChange = (event) => setSearch(event.target.value);

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
        <S.MainSearchText
          type="search"
          placeholder="Поиск"
          name="search"
          onChange={handleSearchChange}
        />
      </S.MainCenterblockSearch>
      <S.CentralblockH2 whiteTheme={whiteTheme}>Треки</S.CentralblockH2>
      <S.CentralblockFilter>
        <S.FilterTitle whiteTheme={whiteTheme}>Искать по:</S.FilterTitle>
        <TrackFilter
          name="По исполнителю"
          onClick={() => handleFilterToggle("track")}
          isOpen={trackFilterOpen}
          selectedTrack={selectedTracks}
          setSelectedTrack={setSelectedTracks}
        />
        <YearFilter
          name="Году выпуска"
          onClick={() => handleFilterToggle("year")}
          isOpen={yearFilterOpen}
          selectedYear={selectedYears}
          setSelectedYear={setSelectedYears}
        />
        <GenreFilter
          name="Жанру"
          onClick={() => handleFilterToggle("genre")}
          isOpen={genreFilterOpen}
          selectedGenre={selectedGenres}
          setSelectedGenre={setSelectedGenres}
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
          {searchResults.map((tracks, index) => (
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
