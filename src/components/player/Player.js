import iconSprite from "../../img/icon/sprite.svg";
import React, { useState, useEffect, useRef, useCallback } from "react";
import * as S from "./player.style";
import ProgressBar from "../progressBar/progressBar";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites, setNextTrack, setPlaying, setPreviousTrack, setVolume, shuffleTracks, toggleLoop } from "../../store/actions/trackActions";
import { useToken } from "../token";
import { addFavoritesTracks } from "../../store/actions/thunk/addfavorites";



export function AudioPlayer() {
  const [isLoading, setIsLoading] = useState(true);
  const volume = useSelector((state) => state.volume);
  const isLoop = useSelector((state) => state.isLoop);
  const isShuffle = useSelector((state) => state.isShuffle)
  const isLike = useSelector((state) => state.isLike);
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();
  // const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // const [isTrackSelected, setIsTrackSelected] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = useSelector((state) => state.currentTrackIndex);
  const tracks = useSelector((state) => state.track);
  const currentTrackIndex = useSelector((state) => state.currentTrackIndex);
  const { token } = useToken();

  useEffect(() => {
    if (tracks.length) {
      const currentTrack = tracks[currentTrackIndex];
      if (audioRef.current) {
        // Устанавливаем новый src и загружаем его
        audioRef.current.src = currentTrack.track_file;
        audioRef.current.load();
        if (isPlaying) {
          audioRef.current.play();
        }
      }
    }
  }, [tracks, currentTrackIndex, isPlaying]);

  const handleShuffle = () => {
    dispatch(shuffleTracks());
  };

  const handleNextTrack = () => {
    console.log("handleNextTrack triggered");
    dispatch(setNextTrack(currentTrack));
  };
  
  const handlePreviousTrack = () => {
    dispatch(setPreviousTrack(currentTrack));
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

const handleTogglePlay = async () => {
  if (!isPlaying) {
    await audioRef.current.play();
    dispatch(setPlaying(true));
  } else {
    audioRef.current.pause();
    dispatch(setPlaying(false));
  }
};
useEffect(() => {
  if (isPlaying) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
}, [isPlaying, currentTrack.track_file]);

// --------------------------------------------------

const handleLike = () => {
  dispatch(addFavoritesTracks(tracks[currentTrackIndex].id,token));
};
  
const handleDislike = () => {
  dispatch(removeFromFavorites(tracks[currentTrackIndex]));
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


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [tracks.author, tracks.track]);
  
  return (
    <>
     <audio
        key={tracks[currentTrackIndex]?.track_id}
        ref={audioRef}
        onPlay={() => dispatch(setPlaying(true))}
        onPause={() => dispatch(setPlaying(false))}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        loop={isLoop}
        onTimeUpdate={updateCurrentTime}
        onEnded={handleNextTrack}
      >
        <source src={tracks[currentTrackIndex]?.track_file} type="audio/mpeg" />
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
                    <use xlinkHref={`${iconSprite}${
                        !isShuffle ? "#icon-shuffle" : "#icon-shuffleActive"
                      }`}></use>
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
                    {tracks[currentTrackIndex]?.author}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum isLoading={isLoading}>
                    <S.TrackPlayAlbumLink isLoading={isLoading}>
                    {tracks[currentTrackIndex]?.name}
                    </S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.PlayerTrackPlayContain>

                <S.TrackDislike>
                  <S.TracPlayLike onClick={handleLike}>
                    <S.TracPlayLikeSvg alt="like">
                      <use xlinkHref={`${iconSprite}${
                        isLike ? "#icon-likeActive" : "#icon-like"
                      }`}></use>
                    </S.TracPlayLikeSvg>
                  </S.TracPlayLike>
                  <S.TracPlayDis onClick={handleDislike}>
                    <S.TracPlayDisSvg alt="dislike">
                    <use xlinkHref={`${iconSprite}${
                        isLike ? "#icon-dislike" : "#icon-dislikeActive"
                      }`}></use>
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
  );
}
