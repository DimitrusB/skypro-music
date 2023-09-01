import styled from "styled-components"


export const MainCenterblock = styled.div`
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;
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
`
export const SidebarIcon = styled.div`
width: 43px;
height: 43px;
background-color: #313131;
border-radius: 50%;
cursor: pointer;
`
export const Main = styled.div`
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: nowrap;
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
export const MainText = styled.h1`
text-align: center;
color: #FFF;
font-variant-numeric: lining-nums proportional-nums;
font-feature-settings: 'clig' off, 'liga' off;
/* Pres → Heading Xl */
font-family: StratosSkyeng;
font-size: 160px;
font-style: normal;
font-weight: 400;
line-height: 168px; `

export const CenterError = styled.div `
display: flex;
    margin-top: 285px;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`
export const PageNotFound = styled.p`
color: #FFF;

font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 40px;`

export const Crying = styled.div`
display: flex;
    align-items: center;`

export const TextDel = styled.p`
width: 271px;
color: #4E4E4E;
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: -0.054px;`

export const ButtonBackMain = styled.button`
width: 278px;
height: 62px;
background-color: #580EA2;
border-radius: 6px;
margin-left: 4px;
border: none;
margin-top: 30px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;

margin-top:36px;`



export const ButtonBackMainA =styled.a `
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #FFFFFF;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
            &:hover {
                  background-color: #3F007D;
               }
            &:active {
                   background-color: #271A58;
                 }

  `