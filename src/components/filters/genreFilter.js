import React, { useContext, useEffect, useState } from "react";
import { getAllTracks } from "../api/api";
import UserContext from "../UserContext";
import * as S from "./Filters.style";

export function GenreFilter(props, onFilteredTracks) {
  const { id, name, onClick, isOpen } = props;
  const {selectedGenres, setSelectedGenres} = useContext(UserContext);
  const [genres, setGenres] = useState([]);
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
        const uniqueGenres = [...new Set(data.map((track) => track.genre))];
        const sortedUniqueGenres = uniqueGenres.sort((a, b) =>
          a.localeCompare(b)
        );
        setGenres(sortedUniqueGenres);
        setTracks(data); // Сохраняем все треки
        setFilteredTracks(data);
      })
      .catch((error) => {
        alert(`Ошибка получения данных с сервера: ${error}`);
      });
  }, [setFilteredTracks]);


  useEffect(() => {
    if (selectedGenres) { 
      let filteredTracks = tracks;

  
      if (selectedGenres.length > 0 && !(selectedGenres.length === 1)) {
        setFilterChoose(true);
        filteredTracks = filteredTracks.filter((track) => selectedGenres.includes(track.genre));
      } else {
        setFilterChoose(false);
      }
  
      setFilteredTracks(filteredTracks);
    }
  }, [tracks, selectedGenres, setFilteredTracks]);
  

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
    {selectedGenres.length > 0 && !selectedGenres.includes('Все') 
        ? <>
           <S.Number>
           {selectedGenres.length}
           </S.Number>
           {name}
          </>
        : name
    }
</S.Choose>


      {isOpen && (
        <S.Options>
          <S.Option
            key="all"
            onClick={() => {
              setSelectedGenres([]);
            }}
          >
            Все
          </S.Option>
          {genres.map((genre) => (
            < S.Option
            key={genre}
            onClick={() => {
              if (selectedGenres.includes(genre)) {
                setSelectedGenres(selectedGenres.filter(x => x !== genre));
              } else {
                setSelectedGenres([...selectedGenres, genre]);
              }
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
