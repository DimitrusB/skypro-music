import { useEffect, useState } from "react";
import { getAllTracks } from "../api";
import * as S from "./styled/Filters.style";

export function TrackFilter(props) {
  const { id, name, onClick, isOpen } = props;
  const [to, setTo] = useState("");
  const [tracks, setTracks] = useState([]);

  const toggleDropdown = () => {
    onClick(id);
  };

  useEffect(() => {
    // Получение данных из API.
    getAllTracks()
      .then((data) => {
        const uniqueTracks = [...new Set(data.map((track) => track.author))];
        setTracks(uniqueTracks);
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
          {tracks.map((track) => (
            <S.Option
              key={track}
              onClick={() => {
                setTo(track);
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