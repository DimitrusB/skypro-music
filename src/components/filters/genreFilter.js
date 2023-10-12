import React, { useContext, useEffect, useState } from "react";
import { getAllTracks } from "../../api";
import UserContext from "../UserContext";
import * as S from "./Filters.style";

export function GenreFilter(props, onFilteredTracks) {
  const { id, name, onClick, isOpen } = props;
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);
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
        const uniqueGenres = [...new Set(data.map((track) => track.genre))];
        const sortedUniqueGenres = uniqueGenres.sort((a, b) => a.localeCompare(b));
        setGenres(sortedUniqueGenres);
        setTracks(data); // Сохраняем все треки
      })
      .catch((error) => {
        alert(`Ошибка получения данных с сервера: ${error}`);
      });
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      setFilterChoose(true);
      const filteredTracks = selectedGenre === 'Все'
        ? tracks
        : tracks.filter((track) => track.genre === selectedGenre);
  
      // Теперь мы обновляем глобальное состояние вместо вызова своего пропа внутри `GenreFilter`.
      setFilteredTracks(filteredTracks);
      console.log(filteredTracks);

    }
  }, [selectedGenre, tracks, setFilteredTracks]);

  return (
    <S.Button type="button" onClick={toggleDropdown}>
      <S.Choose isOpen={isOpen}>{selectedGenre || name}</S.Choose>
      {isOpen && (
        <S.Options>
          <S.Option
            key="all"
            onClick={() => {
              setSelectedGenre("Все");
            }}
          >
            Все
          </S.Option>
          {genres.map((genre) => (
            <S.Option
              key={genre}
              onClick={() => {
                setSelectedGenre(genre);
              }}
            >
              {genre}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.Button>
  );
}