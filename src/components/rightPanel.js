import playlist1 from "../img/playlist01.png";
import playlist2 from "../img/playlist02.png";
import playlist3 from "../img/playlist03.png";
import iconSprite from "../img/icon/sprite.svg";
import "./rightPanel.css";
import { NamePlaylist } from "./NamePlaylist";

export function Panelplaylist() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Dmitriy.Borisevich</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref={`${iconSprite}#logout`}></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <NamePlaylist src={playlist1} />
          <NamePlaylist src={playlist2} />
          <NamePlaylist src={playlist3} />
        </div>
      </div>
    </div>
  );
}
