import { useState } from 'react';

export function YearFilter() {
  
  const [to, setTo] = useState("");
  const [open, setOpen] = useState(false);

  const genres = [
    { value: "all", label: "Все" },
    { value: "2001", label: "2001" },
    { value: "2003", label: "2003" },
    { value: "2008", label: "2008" },
    { value: "2010", label: "2010" },
    { value: "2015", label: "2015" },
    { value: "2018", label: "2018" },
    { value: "2023", label: "2023" },
  ];

  return (

    <div className="filter__button button-year _btn-text">
      <div
        type="button"
        onClick={() => setOpen(!open)}
        className={`filter__choose${open ? " _active" : ""}`}
      >
        {to || "Году выпуска"}
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