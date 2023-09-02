// import { NavMenu } from "./components/NavMenu";
// import { AudioPlayer } from "./components/Player";
// import { Center } from "./components/center";
// import { Panelplaylist } from "./components/rightPanel";
// import * as S from "./components/styled/Main.style" 
import { useState } from "react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [user, setUser] = useState({ name: "Dmitriy" });
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
          <S.Wrapper>
            <S.Container>
              <S.Main>
                <NavMenu />
                <Center />
                <Panelplaylist />
              </S.Main>
              <AudioPlayer />
              <footer className="footer"></footer>
            </S.Container>
          </S.Wrapper>
        </header> */}
           <AppRoutes user={user} /> 
      </div>
    </BrowserRouter>
  );
}

export default App;