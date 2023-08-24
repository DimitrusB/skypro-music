import "./App.css";
import { NavMenu } from "./components/NavMenu";
import { AudioPlayer } from "./components/Player";
import { Center } from "./components/center";
import { Panelplaylist } from "./components/rightPanel";
import * as S from "./components/styled/Main.style" 


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <S.Wrapper>
          <S.Container >
            <S.Main>
              <NavMenu></NavMenu>
              <Center ></Center>
              <Panelplaylist></Panelplaylist>
            </S.Main>
            <AudioPlayer></AudioPlayer>
            <footer className="footer"></footer>
          </S.Container>
        </S.Wrapper>
      </header>
    </div>
  );
}

export default App;
