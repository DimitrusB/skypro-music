import { useContext, useEffect, useState } from "react";
import * as S from "./Filters.style";
import { getAllTracks } from "../../api";
import UserContext from "../UserContext";

export function YearFilter(props, onFilteredTracks) {
  const { id, name, onClick, isOpen } = props;
  const [selectedYear, setSelectedYear] = useState("");
  const [tracks, setTracks] = useState([]);
  const [years, setYears] = useState([]);
  const [filterChoose, setFilterChoose] = useState(false)
  const { setFilteredTracks } = useContext(UserContext);

  const toggleDropdown = () => {
    onClick(id);
  };

useEffect(() => {
  getAllTracks()
    .then((data) => {
      const years = data.map((item) =>
        typeof item.release_date === "string"
          ? item.release_date.substring(0, 4)
          : null
      );
      const nonNullYears = years.filter((item) => item !== null);
      const uniqueYears = [...new Set(nonNullYears)];
      const sortedUniqueYears = uniqueYears.sort((a, b) => a - b);
      setYears(sortedUniqueYears);
      setTracks(data); // Сохраняем все треки
      setFilteredTracks(data);
    })
    .catch((error) => {
      alert(`Ошибка получения данных с сервера: ${error}`);
    });
}, [setFilteredTracks]); 

useEffect(() => {
  if (selectedYear) {
    setFilterChoose(true);
    const filteredTracks = selectedYear === 'Все'
    ? tracks
    : tracks.filter((track) => track.release_date && track.release_date.substring(0, 4) === selectedYear);
  

    // Теперь мы обновляем глобальное состояние вместо вызова своего пропа внутри `GenreFilter`.
    setFilteredTracks(filteredTracks);
    console.log(filteredTracks);

  }
}, [selectedYear, tracks, setFilteredTracks]);


  return (
    <S.Button type="button" onClick={toggleDropdown} style={{ border: filterChoose ? '1px solid #B672FF' : '' }}>  
      <S.Choose style={{ color: filterChoose ? '#B672FF' : 'default color' }} isOpen={isOpen}>{selectedYear || name}</S.Choose>
      {isOpen && (
        <S.Options>
          <S.Option
            key="all"
            onClick={() => {
              setSelectedYear("Все");
            }}
          >
            Все
          </S.Option>
          {years.map((year) => (
            <S.Option
              key={year}
              onClick={() => {
                setSelectedYear(year);
              }}
            >
              {year}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.Button>
  );
}
