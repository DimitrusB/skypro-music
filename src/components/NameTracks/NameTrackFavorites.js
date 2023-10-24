import React, { useState, useEffect, useContext } from "react";
import iconSprite from "../../img/icon/sprite.svg";
import UserContext from "../UserContext";
import * as S from "./NameTrackFavorites.style";

export function NameTrackFavorites({ track, author, mix, album, time }) {
  const { isLoading, setIsLoading } = useContext(UserContext);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitled>
          <S.TrackTitleImage isLoading={isLoading}>
            <S.TrackTitleSvg isLoading={isLoading} alt="music">
              <use xlinkHref={`${iconSprite}#icon-note`}></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText isLoading={isLoading}>
            <S.TrackTitleLink isLoading={isLoading} href="http://">
              {track} <S.TrackTitleSpan>{mix}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitled>
        <S.TrackAuthor isLoading={isLoading}>
          <S.TrackAuthorLink isLoading={isLoading} href="http://">
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
            <use xlinkHref={`${iconSprite}#icon-likeActive`}></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{time}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
