import styled from 'styled-components';

export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const PlaylistTrack = styled.div`
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
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
export const TrackTitled = styled.div`
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
width: 447px;
`
export const TrackTitleImage = styled.div`
width: 51px;
height: 51px;
padding: 16px;
background: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 17px;

${({ isLoading }) =>
isLoading &&
`
background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
background-size: 200% 100%;
animation: loading 1.5s infinite;
width: 51px;
height: 51px;
`}`
export const TrackTitleSvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;

${({ isLoading }) =>
isLoading &&
`
visibility: hidden;
`}`
export const TrackTitleText = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;

${({ isLoading }) =>
isLoading &&
`
background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
background-size: 200% 100%;
animation: loading 1.5s infinite;
width: 356px;
height: 19px;
`}`
export const TrackTitleLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;

${({ isLoading }) =>
isLoading &&
`
visibility: hidden;
`}`
export const TrackTitleSpan = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4e4e4e;
`
export const TrackAuthor = styled.div`
width: 321px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;

${({ isLoading }) =>
isLoading &&
`
background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
background-size: 200% 100%;
animation: loading 1.5s infinite;
width: 271px;
height: 19px;
`}`
export const TrackAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
text-align: left;

${({ isLoading }) =>
isLoading &&
`
visibility: hidden;
`}`
export const TrackAlbum = styled.div`
width: 245px;

${({ isLoading }) =>
isLoading &&
`
background: linear-gradient(90deg, #313131 25%, #272727, #201f1f 75%);
background-size: 200% 100%;
animation: loading 1.5s infinite;
width: 305px;
height: 19px;
`}`
export const TrackAlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;

${({ isLoading }) =>
isLoading &&
`
visibility: hidden;
`}`
export const TrackTimeSvg = styled.svg`
width: 14px;
height: 12px;
margin-right: 17px;
fill: transparent;
stroke: #696969;
`
export const TrackTimeText = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`