import React, { useState} from "react";


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
    <div className="filter__button button-genre _btn-text"
    type="button"
    onClick={toggleDropdown}>
      <div
        className={`filter__choose${isOpen ? " _active" : ""}`}
      >
        {to || name}
      </div>
      {isOpen && (
        <ul className="filter__options">
          {genres.map((genre) => (
            <li
              key={genre.value}
              className="filter__option"
              onClick={() => {
                setTo(genre.label);
              }}
            >
              {genre.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
