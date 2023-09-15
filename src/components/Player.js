import iconSprite from '../img/icon/sprite.svg';
import React, { useState, useEffect } from 'react';
import * as S from "./styled/player.style"
import ProgressBar from './progressBar';

export function AudioPlayer ({ author, track }){

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timeoutId);
  }, [author, track]);
  

    return (
        <S.MainBar>
        <S.MainBarContent>
        <ProgressBar></ProgressBar>
          <S.BarPlayerProgress></S.BarPlayerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.BarPlayerControls>
              <S.PlayerBtn butt = 'prev'>
                  <S.PlayerBtnSvg butsvg = 'prev' alt="prev">
                  <title>Предыдущий трек</title>
                    <use xlinkHref={`${iconSprite}#icon-prev`}></use>
                  </S.PlayerBtnSvg>
                </S.PlayerBtn>
                <S.PlayerBtn butt = 'play'>
                  <S.PlayerBtnSvg butsvg = 'play' alt="play" >
                  <title>Воспроизведение</title>
                    <use xlinkHref={`${iconSprite}#icon-play`} ></use>
                  </S.PlayerBtnSvg>
                </S.PlayerBtn>
                <S.PlayerBtn butt = 'next'>
                  <S.PlayerBtnSvg butsvg = 'next' alt="next">
                  <title>Следующий трек</title>
                    <use xlinkHref={`${iconSprite}#icon-next`}></use>
                  </S.PlayerBtnSvg>
                </S.PlayerBtn>
                <S.PlayerBtn butt = 'repeat'>
                  <S.PlayerBtnSvg butsvg = 'repeat' alt="repeat">
                  <title>Повтор</title>
                    <use xlinkHref={`${iconSprite}#icon-repeat`}></use>
                  </S.PlayerBtnSvg>
                </S.PlayerBtn>
                <S.PlayerBtn butt = 'shuffle'>
                  <S.PlayerBtnSvg butsvg = 'shuffle' alt="shuffle">
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
                    name="range"
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.MainBarContent>
      </S.MainBar>
    )
}