import styled from "styled-components";

export const Choose = styled.div`
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  color: white;

  ${(props) =>
    props.whiteTheme &&
    `
  color: #000;
  
  `}

  ${({ isOpen }) =>
    isOpen &&
    `
background-color: transparent;
`}
  &:hover {
    color: #b672ff;
  }
`;
export const Number = styled.span`
  position: absolute;
  background-color: #ad61ff;
  border-radius: 50%;
  width: 26px;
  top: -20px;
  right: -25px;
  height: 25.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: StratosSkyeng;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
`;

export const Button = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;

  ${(props) =>
    props.whiteTheme &&
    `
  border: 1px solid #000;
  
  `}

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
`;

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
  ${(props) =>
    props.whiteTheme &&
    `
  background: #F6F5F3;
  `}

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
  }
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #4b4949;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #ffffff;
  }
`;
export const Option = styled.li`
  cursor: pointer;
  background: #313131;
  color: #fff;
  width: 115px;
  color: ${(props) => (props.isSelected ? "#B672FF" : "#FFFFFF")};

  &:hover {
    color: #b672ff;
    text-decoration: underline;
  }
  ${(props) =>
    props.whiteTheme &&
    `
  color: #000;
  background: #F6F5F3;

  `}
`;
