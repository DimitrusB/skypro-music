import styled from 'styled-components';

export const Choose = styled.div`
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
export const Button = styled.div`
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

export const Options = styled.ul`
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
export const Option = styled.li `
cursor: pointer;
background: #313131;
color: #FFF;
width: 115px;
&:hover{
  color: #B672FF;
  text-decoration: underline;
}
`