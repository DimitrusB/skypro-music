import iconSprite from "../img/icon/sprite.svg";
import { NameTrack } from "./NameTrack";
import { GenreFilter } from "./genreFilter";
import { TrackFilter } from "./trckFilter";
import { YearFilter } from "./yaerFilter";
import { useState } from "react";
import * as S from "./styled/Center.style"


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
    <S.MainCenterblock>
      <S.MainCenterblockSearch>
        <S.MainSearchSvg>
          <use xlinkHref={`${iconSprite}#icon-search`}></use>
        </S.MainSearchSvg>
        <S.MainSearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.MainCenterblockSearch>
      <S.CentralblockH2>Треки</S.CentralblockH2>
      <S.CentralblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle> 
        <TrackFilter name="По исполнителю" onClick={() => handleFilterToggle("track")} isOpen={trackFilterOpen}/>
        <YearFilter name = "Году выпуска" onClick={() => handleFilterToggle("year")} isOpen={yearFilterOpen} />
        <GenreFilter name = "Жанру" onClick={() => handleFilterToggle("genre")} isOpen={genreFilterOpen} />
        {/* <Filter></Filter> */}
      </S.CentralblockFilter>
      <S.CentralblockContent>
        <S.FContentTitle>
          <S.FPlaylistTitleCol col = 'col01'>Трек</S.FPlaylistTitleCol>
          <S.FPlaylistTitleCol col = 'col02'>ИСПОЛНИТЕЛЬ</S.FPlaylistTitleCol>
          <S.FPlaylistTitleCol col = 'col03'>АЛЬБОМ</S.FPlaylistTitleCol>
          <S.FPlaylistTitleCol col = 'col04'>
            <S.FPlaylistTitleSvg alt="time">
              <use xlinkHref={`${iconSprite}#icon-watch`}></use>
            </S.FPlaylistTitleSvg>
          </S.FPlaylistTitleCol>
        </S.FContentTitle>
        <S.FPlaylistContent>
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
        </S.FPlaylistContent>
      </S.CentralblockContent>
    </S.MainCenterblock>
  );
}
