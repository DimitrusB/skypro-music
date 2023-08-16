import React, { createRef, useEffect }  from "react";
import "./App.css";
import { NavMenu } from "./components/NavMenu";
import { AudioPlayer } from "./components/Player";
import { Center } from "./components/center";
import { Panelplaylist } from "./components/rightPanel";

function App() {
  const linkRef = createRef();


  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    console.log('Сработало')
    return () => {
      document.removeEventListener("click", handleClickOutside);
      console.log('Сработало')
    };
  }, []);

  const handleClickOutside = (event) => {
    if (linkRef.current && !linkRef.current.contains(event.target)) {
      this.setOpen(false)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="container" ref={linkRef} >
            <main className="main">
              <NavMenu></NavMenu>
              <Center ></Center>
              <Panelplaylist></Panelplaylist>
            </main>
            <AudioPlayer></AudioPlayer>
            <footer className="footer"></footer>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
