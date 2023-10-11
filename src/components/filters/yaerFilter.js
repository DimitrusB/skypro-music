import { useEffect, useState } from "react";
import * as S from "./Filters.style";
import { getAllTracks } from "../../api";
export function YearFilter(props) {
  const { id, name, onClick, isOpen } = props;
  const [to, setTo] = useState("");
  const [years, setYears] = useState([]);

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
              setTo("Все");
            }}
          >
            Все
          </S.Option>
          {years.map((year) => (
            <S.Option
              key={year}
              onClick={() => {
                setTo(year);
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
