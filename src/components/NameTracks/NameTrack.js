import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconSprite from "../../img/icon/sprite.svg";
import { addFavoritesTracks } from "../../store/actions/thunk/addfavorites";
import { formatTime } from "../func";
import UserContext from "../UserContext";
import * as S from "./NameTracks.Style";
import { delFavoritesTracks } from "../../store/actions/thunk/delFavorites";

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
  const [isLoading, setIsLoading] = useState(true);
  const isPlaying = useSelector((state) => state.isPlaying);
  const isLike = useSelector((state) => state.isLike[id]);
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.track);
  const currentTrackId = useSelector((state) => state.currentTrackId);
  const { token, setToken } = useContext(UserContext);
  const playFavorite = useSelector((state) => state.playFavorite);

  const handleLike = () => {
    dispatch(addFavoritesTracks(tracks.find((track) => track.id === currentTrackId), token, setToken));
  };

  const handleDislike = () => {
    dispatch(delFavoritesTracks(id, token, setToken));
  };

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
          <S.TrackAlbumLink isLoading={isLoading} href="http://">
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
