import React, { useState} from "react";
import * as S from "./styled/Filters.style"
export function GenreFilter(props) {

  const { id, name, onClick, isOpen } = props;
  const [to, setTo] = useState("");

  const toggleDropdown = () => {
    onClick(id);
  };

  const genres = [
    { value: "all", label: "Все" },
    { value: "Shanson", label: "Шансон" },
    { value: "HH", label: "Хип-Хоп" },
    { value: "Jazz", label: "Джаз" },
    { value: "Reggy", label: "Регги" },
  ];

  return (
    <S.Button
    type="button"
    onClick={toggleDropdown}>
      <S.Choose isOpen={isOpen}>
        {to || name}
      </S.Choose>
      {isOpen && (
        <S.Options>
          {genres.map((genre) => (
            <S.Option
              key={genre.value}
              onClick={() => {
                setTo(genre.label);
              }}
            >
              {genre.label}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.Button>
  );
}
