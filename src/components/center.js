import styled from "styled-components";
import iconSprite from "../img/icon/sprite.svg";
import { NameTrack } from "./NameTrack";
import "./center.css";
import "./filters.css";
import { GenreFilter } from "./genreFilter";
import { TrackFilter } from "./trckFilter";
import { YearFilter } from "./yaerFilter";
import { useState } from "react";



const StyledMainCenterblock = styled.div`
width: auto;
-webkit-box-flex: 3;
-ms-flex-positive: 3;
flex-grow: 3;
padding: 20px 40px 20px 111px;
`
const StyledMainCenterblockSearch = styled.div`
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
const StyledMainSearchSvg = styled.svg`
width: 17px;
height: 17px;
margin-right: 5px;
stroke: #ffffff;
fill: transparent;
`
const StyledMainSearchText = styled.input`
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
const StyledCentralblockH2 = styled.h2`
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 72px;
letter-spacing: -0.8px;
margin-bottom: 45px;
`

const StyledCentralblockFilter = styled.div`
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
const StyledCentralblockContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
`

const StyledFilterTitle= styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;
`
const StyledFContentTitle= styled.div`
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

const StyledFPlaylistTitleCol = styled.div`
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
const StyledFPlaylistTitleSvg= styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`
const StyledFPlaylistContent= styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: auto;
`

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
    <StyledMainCenterblock>
      <StyledMainCenterblockSearch>
        <StyledMainSearchSvg>
          <use xlinkHref={`${iconSprite}#icon-search`}></use>
        </StyledMainSearchSvg>
        <StyledMainSearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </StyledMainCenterblockSearch>
      <StyledCentralblockH2>Треки</StyledCentralblockH2>
      <StyledCentralblockFilter>
        <StyledFilterTitle>Искать по:</StyledFilterTitle> 
        <TrackFilter name="По исполнителю" onClick={() => handleFilterToggle("track")} isOpen={trackFilterOpen}/>
        <YearFilter name = "Году выпуска" onClick={() => handleFilterToggle("year")} isOpen={yearFilterOpen} />
        <GenreFilter name = "Жанру" onClick={() => handleFilterToggle("genre")} isOpen={genreFilterOpen} />
        {/* <Filter></Filter> */}
      </StyledCentralblockFilter>
      <StyledCentralblockContent>
        <StyledFContentTitle>
          <StyledFPlaylistTitleCol col = 'col01'>Трек</StyledFPlaylistTitleCol>
          <StyledFPlaylistTitleCol col = 'col02'>ИСПОЛНИТЕЛЬ</StyledFPlaylistTitleCol>
          <StyledFPlaylistTitleCol col = 'col03'>АЛЬБОМ</StyledFPlaylistTitleCol>
          <StyledFPlaylistTitleCol col = 'col04'>
            <StyledFPlaylistTitleSvg alt="time">
              <use xlinkHref={`${iconSprite}#icon-watch`}></use>
            </StyledFPlaylistTitleSvg>
          </StyledFPlaylistTitleCol>
        </StyledFContentTitle>
        <StyledFPlaylistContent>
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
        </StyledFPlaylistContent>
      </StyledCentralblockContent>
    </StyledMainCenterblock>
  );
}
