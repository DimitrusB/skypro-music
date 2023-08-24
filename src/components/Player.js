import styled from 'styled-components';
import iconSprite from '../img/icon/sprite.svg';
import React, { useState, useEffect } from 'react';

const StyledMainBar = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
background: rgba(28, 28, 28, 0.5);
`
const StyledMainBarContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
`
const StyledBarPlayerProgress = styled.div`
width: 100%;
height: 5px;
background: #2e2e2e;
`
const StyledBarPlayerBlock = styled.div`
height: 73px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`
const StyledBarPlayer = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`

const StyledBarPlayerControls = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
padding: 0 27px 0 31px;
`
const StyledPlayerBtnSvg = styled.svg`
${({ butsvg }) =>
butsvg === 'prev' &&
`
width: 15px;
height: 14px;
`};

${({ butsvg }) =>
butsvg === 'play' &&
`
width: 22px;
height: 20px;
fill: #d9d9d9;
`};

${({ butsvg }) =>
butsvg === 'next' &&
`
width: 15px;
height: 14px;
fill: inherit;
stroke: #d9d9d9;
`};

${({ butsvg }) =>
butsvg === 'repeat' &&
`
width: 18px;
height: 12px;
fill: transparent;
stroke: #696969;
`};
${({ butsvg }) =>
butsvg === 'shuffle' &&
`
width: 19px;
height: 12px;
fill: transparent;
stroke: #696969;
`};
&:hover {
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}
&:active{
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
}
`
const StyledPlayerBtn = styled.div`
padding: 5px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
${({ butt }) =>
butt === 'prev' &&
`
margin-right: 23px;
`};

${({ butt }) =>
butt === 'play' &&
`
margin-right: 23px;
`};

${({ butt }) =>
butt === 'next' &&
`
margin-right: 28px;
fill: #a53939;
`};

${({ butt }) =>
butt === 'repeat' &&
`
margin-right: 24px;
`};
${({ butt }) =>
butt === 'shuffle' &&
`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`};
`

const StyledPlayerTrackPlay = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
`

const StyledPlayerTrackPlayContain = styled.div`
width: auto;
display: -ms-grid;
display: grid;
-ms-grid-columns: auto 1fr;
grid-template-columns: auto 1fr;
grid-template-areas: "image author" "image album";
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
const StyledTrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;

  ${({ isLoading }) =>
    isLoading &&
    `
    background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    width: 51px;
    height: 51px;
  `}

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`

const StyledTrackPlaySvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;
${({ isLoading }) => isLoading &&
` 
visibility: hidden;

`
}
`
const StyledTrackPlayAuthor = styled.div`
-ms-grid-row: 1;
-ms-grid-column: 2;
grid-area: author;
min-width: 49px;
${({ isLoading }) => isLoading &&
` 
background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
background-size: 200% 100%;
animation: loading 1.5s infinite;
width: 65px;
height: 19px;

`
}
`
const StyledTrackPlayAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
white-space: nowrap;
${({ isLoading }) => isLoading &&
` 
visibility: hidden;

`
}
`

const StyledTrackPlayAlbum = styled.div`
-ms-grid-row: 2;
-ms-grid-column: 2;
grid-area: album;
min-width: 49px;
${({ isLoading }) => isLoading &&
` 
background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
background-size: 200% 100%;
animation: loading 1.5s infinite;
width: 65px;
height: 19px;

`
}
`
const StyledTrackPlayAlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: #ffffff;
${({ isLoading }) => isLoading &&
` 
visibility: hidden;

`
}
`
const StyledBarVolumeBlock = styled.div`
width: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: 0 92px 0 0;
`
const StyledVolumeContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: end;
`
const StyledVolumeImage = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;
`
const StyledVolumeSvg = styled.svg`
width: 13px;
height: 18px;
fill: transparent;
`
const StyledVolumeProgress = styled.div`
width: 109px;
`
const StyledTrackDislike = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
margin-left: 26%;
`
const StyledVolumeProgressLine = styled.input`
width: 109px;
`
const StyledTracPlayLike = styled.div`
padding: 5px;
`
const StyledTracPlayDis = styled.div`
padding: 5px;
margin-left: 28.5px;
`
const StyledTracPlayLikeSvg = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;

  &:hover{
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active{
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  
  &:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
  }
  `
