import React, { useState, useEffect } from 'react';
import iconSprite from "../img/icon/sprite.svg";
import "./NameTrackskeleton.css"

export function NameTrack ({track , author , mix , album, time }) {

  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timeoutId);
  }, []);

    return (
        <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className={`track__title-image ${isLoading ? "skeleton__image" : ""}`}>
              <svg className={`track__title-svg ${isLoading ? "hidden-text" : ""}`}  alt="music">
                <use xlinkHref={`${iconSprite}#icon-note`}></use>
              </svg>
            </div>
            <div className={`track__title-text ${isLoading ? "skeleton__track " : ""}`}>
              <a className={`track__title-link ${isLoading ? "hidden-text" : ""}`} href="http://">
                {track} <span className="track__title-span">{mix}</span>
              </a>
            </div>
          </div>
          <div className={`track__author ${isLoading ? "skeleton__author" : ""}`}>
            <a className={`track__author-link ${isLoading ? "hidden-text" : ""}`} href="http://">
              {author}
            </a>
          </div>
          <div className={`track__album ${isLoading ? "skeleton__album" : ""}`}>
            <a className={`track__album-link ${isLoading ? "hidden-text" : ""}`} href="http://">
              {album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref={`${iconSprite}#icon-note`}></use>
            </svg>
            <span className="track__time-text">{time}</span>
          </div>
        </div>
      </div>
    )
}