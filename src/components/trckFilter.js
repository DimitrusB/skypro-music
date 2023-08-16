import {  useEffect, useState } from 'react';

export function TrackFilter() {



  const [to, setTo] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOutside = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    console.log('Сработало')
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      console.log('Сработало')
    };
  }, []);
  
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
    <div className="filter__button button-year _btn-text">
      <div 
        type="button"
        onClick={() => setOpen(!open)}
        className={`filter__choose${open ? " _active" : ""}`}
      >
        {to || "Исполнителю"}
      </div>
      {open && (
        <ul className="filter__options">
          {tracks.map((track) => (
            <li
              key={track.value}
              className="filter__option"
              onClick={() => {
                setTo(track.label);
                setOpen(false);
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