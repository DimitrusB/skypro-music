import playlist1 from "../img/playlist01.png";
import playlist2 from "../img/playlist02.png";
import playlist3 from "../img/playlist03.png";
import iconSprite from "../img/icon/sprite.svg";
import { NamePlaylist } from "./NamePlaylist";
import * as S from "./styled/rightpanel.style"
import { Link } from "react-router-dom";


export function Panelplaylist() {
  return (
    <S.MainSidebar>
      <S.PersonalSidebar>
        <S.PersonalName>Dmitriy.Borisevich</S.PersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref={`${iconSprite}#logout`}></use>
          </svg>
        </S.SidebarIcon>
      </S.PersonalSidebar>
      <S.SidebarBlock>
        <S.SidebarList>
          <Link to="/category/1">
          <NamePlaylist src={playlist1} />
          </Link>
          <Link to="/category/2">
          <NamePlaylist src={playlist2} />
          </Link>
          <Link to="/category/3">
          <NamePlaylist src={playlist3} />
          </Link>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