const StyledTracPlayDisSvg = styled.svg`
width: 14.34px;
height: 13px;
fill: transparent;
stroke: #696969;
&:hover{
  fill: transparent;
  stroke: #acacac;
  cursor: pointer;
}
&:active{
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;

&:active {
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
}
}
`
export function AudioPlayer (){

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    return () => clearTimeout(timeoutId);
  }, []);

    return (
        <StyledMainBar>
        <StyledMainBarContent>
          <StyledBarPlayerProgress></StyledBarPlayerProgress>
          <StyledBarPlayerBlock>
            <StyledBarPlayer>
              <StyledBarPlayerControls>
              <StyledPlayerBtn butt = 'prev'>
                  <StyledPlayerBtnSvg butsvg = 'prev' alt="prev">
                  <title>Предыдущий трек</title>
                    <use xlinkHref={`${iconSprite}#icon-prev`}></use>
                  </StyledPlayerBtnSvg>
                </StyledPlayerBtn>
                <StyledPlayerBtn butt = 'play'>
                  <StyledPlayerBtnSvg butsvg = 'play' alt="play" >
                  <title>Воспроизведение</title>
                    <use xlinkHref={`${iconSprite}#icon-play`} ></use>
                  </StyledPlayerBtnSvg>
                </StyledPlayerBtn>
                <StyledPlayerBtn butt = 'next'>
                  <StyledPlayerBtnSvg butsvg = 'next' alt="next">
                  <title>Следующий трек</title>
                    <use xlinkHref={`${iconSprite}#icon-next`}></use>
                  </StyledPlayerBtnSvg>
                </StyledPlayerBtn>
                <StyledPlayerBtn butt = 'repeat'>
                  <StyledPlayerBtnSvg butsvg = 'repeat' alt="repeat">
                  <title>Повтор</title>
                    <use xlinkHref={`${iconSprite}#icon-repeat`}></use>
                  </StyledPlayerBtnSvg>
                </StyledPlayerBtn>
                <StyledPlayerBtn butt = 'shuffle'>
                  <StyledPlayerBtnSvg butsvg = 'shuffle' alt="shuffle">
                  <title>Случайный порядок</title>
                    <use xlinkHref={`${iconSprite}#icon-shuffle`}></use>
                  </StyledPlayerBtnSvg>
                </StyledPlayerBtn>
              </StyledBarPlayerControls>

              <StyledPlayerTrackPlay>
                <StyledPlayerTrackPlayContain>
                <StyledTrackPlayImage isLoading={isLoading}>
                    <StyledTrackPlaySvg isLoading={isLoading} alt="music">
                      <use xlinkHref={`${iconSprite}#icon-note`}></use>
                    </StyledTrackPlaySvg>
                  </StyledTrackPlayImage>
                  <StyledTrackPlayAuthor isLoading={isLoading}>
                    <StyledTrackPlayAuthorLink isLoading={isLoading}  href="http://"
                      >Баста</StyledTrackPlayAuthorLink>
                  </StyledTrackPlayAuthor>
                  <StyledTrackPlayAlbum isLoading={isLoading}>
                    <StyledTrackPlayAlbumLink isLoading={isLoading}href="http://">Ты та...</StyledTrackPlayAlbumLink>
                  </StyledTrackPlayAlbum>
                </StyledPlayerTrackPlayContain>

                <StyledTrackDislike>
                  <StyledTracPlayLike>
                    <StyledTracPlayLikeSvg alt="like">
                      <use xlinkHref={`${iconSprite}#icon-note`}></use>
                    </StyledTracPlayLikeSvg>
                  </StyledTracPlayLike>
                  <StyledTracPlayDis>
                    <StyledTracPlayDisSvg alt="dislike">
                      <use
                        xlinkHref={`${iconSprite}#icon-dislike`}
                      ></use>
                    </StyledTracPlayDisSvg>
                  </StyledTracPlayDis>
                </StyledTrackDislike>
              </StyledPlayerTrackPlay>
            </StyledBarPlayer>
            <StyledBarVolumeBlock>
              <StyledVolumeContent>
                <StyledVolumeImage>
                  <StyledVolumeSvg alt="volume">
                    <use xlinkHref={`${iconSprite}#icon-volume`}></use>
                  </StyledVolumeSvg>
                </StyledVolumeImage>
                <StyledVolumeProgress>
                  <StyledVolumeProgressLine
                    type="range"
                    name="range"
                  />
                </StyledVolumeProgress>
              </StyledVolumeContent>
            </StyledBarVolumeBlock>
          </StyledBarPlayerBlock>
        </StyledMainBarContent>
      </StyledMainBar>
    )
}