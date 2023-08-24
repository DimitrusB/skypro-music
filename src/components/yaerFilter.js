import {   useState } from 'react';
import * as S from "./styled/Filters.style"
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

    <S.Button
    type="button"
    onClick={toggleDropdown}>
      <S.Choose isOpen={isOpen}
      >
        {to || name}
      </S.Choose>
      {isOpen && (
        <S.Options id='1'>
          {years.map((year) => (
            <S.Option
              key={year.value}
              onClick={() => {
                setTo(year.label);
              }}
            >
              {year.label}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.Button>
  );

}