import { useContext, useEffect, useState } from "react";
import { getAllTracks } from "../api/api";
import UserContext from "../UserContext";
import * as S from "./Filters.style";

export function TrackFilter(props, onFilteredTracks) {
  const { id, name, onClick, isOpen } = props;
  const { selectedTracks, setSelectedTracks } = useContext(UserContext);
  const [trackName, setTrackName] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { setFilteredTracks } = useContext(UserContext);
  const [filterChoose, setFilterChoose] = useState(false);

  const toggleDropdown = () => {
    onClick(id);
  };

  useEffect(() => {
    // Получение данных из API.
    getAllTracks()
      .then((data) => {
        const uniqueTracks = [...new Set(data.map((track) => track.author))];
        const sortedUniqueTracks = uniqueTracks.sort((a, b) =>
          a.localeCompare(b)
        );
        setTrackName(sortedUniqueTracks);
        setTracks(data); // Сохраняем все треки
        setFilteredTracks(data);
      })
      .catch((error) => {
        alert(`Ошибка получения данных с сервера: ${error}`);
      });
  }, [setFilteredTracks]);

  useEffect(() => {
    if (selectedTracks) {
      let filteredTracks = tracks;

      if (selectedTracks.length > 0 && !(selectedTracks.length === 1)) {
        setFilterChoose(true);
        filteredTracks = filteredTracks.filter(
          (track) => track.author === selectedTracks
        );
      } else {
        setFilterChoose(false);
      }
      setFilteredTracks(filteredTracks);
    }
  }, [tracks, selectedTracks, setFilteredTracks]);

  return (
    <S.Button
      type="button"
      onClick={toggleDropdown}
      style={{ border: filterChoose ? "1px solid " : "" }}
    >
      <S.Choose
        style={{ color: filterChoose ? "" : "", position: "relative" }}
        isOpen={isOpen}
      >
        {selectedTracks.length > 0 && !selectedTracks.includes("Все") ? (
          <>
            <S.Number>{selectedTracks.length}</S.Number>
            {name}
          </>
        ) : (
          name
        )}
      </S.Choose>
      {isOpen && (
        <S.Options>
          <S.Option
            key="all"
            onClick={() => {
              setSelectedTracks([]);
            }}
          >
            Все
          </S.Option>
          {trackName.map((track) => (
            <S.Option
              key={track}
              isSelected={selectedTracks.includes(track)}
              onClick={() => {
                if (selectedTracks.includes(track)) {
                  setSelectedTracks(selectedTracks.filter((x) => x !== track));
                } else {
                  setSelectedTracks([...selectedTracks, track]);
                }
              }}
            >
              {track}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.Button>
  );
}
