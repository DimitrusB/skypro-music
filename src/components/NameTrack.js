import React, { useState, useEffect } from 'react';
import iconSprite from "../img/icon/sprite.svg";
import styled from 'styled-components';

const StyledPlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
const StyledPlaylistTrack = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
const StyledTrackTitled = styled.div`
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
width: 447px;
`
const StyledTrackTitleImage = styled.div`
width: 51px;
height: 51px;
padding: 16px;
background: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 17px;

${({ isLoading }) =>
isLoading &&
`
background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
background-size: 200% 100%;
animation: loading 1.5s infinite;
width: 51px;
height: 51px;
`}`
const StyledTrackTitleSvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;

${({ isLoading }) =>
isLoading &&
`
visibility: hidden;
`}`
const StyledTrackTitleText = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;

${({ isLoading }) =>
isLoading &&
`
background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
background-size: 200% 100%;
animation: loading 1.5s infinite;
width: 356px;
height: 19px;
`}`
const StyledTrackTitleLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;

${({ isLoading }) =>
isLoading &&
`
visibility: hidden;
`}`
const StyledTrackTitleSpan = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4e4e4e;
`
const StyledTrackAuthor = styled.div`
width: 321px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;

${({ isLoading }) =>
isLoading &&
`
background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
background-size: 200% 100%;
animation: loading 1.5s infinite;
width: 271px;
height: 19px;
`}`
const StyledTrackAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
text-align: left;

${({ isLoading }) =>
isLoading &&
`
visibility: hidden;
`}`
const StyledTrackAlbum = styled.div`
width: 245px;

${({ isLoading }) =>
isLoading &&
`
background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
background-size: 200% 100%;
animation: loading 1.5s infinite;
width: 305px;
height: 19px;
`}`
const StyledTrackAlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;

${({ isLoading }) =>
isLoading &&
`
visibility: hidden;
`}`
const StyledTrackTimeSvg = styled.svg`
width: 14px;
height: 12px;
margin-right: 17px;
fill: transparent;
stroke: #696969;
`
const StyledTrackTimeText = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`
export function NameTrack ({track , author , mix , album, time }) {

  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timeoutId);
  }, []);

    return (
        <StyledPlaylistItem>
        <StyledPlaylistTrack>
          <StyledTrackTitled>
            <StyledTrackTitleImage isLoading={isLoading}>
              <StyledTrackTitleSvg isLoading={isLoading}  alt="music">
                <use xlinkHref={`${iconSprite}#icon-note`}></use>
              </StyledTrackTitleSvg>
            </StyledTrackTitleImage>
            <StyledTrackTitleText isLoading={isLoading}>
              <StyledTrackTitleLink isLoading={isLoading} href="http://">
                {track} <StyledTrackTitleSpan>{mix}</StyledTrackTitleSpan>
              </StyledTrackTitleLink>
            </StyledTrackTitleText>
          </StyledTrackTitled>
          <StyledTrackAuthor isLoading={isLoading}>
            <StyledTrackAuthorLink isLoading={isLoading} href="http://">
              {author}
            </StyledTrackAuthorLink>
          </StyledTrackAuthor>
          <StyledTrackAlbum isLoading={isLoading}>
            <StyledTrackAlbumLink isLoading={isLoading} href="http://">
              {album}
            </StyledTrackAlbumLink>
          </StyledTrackAlbum>
          <div>
            <StyledTrackTimeSvg alt="time">
              <use xlinkHref={`${iconSprite}#icon-note`}></use>
            </StyledTrackTimeSvg>
            <StyledTrackTimeText>{time}</StyledTrackTimeText>
          </div>
        </StyledPlaylistTrack>
      </StyledPlaylistItem>
    )
}