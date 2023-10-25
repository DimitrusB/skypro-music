import iconSprite from "../../img/icon/sprite.svg";
import { NamePlaylist } from "../Playlists/NamePlaylist";
import * as S from "./rightpanel.style";
import UserContext from "../UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import clientStorage from "../../utils/client-storage";
import { useDispatch, useSelector } from "react-redux";
import { setPlaying } from "../../store/actions/trackActions";


export function Panelplaylist({setIsLogged}) {
  // const { email, resetEmail } = useContext(UserContext);
  const email = clientStorage.getEmailUser();
  const navigate = useNavigate();
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();
  const { whiteTheme, setWhiteTheme } = useContext(UserContext);

  const handleResetClick = () => {
    if(isPlaying) {
      dispatch(setPlaying(false));
    }
    clientStorage.clearUserInfo();
    setIsLogged(null);
    navigate('/signin');
  };
  return (
    <S.MainSidebar>
      <S.PersonalSidebar>
        <S.PersonalName>{email}</S.PersonalName>
        <S.SidebarIcon>
          <svg alt="logout" onClick={handleResetClick}>
          <use
                        xlinkHref={`${iconSprite}${
                          whiteTheme ? "#icon-logoutWhite" : "#logout"
                        }`}
                      ></use>
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
