import React, { useState, useEffect } from 'react';
import iconSprite from "../img/icon/sprite.svg";
import * as S from "./styled/NameTracks.Style"
export function NameTrack ({track , author , mix , album, time, onClick, trackfile}) {

  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timeoutId);
  }, []);

    return (
        <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitled>
            <S.TrackTitleImage isLoading={isLoading}>
              <S.TrackTitleSvg isLoading={isLoading}  alt="music">
                <use xlinkHref={`${iconSprite}#icon-note`}></use>
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <S.TrackTitleText isLoading={isLoading}>
              <S.TrackTitleLink isLoading={isLoading} onClick={onClick}>
                {track} <S.TrackTitleSpan>{mix}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitled>
          <S.TrackAuthor isLoading={isLoading}>
            <S.TrackAuthorLink isLoading={isLoading} onClick={onClick}>
              {author}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum isLoading={isLoading}>
          <S.TrackAlbumLink isLoading={isLoading} href="http://">
              {album}
            </S.TrackAlbumLink>
          </S.TrackAlbum>
          <div>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref={`${iconSprite}#icon-note`}></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>{time}</S.TrackTimeText>
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    )
}