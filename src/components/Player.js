import iconSprite from "../img/icon/sprite.svg";
import React, { useState, useEffect, useRef } from "react";
import * as S from "./styled/player.style";
import ProgressBar from "./progressBar";


export function AudioPlayer({ author, track, trackfile}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const audioRef = useRef(null);

  const handleChangeVolume = (event) => {
    setVolume(event.target.value);
    audioRef.current.volume = event.target.value;
  };

  const updateCurrentTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const togglePlay = async () => {
    if (!isPlaying) {
      await audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleLoop = () => {
    setIsLoop(!isLoop);
  };

  const handleSeek = (seekTime) => {
    audioRef.current.currentTime = seekTime;
  };

  const notUsed = () => {
    alert('Еще не реализовано');
  };

  useEffect(() => {
    setIsPlaying(false);
    audioRef.current.load();
  }, [trackfile]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [author, track]);

    return (
      <>
<audio
  key={trackfile}
  controls
  ref={audioRef}
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
  onLoadedMetadata={() => setDuration(audioRef.current.duration)}
  loop={isLoop}
  onTimeUpdate={updateCurrentTime}
>
  <source src={trackfile} type="audio/mpeg" />
</audio>
      <S.MainBar>
          <S.MainBarContent>
            <ProgressBar   
            currentTime={currentTime}
            duration={duration}
            onSeek={handleSeek}
            isDragging={isDragging}
            onDown={() => setIsDragging(true)}
            onUp={() => setIsDragging(false)}>
            </ProgressBar>
            <S.BarPlayerProgress></S.BarPlayerProgress>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.BarPlayerControls>
                  <S.PlayerBtn butt='prev' onClick={notUsed}>
                    <S.PlayerBtnSvg butsvg='prev' alt="prev">
                      <title>Предыдущий трек</title>
                      <use xlinkHref={`${iconSprite}#icon-prev`}></use>
                    </S.PlayerBtnSvg>
                  </S.PlayerBtn>
                  <S.PlayerBtn butt={isPlaying ? 'pause' : 'play'} onClick={togglePlay}>
                  <S.PlayerBtnSvg
                  butsvg={isPlaying ? 'pause' : 'play'}
                  alt={isPlaying ? 'Пауза' : 'Воспроизведение'}>
                    <title>{isPlaying ? "Пауза" : "Воспроизведение"}</title>
                    <use
                      xlinkHref={`${iconSprite}${isPlaying ? "#icon-pause" : "#icon-play"}`}
                    ></use>
                  </S.PlayerBtnSvg>
                </S.PlayerBtn>

                  <S.PlayerBtn butt='next' onClick={notUsed}>
                    <S.PlayerBtnSvg butsvg='next' alt="next">
                      <title>Следующий трек</title>
                      <use xlinkHref={`${iconSprite}#icon-next`}></use>
                    </S.PlayerBtnSvg>
                  </S.PlayerBtn>
                  <S.PlayerBtn butt='repeat' onClick={toggleLoop}>
                    <S.PlayerBtnSvg butsvg='repeat' alt="repeat">
                      <title>Повтор</title>
                      <use xlinkHref={`${iconSprite}${isLoop ? "#icon-repeatActive":"#icon-repeat"}`}></use>
                    </S.PlayerBtnSvg>
                  </S.PlayerBtn>
                  <S.PlayerBtn butt='shuffle' onClick={notUsed}>
                    <S.PlayerBtnSvg butsvg='shuffle' alt="shuffle">
                      <title>Случайный порядок</title>
                      <use xlinkHref={`${iconSprite}#icon-shuffle`}></use>
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
                      <S.TrackPlayAuthorLink isLoading={isLoading}
                      >{author}</S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>
                    <S.TrackPlayAlbum isLoading={isLoading}>
                      <S.TrackPlayAlbumLink isLoading={isLoading}>{track}</S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                  </S.PlayerTrackPlayContain>

                  <S.TrackDislike>
                    <S.TracPlayLike>
                      <S.TracPlayLikeSvg alt="like">
                        <use xlinkHref={`${iconSprite}#icon-note`}></use>
                      </S.TracPlayLikeSvg>
                    </S.TracPlayLike>
                    <S.TracPlayDis>
                      <S.TracPlayDisSvg alt="dislike">
                        <use
                          xlinkHref={`${iconSprite}#icon-dislike`}
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
                      onChange={handleChangeVolume}/>
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.MainBarContent>
        </S.MainBar></>
    )
}