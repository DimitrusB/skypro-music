import iconSprite from '../img/icon/sprite.svg';
import './player.css';
import React, { useState, useEffect } from 'react';

export function AudioPlayer (){

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timeoutId);
  }, []);

    return (
        <div className="bar">
        <div className="bar__content">
          <div className="bar__player-progress"></div>
          <div className="bar__player-block">
            <div className="bar__player player">
              <div className="player__controls">
                <div className="player__btn-prev">
                  <svg className="player__btn-prev-svg" alt="prev">
                  <title>Предыдущий трек</title>
                    <use xlinkHref={`${iconSprite}#icon-prev`}></use>
                  </svg>
                </div>
                <div className="player__btn-play _btn">
                  <svg className="player__btn-play-svg" alt="play" >
                  <title>Воспроизведение</title>
                    <use xlinkHref={`${iconSprite}#icon-play`} ></use>
                  </svg>
                </div>
                <div className="player__btn-next">
                  <svg className="player__btn-next-svg" alt="next">
                  <title>Следующий трек</title>
                    <use xlinkHref={`${iconSprite}#icon-next`}></use>
                  </svg>
                </div>
                <div className="player__btn-repeat _btn-icon">
                  <svg className="player__btn-repeat-svg" alt="repeat">
                  <title>Повтор</title>
                    <use xlinkHref={`${iconSprite}#icon-repeat`}></use>
                  </svg>
                </div>
                <div className="player__btn-shuffle _btn-icon">
                  <svg className="player__btn-shuffle-svg" alt="shuffle">
                  <title>Случайный порядок</title>
                    <use xlinkHref={`${iconSprite}#icon-shuffle`}></use>
                  </svg>
                </div>
              </div>

              <div className="player__track-play track-play">
                <div className="track-play__contain">
                  <div className={`track-play__image ${isLoading ? "skeleton__image" : ""}`}>
                    <svg className={`track-play__svg ${isLoading ? "hidden-text" : ""}`} alt="music">
                      <use xlinkHref={`${iconSprite}#icon-note`}></use>
                    </svg>
                  </div>
                  <div className={`track-play__author ${isLoading ? "skeleton__authorpl" : ""}`}>
                    <a className={`track-play__author-link ${isLoading ? "hidden-text" : ""}`} href="http://"
                      >Баста</a>
                  </div>
                  <div className={`track-play__album ${isLoading ? "skeleton__albumpl" : ""}`}>
                    <a className={`track-play__album-link ${isLoading ? "hidden-text" : ""}`} href="http://">Ты та...</a>
                  </div>
                </div>

                <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                      <use xlinkHref={`${iconSprite}#icon-note`}></use>
                    </svg>
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                      <use
                        xlinkHref={`${iconSprite}#icon-dislike`}
                      ></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bar__volume-block volume">
              <div className="volume__content">
                <div className="volume__image">
                  <svg className="volume__svg" alt="volume">
                    <use xlinkHref={`${iconSprite}#icon-volume`}></use>
                  </svg>
                </div>
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}