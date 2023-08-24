import React, { useState, useEffect } from 'react';
import playlistnull from "../img/playlistnull.png"
import styled from 'styled-components';

const StyledSidebarItem = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

const StyledSidebarLink = styled.a`
width: 100%;
height: 100%;
`

const StyledSidebarImg = styled.img`
  width: 100%;
  height: auto;

  ${({ isLoading }) => isLoading &&
    `
      background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      width: 250px;
      height: 150px;
    `
  }
`

export function NamePlaylist (props) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timeoutId);
  }, []);

    return (
        <StyledSidebarItem>
        <StyledSidebarLink href="#">
          <StyledSidebarImg isLoading={isLoading}
            src={isLoading ? playlistnull : props.src}
            alt="day's playlist"
          />
        </StyledSidebarLink>
      </StyledSidebarItem>
    )
}