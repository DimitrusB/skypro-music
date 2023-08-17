import {   useState } from 'react';

export function YearFilter() {
  // const myRef=createRef();
  const [visibleFilter, setVisibleFilter] = useState("years");
  const [to, setTo] = useState("");
  const [open, setOpen] = useState(false);

  // const handleClickOutside = () => {
  //   if (!dropdown || !dropdownMenu){
  //   setOpen(open);
  //   }
  // };
  const toggleDropdown = () => {
    setOpen(!open);
    setVisibleFilter('years')
    console.log(visibleFilter);
  };
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // const dropdown = document.querySelectorAll('.filter__options');
  // const dropdownMenu = document.querySelectorAll('.filter__option');
  




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
    isVisible={visibleFilter === 'years'}
    onClick={toggleDropdown}>
      <div
        className={`filter__choose${open ? " _active" : ""}`}
      >
        {to || "Году выпуска"}
      </div>
      {open && (
        <ul className="filter__options" id='1'>
          {years.map((year) => (
            <li
              // ref={myRef}
              key={year.value}
              className="filter__option"
              onClick={() => {
                setTo(year.label);
                setOpen(false);
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