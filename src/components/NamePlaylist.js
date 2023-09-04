import React, { useState, useEffect } from 'react';
import playlistnull from "../img/playlistnull.png"
import * as S from "./styled/NamePlaylist.Style"
import { musicCategory } from './constants';
import { useParams, NavLink } from 'react-router-dom';

export function NamePlaylist(props) {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState({});

  const handleImageLoad = (categoryId) => {
    setLoadedCategories((prevState) => ({
      ...prevState,
      [categoryId]: true
    }));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <React.Fragment>
      {musicCategory.map((category) => (
        <S.SidebarItem key={category.id}>
          <NavLink to={`/category/${category.id}`}>
            <S.SidebarImg
              isLoading={isLoading}
              src={isLoading || !loadedCategories[category.id] ? playlistnull : category.playlist}
              alt={category.alt}
              onLoad={() => handleImageLoad(category.id)}
            />
          </NavLink>
        </S.SidebarItem>
      ))}
    </React.Fragment>
  );
}
