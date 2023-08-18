import {   useState } from 'react';

export function YearFilter(props) {
  const { id, name, onClick, isOpen } = props;
  const [to, setTo] = useState("");

  const toggleDropdown = () => {
    onClick(id);
  };

  const years = [
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

    <div className="filter__button button-year _btn-text"
    type="button"
    onClick={toggleDropdown}>
      <div
        className={`filter__choose${isOpen ? " _active" : ""}`}
      >
        {to || name}
      </div>
      {isOpen && (
        <ul className="filter__options" id='1'>
          {years.map((year) => (
            <li
              key={year.value}
              className="filter__option"
              onClick={() => {
                setTo(year.label);
              }}
            >
              {year.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}