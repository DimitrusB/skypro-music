import React, { useState, useEffect, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconSprite from "../../img/icon/sprite.svg";
import { addFavoritesTracks } from "../../store/actions/thunk/addfavorites";
import { formatTime } from "../func";
import UserContext from "../UserContext";
import * as S from "./NameTracks.Style";
import { delFavoritesTracks } from "../../store/actions/thunk/delFavorites";
import { getAllFavoriteTracks } from "../../store/actions/thunk/getListFavorites";
import { toggleLikeStatus } from "../../store/actions/trackActions";
import clientStorage from "../../utils/client-storage";

export function NameTrack({
  track,
  id,
  author,
  mix,
  album,
  time,
  onClick,
  trackfile,
  playing,
}) {
  const formattedTime = formatTime(time);
  const isPlaying = useSelector((state) => state.isPlaying);
  const isLike = useSelector((state) => state.isLike[id]);
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.track);
  const favoritetracks = useSelector((state) => state.favoritetracks);
  const token = clientStorage.getTokenUser();
  const setToken = clientStorage.setTokenUser;
  const { isLoading, setIsLoading } = useContext(UserContext);
  const trackRef = useRef(null); 

  useEffect(() => {
    if (isPlaying && playing && trackRef.current) { 
      trackRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [isPlaying, playing]);

  const handleLike = () => {
    const trackToAdd = tracks.find((track) => track.id === id);
    
    // Проверяем, существует ли уже трек в избранном
    const isTrackAlreadyLiked = favoritetracks.some((track) => track.id === id);


    
    
    if (!isTrackAlreadyLiked) {
      dispatch(addFavoritesTracks(trackToAdd, token, setToken))
        .then(() => dispatch(getAllFavoriteTracks(token.access, token.refresh)));
    } else {
      console.log('Трек уже добавлен в избранное.');
    }
  }  

  const handleDislike = async () => {
    await dispatch(delFavoritesTracks(id, token, setToken));
    dispatch(toggleLikeStatus(id));
    dispatch(getAllFavoriteTracks(token.access, token.refresh));
    // window.location.reload()
  };

  return (
    <S.PlaylistItem ref={trackRef}>
      <S.PlaylistTrack>
        <S.TrackTitled>
          {isPlaying && playing ? (
            <S.TrackTitleImage isLoading={isLoading}>
              <S.Circle isLoading={isLoading} alt="music">
                <use xlinkHref={`${iconSprite}#icon-note`}></use>
              </S.Circle>
            </S.TrackTitleImage>
          ) : (
            <S.TrackTitleImage isLoading={isLoading}>
              <S.TrackTitleSvg isLoading={isLoading} alt="music">
                <use xlinkHref={`${iconSprite}#icon-note`}></use>
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
          )}
          {isPlaying && playing ? (
            <S.TrackTitleText isLoading={isLoading}>
              <S.TrackTitleLink isLoading={isLoading} onClick={onClick}>
                {track}
                <S.TrackTitleSpan>{mix}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          ) : (
            <S.TrackTitleText isLoading={isLoading}>
              <S.TrackTitleLink isLoading={isLoading} onClick={onClick}>
                {track}
                <S.TrackTitleSpan>{mix}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          )}
        </S.TrackTitled>
        <S.TrackAuthor isLoading={isLoading}>
          <S.TrackAuthorLink isLoading={isLoading} onClick={onClick}>
            {author}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum isLoading={isLoading}>
          <S.TrackAlbumLink isLoading={isLoading} onClick={onClick}>
            {album}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <div>
          <S.TrackTimeSvg
            data={id}
            alt="time"
            onClick={isLike ? handleDislike : handleLike}
          >
            <use
              xlinkHref={`${iconSprite}${
                isLike ? "#icon-likeActive" : "#icon-like"
              }`}
            ></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{formattedTime}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
