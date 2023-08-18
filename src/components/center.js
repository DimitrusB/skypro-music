import iconSprite from "../img/icon/sprite.svg";
import { NameTrack } from "./NameTrack";
import "./center.css";
import "./filters.css";
import { GenreFilter } from "./genreFilter";
import { TrackFilter } from "./trckFilter";
import { YearFilter } from "./yaerFilter";
import { useState } from "react";

export function Center() {

const [trackFilterOpen, setTrackFilterOpen] = useState(false);
const [yearFilterOpen, setYearFilterOpen] = useState(false);
const [genreFilterOpen, setGenreFilterOpen] = useState(false);
  
const handleFilterToggle = (filter) => {
  if (filter === "track") {
    setTrackFilterOpen(!trackFilterOpen);
    setYearFilterOpen(false);
    setGenreFilterOpen(false);
  } else if (filter === "year") {
    setYearFilterOpen(!yearFilterOpen);
    setGenreFilterOpen(false);
    setTrackFilterOpen(false);
  } else if (filter === "genre") {
    setGenreFilterOpen(!genreFilterOpen);
    setYearFilterOpen(false);
    setTrackFilterOpen(false);
  }
};

return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref={`${iconSprite}#icon-search`}></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div> 
        <TrackFilter name="По исполнителю" onClick={() => handleFilterToggle("track")} isOpen={trackFilterOpen}/>
        <YearFilter name = "Году выпуска" onClick={() => handleFilterToggle("year")} isOpen={yearFilterOpen} />
        <GenreFilter name = "Жанру" onClick={() => handleFilterToggle("genre")} isOpen={genreFilterOpen} />
        {/* <Filter></Filter> */}
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref={`${iconSprite}#icon-watch`}></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
        <NameTrack track="Guilt" author="Nero" album="Welcome Reality" time="4:44" />
        <NameTrack track="Elektro" author="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22" />
        <NameTrack track="I’m Fire" author="Ali Bakgor" album="I’m Fire" time="2:22" />
        <NameTrack track="Non Stop" author="Стоункат, Psychopath" album="Non Stop" time="4:12" />
        <NameTrack track="Run Run" author="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54" />
        <NameTrack track="Eyes on Fire" author="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20" />
        <NameTrack track="Mucho Bien" mix="(Hi Profile Remix)" author="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time="3:41" />
        <NameTrack track="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" />
        <NameTrack track="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" />
        <NameTrack track="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" />
        <NameTrack track="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" />
        <NameTrack track="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" />
        <NameTrack track="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" />
        <NameTrack track="Knives n Cherries" author="minthaze" album="Captivating" time="1:48" />
        <NameTrack track="How Deep Is Your Love" author="Calvin Harris, Disciples" album="How Deep Is Your Love" time="3:32" />
        <NameTrack track="Morena" author="Tom Boxer" album="Soundz Made in Romania" time="3:36" />
        <NameTrack track="" author="" album="" time="" />
        </div>
      </div>
    </div>
  );
}
