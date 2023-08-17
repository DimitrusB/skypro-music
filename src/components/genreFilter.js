import React, { useState} from "react";


export function GenreFilter() {

  const [visibleFilter, setVisibleFilter] = useState('genres');
  const [to, setTo] = useState("");
  const [open, setOpen] = useState(false);
  // const handleClickOutside = () => {
  //   setOpen(false);
  // };
  const toggleDropdown = () => {
    setOpen(!open);
    setVisibleFilter('genres')
    console.log(visibleFilter);
  };
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   console.log('Сработало')
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     console.log('Сработало')
  //   };
  // }, []);
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
    isVisible={visibleFilter === 'genres'}
    onClick={toggleDropdown}>
      <div
        className={`filter__choose${open ? " _active" : ""}`}
      >
        {to || "Жанру"}
      </div>
      {open && (
        <ul className="filter__options">
          {genres.map((genre) => (
            <li
              key={genre.value}
              className="filter__option"
              onClick={() => {
                setTo(genre.label);
                setOpen(false);
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
