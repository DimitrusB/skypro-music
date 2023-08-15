import React, { useState, useEffect } from 'react';
import playlistnull from "../img/playlistnull.png"

export function NamePlaylist (props) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timeoutId);
  }, []);

    return (
        <div className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img
            className={`sidebar__img ${isLoading ? "sidebar__skeleton " : ""}`}
            src={isLoading ? playlistnull : props.src}
            alt="day's playlist"
          />
        </a>
      </div>
    )
}