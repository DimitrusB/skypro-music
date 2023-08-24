import playlist1 from "../img/playlist01.png";
import playlist2 from "../img/playlist02.png";
import playlist3 from "../img/playlist03.png";
import iconSprite from "../img/icon/sprite.svg";
import { NamePlaylist } from "./NamePlaylist";
import styled from "styled-components";

const StyledMainSidebar = styled.div`
max-width: 418px;
padding: 20px 90px 20px 78px;
`
const StyledPersonalSidebar = styled.div`
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
const StyledPersonalName = styled.p`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
margin-right: 16px;
`
const StyledSidebarIcon = styled.div`
width: 43px;
height: 43px;
background-color: #313131;
border-radius: 50%;
cursor: pointer;
`
const StyledSidebarBlock = styled.div`
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
const StyledSidebarList = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`

export function Panelplaylist() {
  return (
    <StyledMainSidebar>
      <StyledPersonalSidebar>
        <StyledPersonalName>Dmitriy.Borisevich</StyledPersonalName>
        <StyledSidebarIcon>
          <svg alt="logout">
            <use xlinkHref={`${iconSprite}#logout`}></use>
          </svg>
        </StyledSidebarIcon>
      </StyledPersonalSidebar>
      <StyledSidebarBlock>
        <StyledSidebarList>
          <NamePlaylist src={playlist1} />
          <NamePlaylist src={playlist2} />
          <NamePlaylist src={playlist3} />
        </StyledSidebarList>
      </StyledSidebarBlock>
    </StyledMainSidebar>
  );
}
