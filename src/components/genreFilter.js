import React, { useEffect, useState } from "react";
import { getAllTracks } from "../api";
import * as S from "./styled/Filters.style";

export function GenreFilter(props) {
  const { id, name, onClick, isOpen } = props;
  const [to, setTo] = useState("");
  const [genres, setGenres] = useState([]);

  const toggleDropdown = () => {
    onClick(id);
  };

  useEffect(() => {
    // Получение данных из API.
    getAllTracks()
      .then((data) => {
        const uniqueGenres = [...new Set(data.map((genre) => genre.genre))];
        setGenres(uniqueGenres);
      })
      .catch((error) => {
        alert(`Ошибка получения данных с сервера: ${error}`);
      });
  }, []);

  return (
    <S.Button type="button" onClick={toggleDropdown}>
      <S.Choose isOpen={isOpen}>{to || name}</S.Choose>
      {isOpen && (
        <S.Options>
          <S.Option
            key="all"
            onClick={() => {
              setTo("all");
            }}
          >
            Все
          </S.Option>
          {genres.map((genre) => (
            <S.Option
              key={genre}
              onClick={() => {
                setTo(genre);
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