import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle } from "styled-components";

const GlobalsStyeProject = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/src/fonts/StratosSkyeng.woff2") format("woff2"),
    url("/src/fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <GlobalsStyeProject></GlobalsStyeProject>
    <App />
  </React.StrictMode>
);

