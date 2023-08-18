import { useEffect, useState } from "react";

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
    <div
      className="filter__button button-year _btn-text"
      type="button"
      onClick={toggleDropdown}
    >
      <div className={`filter__choose${isOpen ? " _active" : ""}`}>
        {to || name} {/* Используем name здесь как плейсхолдер */}
      </div>
      {isOpen && (
        <ul className="filter__options">
          {tracks.map((track) => (
            <li
              key={track.value}
              className="filter__option"
              onClick={() => {
                setTo(track.label);
              }}
            >
              {track.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}