import { useContext, useEffect, useState } from "react";
import { getAllTracks } from "../../api";
import UserContext from "../UserContext";
import * as S from "./Filters.style";

export function TrackFilter(props, onFilteredTracks) {
  const { id, name, onClick, isOpen } = props;
  const [selectedTracks, setSelectedTracks] = useState("");
  const [ trackName, setTrackName] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { setFilteredTracks } = useContext(UserContext);
  const [filterChoose, setFilterChoose] = useState(false)

  const toggleDropdown = () => {
    onClick(id);
  };

  useEffect(() => {
    // Получение данных из API.
    getAllTracks()
      .then((data) => {
        const uniqueTracks = [...new Set(data.map((track) => track.author))];
        const sortedUniqueTracks = uniqueTracks.sort((a, b) => a.localeCompare(b));
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
      setFilterChoose(true);
      const filteredTracks = selectedTracks === 'Все'
        ? tracks
        : tracks.filter((track) => track.author === selectedTracks);
  
      // Теперь мы обновляем глобальное состояние вместо вызова своего пропа внутри `GenreFilter`.
      setFilteredTracks(filteredTracks);
      console.log(filteredTracks);

    }
  }, [selectedTracks, tracks, setFilteredTracks]);

  return (
    <S.Button type="button" onClick={toggleDropdown} style={{ border: filterChoose ? '1px solid #B672FF' : '' }}>  
    <S.Choose style={{ color: filterChoose ? '#B672FF' : 'default color' }} isOpen={isOpen}>{selectedTracks || name}</S.Choose>
    {isOpen && (
        <S.Options>
<S.Option
  key="all"
  onClick={() => {
    setSelectedTracks("Все");
  }}
>
  Все
</S.Option>
{trackName.map((track) => (
  <S.Option
    key={track}
    onClick={() => {
        setSelectedTracks(track);
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
