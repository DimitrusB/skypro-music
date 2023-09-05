import { useState } from "react";
import * as S from "./styled/Filters.style"
export function TrackFilter(props) {
  const { id, name, onClick, isOpen } = props;
  const [to, setTo] = useState("");

  const toggleDropdown = () => {
    onClick(id);
  };


  const tracks = [
    { value: "all", label: "Все" },
    { value: "Nero", label: "Nero" },
    { value: "Dynoro", label: "Dynoro" },
    { value: "Ali Bakgor", label: "Ali Bakgor" },
    { value: "Стоункат, Psychopath", label: "Стоункат, Psychopath" },
    { value: "Jaded", label: "Jaded" },
    { value: "Outwork", label: "Outwork" },
  ];

  return (
    <S.Button
      type="button"
      onClick={toggleDropdown}
    >
      <S.Choose isOpen={isOpen}>
        {to || name} {/* Используем name здесь как плейсхолдер */}
      </S.Choose>
      {isOpen && (
        <S.Options>
          {tracks.map((track) => (
            <S.Option
              key={track.value}
              onClick={() => {
                setTo(track.label);
              }}
            >
              {track.label}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.Button>
  );
}