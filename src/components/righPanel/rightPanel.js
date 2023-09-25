// import playlist1 from "../img/playlist01.png";
// import playlist2 from "../img/playlist02.png";
// import playlist3 from "../img/playlist03.png";
import iconSprite from "../../img/icon/sprite.svg";
import { NamePlaylist } from "../Playlists/NamePlaylist";
import * as S from "./rightpanel.style";
import UserContext from "../UserContext";
import { useContext } from "react";

export function Panelplaylist() {
  const { email, resetEmail } = useContext(UserContext);

  const handleResetClick = () => {
    resetEmail(email);
  };
  return (
    <S.MainSidebar>
      <S.PersonalSidebar>
        <S.PersonalName>{email}</S.PersonalName>
        <S.SidebarIcon>
          <svg alt="logout" onClick={handleResetClick}>
            <use xlinkHref={`${iconSprite}#logout`}></use>
          </svg>
        </S.SidebarIcon>
      </S.PersonalSidebar>
      <S.SidebarBlock>
        <S.SidebarList>
          <NamePlaylist />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
