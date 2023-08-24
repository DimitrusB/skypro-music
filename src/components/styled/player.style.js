import styled from "styled-components"

export const MainBar = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
background: rgba(28, 28, 28, 0.5);
`
export const MainBarContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
`
export const BarPlayerProgress = styled.div`
width: 100%;
height: 5px;
background: #2e2e2e;
`
export const BarPlayerBlock = styled.div`
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
export const BarPlayer = styled.div`
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

export const BarPlayerControls = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
padding: 0 27px 0 31px;
`
export const PlayerBtnSvg = styled.svg`
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
export const PlayerBtn = styled.div`
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

export const PlayerTrackPlay = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
`

export const PlayerTrackPlayContain = styled.div`
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
export const TrackPlayImage = styled.div`
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

export const TrackPlaySvg = styled.svg`
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
export const TrackPlayAuthor = styled.div`
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
export const TrackPlayAuthorLink = styled.a`
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

export const TrackPlayAlbum = styled.div`
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
export const TrackPlayAlbumLink = styled.a`
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
export const BarVolumeBlock = styled.div`
width: auto;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: 0 92px 0 0;
`
export const VolumeContent = styled.div`
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
export const VolumeImage = styled.div`
width: 13px;
height: 18px;
margin-right: 17px;
`
export const VolumeSvg = styled.svg`
width: 13px;
height: 18px;
fill: transparent;
`
export const VolumeProgress = styled.div`
width: 109px;
`
export const TrackDislike = styled.div`
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
export const VolumeProgressLine = styled.input`
width: 109px;
`
export const TracPlayLike = styled.div`
padding: 5px;
`
export const TracPlayDis = styled.div`
padding: 5px;
margin-left: 28.5px;
`
export const TracPlayLikeSvg = styled.svg`
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
export const TracPlayDisSvg = styled.svg`
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