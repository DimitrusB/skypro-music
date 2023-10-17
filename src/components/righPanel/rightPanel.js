import iconSprite from "../../img/icon/sprite.svg";
import { NamePlaylist } from "../Playlists/NamePlaylist";
import * as S from "./rightpanel.style";
import UserContext from "../UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function Panelplaylist() {
  // const { email, resetEmail } = useContext(UserContext);
  const email = localStorage.getItem('email')
  const navigate = useNavigate();

  const handleResetClick = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    navigate('/signin')
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
