import { useContext, useEffect, useState } from "react";
import * as S from "./Filters.style";
import { getAllTracks } from "../api/api";
import UserContext from "../UserContext";

export function YearFilter(props, onFilteredTracks) {
  const { id, name, onClick, isOpen } = props;
  const { selectedYears, setSelectedYears } = useContext(UserContext);
  const [tracks, setTracks] = useState([]);
  const [years, setYears] = useState([]);
  const [filterChoose, setFilterChoose] = useState(false);
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
    if (selectedYears) {
      let filteredTracks = tracks;

      if (selectedYears.length > 0 && !(selectedYears.length === 1)) {
        setFilterChoose(true);
        filteredTracks = filteredTracks.filter((track) =>
          selectedYears.includes(
            track.release_date && track.release_date.substring(0, 4)
          )
        );
      } else {
        setFilterChoose(false);
      }

      setFilteredTracks(filteredTracks);
    }
  }, [tracks, selectedYears, setFilteredTracks]);

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
        {selectedYears.length > 0 && !selectedYears.includes("Все") ? (
          <>
            <S.Number>{selectedYears.length}</S.Number>
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
              setSelectedYears([]);
            }}
          >
            Все
          </S.Option>
          {years.map((year) => (
            <S.Option
              key={year}
              isSelected={selectedYears.includes(year)}
              onClick={() => {
                if (selectedYears.includes(year)) {
                  setSelectedYears(selectedYears.filter((x) => x !== year));
                } else {
                  setSelectedYears([...selectedYears, year]);
                }
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
