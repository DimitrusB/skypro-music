import React, { useState, useEffect } from 'react';
import playlistnull from "../img/playlistnull.png"
import * as S from "./styled/NamePlaylist.Style"


export function NamePlaylist (props) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timeoutId);
  }, []);

    return (
        <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg isLoading={isLoading}
            src={isLoading ? playlistnull : props.src}
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
    )
}