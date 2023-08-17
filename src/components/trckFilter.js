import {  createRef, useEffect, useState } from 'react';

export function TrackFilter() {
// const myRef=createRef();

const scrollableElement = document.querySelector('.filter__option');
scrollableElement.scrollLeft = 100

  const [to, setTo] = useState("");
  const [open, setOpen] = useState(false);

  // const handleClickOutside = () => {
  //   if (myRef){
  //   setOpen(false);
  //   }
  // };
  const toggleDropdown = () => {
    setOpen(!open);
  };
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  
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
    <div className="filter__button button-year _btn-text"
    type="button"
    onClick={toggleDropdown}>
      <div 
        className={`filter__choose${open ? " _active" : ""}`}
      >
        {to || "Исполнителю"}
      </div>
      {open && (
        <ul className="filter__options">
          {tracks.map((track) => (
            <li
            ref={myRef}
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