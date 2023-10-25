import styled from "styled-components"

export const Main = styled.div`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`
export const Container = styled.div`
max-width: 1920px;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #181818;
`
export const Wrapper= styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
background-color: #383838;
`
export const MainCenterblock = styled.div`
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;

${props => props.whiteTheme && `
background: #FFF;

`}
`
export const MainCenterblockSearch = styled.div`
width: 100%;
border-bottom: 1px solid #4e4e4e;
margin-bottom: 51px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
export const MainSearchSvg = styled.svg`
width: 17px;
height: 17px;
margin-right: 5px;
stroke: #ffffff;
fill: transparent;
`
export const MainSearchText = styled.input`
-webkit-box-flex: 100;
-ms-flex-positive: 100;
flex-grow: 100;
background-color: transparent;
border: none;
padding: 13px 10px 14px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
&:-webkit-input-placeholder {
  background-color: transparent;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
`
export const CentralblockH2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
${props => props.whiteTheme && `
color: #000;

`}
`

export const CentralblockFilter = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-bottom: 51px;
`
export const CentralblockContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
`

export const FilterTitle= styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`
export const FContentTitle= styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;
`

export const FPlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;

  ${({ col }) =>
    col === 'col01' &&
    `
    width: 447px;
  `};

  ${({ col }) =>
    col === 'col02' &&
    `
    width: 321px;
  `};

  ${({ col }) =>
    col === 'col03' &&
    `
    width: 245px;
  `};

  ${({ col }) =>
    col === 'col04' &&
    `
    width: 60px;
    text-align: end;
  `};
`
export const FPlaylistTitleSvg= styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const FPlaylistContent= styled.div`
overflow: auto;
max-height: 500px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: auto;
::-webkit-scrollbar {
    width: 0px;
}
::-webkit-scrollbar-track {
    background: transparent; 
}
::-webkit-scrollbar-thumb {
    background: transparent;
}
-ms-overflow-style: none;
scrollbar-width: none;
`;
export const MainSidebar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;

${props => props.whiteTheme && `
background: #ffffff;

`}
`
export const PersonalSidebar = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
padding: 12px 0 15px 0;
`
export const PersonalName = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
margin-right: 16px;
${props => props.whiteTheme && `
color: #000;

`}
`
export const SidebarIcon = styled.div`
width: 43px;
height: 43px;
background-color: #313131;
border-radius: 50%;
cursor: pointer;
${props => props.whiteTheme && `
background-color: #ffffff;

`}
`
export const SidebarBlock = styled.div`
height: 100%;
padding: 240px 0 0 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`

