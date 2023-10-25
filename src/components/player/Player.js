import iconSprite from "../../img/icon/sprite.svg";
import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import * as S from "./player.style";
import ProgressBar from "../progressBar/progressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  setNextTrack,
  setPlaying,
  setPreviousTrack,
  setVolume,
  shuffleTracks,
  toggleLoop,
} from "../../store/actions/trackActions";
import { addFavoritesTracks } from "../../store/actions/thunk/addfavorites";
import { delFavoritesTracks } from "../../store/actions/thunk/delFavorites";
import clientStorage from "../../utils/client-storage";
import UserContext from "../UserContext";
import { getAllFavoriteTracks } from "../../store/actions/thunk/getListFavorites";

export function AudioPlayer() {
  const { isLoading, setIsLoading } = useContext(UserContext);
  const volume = useSelector((state) => state.volume);
  const isLoop = useSelector((state) => state.isLoop);
  const isShuffle = useSelector((state) => state.isShuffle);
  const isLike = useSelector((state) => state.isLike);
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const favoritetracks = useSelector((state) => state.favoritetracks);
  const audioRef = useRef(null);
  const playFavorite = useSelector((state) => state.playFavorite);
  const tracks = useSelector((state) => state.track);
  const currentTrackId = useSelector((state) => state.currentTrackId);
  const [currentTrackList, setCurrentTrackList] = useState("");
  const token = clientStorage.getTokenUser();
  const setToken = clientStorage.setTokenUser;
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    setCurrentTrackList(tracks);
    if (!currentTrackList.length || !audioRef.current) return;
    const currentTrack = currentTrackList.find(
      (track) => track.id === currentTrackId
    );
    audioRef.current.src = currentTrack?.track_file;

    const loadAudio = async () => {
      try {
        await audioRef.current.load();
        if (audioRef.current.readyState >= 3) {
          if (isPlaying) {
            audioRef.current
              .play()
              .catch((error) =>
                console.error("Ошибка воспроизведения аудио:", error)
              );
          }
        }
      } catch (error) {
        console.error("Ошибка загрузки аудио:", error);
      }
    };
    loadAudio();
  }, [currentTrackId, isPlaying, currentTrackList]);

  const handleShuffle = () => {
    dispatch(shuffleTracks());
  };

  const handleNextTrack = () => {
    console.log("handleNextTrack triggered");
    const currentTrackList = playFavorite ? favoritetracks : tracks;
    dispatch(
      setNextTrack(
        currentTrackList.find((track) => track.id === currentTrackId)
      )
    );
    updateCurrentTime();
  };

  const handlePreviousTrack = () => {
    const currentTrackList = playFavorite ? favoritetracks : tracks;
    dispatch(
      setPreviousTrack(
        currentTrackList.find((track) => track.id === currentTrackId)
      )
    );
    updateCurrentTime();
  };

  // --------------------------------------------------VOLUME
  const handleChangeVolume = (event) => {
    const value = parseFloat(event.target.value);
    dispatch(setVolume(value));
  };

  const updateAudioVolume = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    updateAudioVolume();
  }, [volume, updateAudioVolume]);
  // --------------------------------------------------

  const updateCurrentTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // --------------------------------------------------PLAY

  const handleTogglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        const pausePromise = audioRef.current.pause();
        if (pausePromise !== undefined) {
          pausePromise
            .then(() => {
              dispatch(setPlaying(false));
            })
            .catch((error) => {
              console.log("pause promise rejected:", error);
            });
        }
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              dispatch(setPlaying(true));
            })
            .catch((error) => {
              console.log("play promise rejected:", error);
            });
        }
      }
    }
  };

  const handleCanPlayThrough = () => {
    setCanPlay(true);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  useEffect(() => {}, [isPlaying, currentTrackList.track_file]);
  // --------------------------------------------------

  const handleLike = () => {
    const currentTrack = currentTrackList.find(
      (track) => track.id === currentTrackId
    );

    if (!favoritetracks.includes(currentTrack)) {
      dispatch(addFavoritesTracks(currentTrack, token, setToken))
      .then(() => dispatch(getAllFavoriteTracks(token.access , token.refresh)));
    }else{
      console.log('Трек уже добавлен в избранное.');
    }
  };

  const handleDislike = () => {
    const currentTrack = currentTrackList.find(
      (track) => track.id === currentTrackId
    );

    dispatch(delFavoritesTracks(currentTrackId, token, setToken));
    dispatch(getAllFavoriteTracks(token.access, token.refresh));
  };

  // --------------------------------------------------REPEAT
  const handleToggleLoop = () => {
    dispatch(toggleLoop());
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLoop;
    }
  }, [isLoop]);
  // --------------------------------------------------

  const handleSeek = (seekTime) => {
    audioRef.current.currentTime = seekTime;
  };

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    currentTrackList.length && (
      <>
        <audio
          // key={currentTrackList[currentTrackIndex]?.track_id}
          ref={audioRef}
          onCanPlayThrough={handleCanPlayThrough}
          onPlay={() => dispatch(setPlaying(true))}
          onPause={() => dispatch(setPlaying(false))}
          onLoadedMetadata={() => setDuration(audioRef.current.duration)}
          loop={isLoop}
          onTimeUpdate={updateCurrentTime}
          onEnded={handleNextTrack}
        >
          <source
            src={
              currentTrackList.find((track) => track.id === currentTrackId)
                ?.track_file
            }
            type="audio/mpeg"
          />
        </audio>
        <S.MainBar>
          <S.MainBarContent>
            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              onSeek={handleSeek}
              isDragging={isDragging}
              onDown={() => setIsDragging(true)}
              onUp={() => setIsDragging(false)}
            ></ProgressBar>
            <S.BarPlayerProgress></S.BarPlayerProgress>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.BarPlayerControls>
                  <S.PlayerBtn butt="prev" onClick={handlePreviousTrack}>
                    <S.PlayerBtnSvg butsvg="prev" alt="prev">
                      <title>Предыдущий трек</title>
                      <use xlinkHref={`${iconSprite}#icon-prev`}></use>
                    </S.PlayerBtnSvg>
                  </S.PlayerBtn>
                  <S.PlayerBtn
                    butt={isPlaying ? "pause" : "play"}
                    onClick={handleTogglePlay}
                  >
                    <S.PlayerBtnSvg
                      butsvg={isPlaying ? "pause" : "play"}
                      alt={isPlaying ? "Пауза" : "Воспроизведение"}
                    >
                      <title>{isPlaying ? "Пауза" : "Воспроизведение"}</title>
                      <use
                        xlinkHref={`${iconSprite}${
                          isPlaying ? "#icon-pause" : "#icon-play"
                        }`}
                      ></use>
                    </S.PlayerBtnSvg>
                  </S.PlayerBtn>

                  <S.PlayerBtn butt="next" onClick={handleNextTrack}>
                    <S.PlayerBtnSvg butsvg="next" alt="next">
                      <title>Следующий трек</title>
                      <use xlinkHref={`${iconSprite}#icon-next`}></use>
                    </S.PlayerBtnSvg>
                  </S.PlayerBtn>
                  <S.PlayerBtn butt="repeat" onClick={handleToggleLoop}>
                    <S.PlayerBtnSvg butsvg="repeat" alt="repeat">
                      <title>Повтор</title>
                      <use
                        xlinkHref={`${iconSprite}${
                          isLoop ? "#icon-repeatActive" : "#icon-repeat"
                        }`}
                      ></use>
                    </S.PlayerBtnSvg>
                  </S.PlayerBtn>
                  <S.PlayerBtn butt="shuffle" onClick={handleShuffle}>
                    <S.PlayerBtnSvg butsvg="shuffle" alt="shuffle">
                      <title>Случайный порядок</title>
                      <use
                        xlinkHref={`${iconSprite}${
                          !isShuffle ? "#icon-shuffle" : "#icon-shuffleActive"
                        }`}
                      ></use>
                    </S.PlayerBtnSvg>
                  </S.PlayerBtn>
                </S.BarPlayerControls>
                <S.PlayerTrackPlay>
                  <S.PlayerTrackPlayContain>
                    <S.TrackPlayImage isLoading={isLoading}>
                      <S.TrackPlaySvg isLoading={isLoading} alt="music">
                        <use xlinkHref={`${iconSprite}#icon-note`}></use>
                      </S.TrackPlaySvg>
                    </S.TrackPlayImage>
                    <S.TrackPlayAuthor isLoading={isLoading}>
                      <S.TrackPlayAuthorLink isLoading={isLoading}>
                        {
                          currentTrackList.find(
                            (track) => track.id === currentTrackId
                          )?.author
                        }
                      </S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum isLoading={isLoading}>
                      <S.TrackPlayAlbumLink isLoading={isLoading}>
                        {
                          currentTrackList.find(
                            (track) => track.id === currentTrackId
                          )?.name
                        }
                      </S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                  </S.PlayerTrackPlayContain>

                  <S.TrackDislike>
                    <S.TracPlayLike onClick={handleLike}>
                      {!playFavorite ? (
                        <S.TracPlayLikeSvg alt="like">
                          <use
                            xlinkHref={`${iconSprite}#icon-${
                              currentTrackList.find(
                                (track) => track.id === currentTrackId
                              )?.isLike
                                ? "likeActive"
                                : "like"
                            }`}
                          ></use>
                        </S.TracPlayLikeSvg>
                      ) : (
                        ""
                      )}
                    </S.TracPlayLike>
                    <S.TracPlayDis onClick={handleDislike}>
                      <S.TracPlayDisSvg alt="dislike">
                        <use
                          xlinkHref={`${iconSprite}${
                            isLike ? "#icon-dislike" : "#icon-dislikeActive"
                          }`}
                        ></use>
                      </S.TracPlayDisSvg>
                    </S.TracPlayDis>
                  </S.TrackDislike>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <S.BarVolumeBlock>
                <S.VolumeContent>
                  <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                      <use xlinkHref={`${iconSprite}#icon-volume`}></use>
                    </S.VolumeSvg>
                  </S.VolumeImage>
                  <S.VolumeProgress>
                    <S.VolumeProgressLine
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      name="range"
                      onChange={handleChangeVolume}
                    />
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.MainBarContent>
        </S.MainBar>
      </>
    )
  );
}
