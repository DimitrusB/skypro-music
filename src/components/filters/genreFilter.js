import React, { useEffect, useState } from "react";
import { getAllTracks } from "../../api";
import * as S from "./Filters.style";

export function GenreFilter(props) {
  const { id, name, onClick, isOpen } = props;
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [tracks, setTracks] = useState([]);

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
    // Фильтруем треки по выбранному жанру
    if (selectedGenre) {
      const filteredTracks = tracks.filter((track) => track.genre === selectedGenre);
      console.log(filteredTracks); // Выводим в консоль.
    }
  }, [selectedGenre, tracks]);

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
