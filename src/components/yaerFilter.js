import {   useState } from 'react';
import styled from 'styled-components';

const FilterChoose = styled.div`
cursor: pointer;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
background: transparent;
color: white;
${({ isOpen }) =>
isOpen &&
`
background-color: transparent;
`}
&:hover{
  color: #B672FF;
}
`
const FilterButton = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
position: relative;

&:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
}
&:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
}
&:not(:last-child) {
  margin-right: 10px;
  width: 170px;
}  
`
const FilterOptions = styled.ul`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
list-style: none;
overflow-y: scroll;
position: absolute;
height: 237px;
width: auto;
border-radius: 12px;
background: #313131;
gap: 28px;
padding: 34px;
flex-wrap: nowrap;
z-index: 1;
margin-top: 10px;
margin-left: -20px;


&::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
}
&::-webkit-scrollbar {
  width: 4px;
  background-color: #4B4949;
}
&::-webkit-scrollbar-thumb:hover {
  background-color: #FFFFFF;
}
`
const FilterOption = styled.li `
cursor: pointer;
background: #313131;
color: #FFF;
width: 115px;
&:hover{
  color: #B672FF;
  text-decoration: underline;
}
`
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

    <FilterButton
    type="button"
    onClick={toggleDropdown}>
      <FilterChoose isOpen={isOpen}
      >
        {to || name}
      </FilterChoose>
      {isOpen && (
        <FilterOptions id='1'>
          {years.map((year) => (
            <FilterOption
              key={year.value}
              onClick={() => {
                setTo(year.label);
              }}
            >
              {year.label}
            </FilterOption>
          ))}
        </FilterOptions>
      )}
    </FilterButton>
  );

}