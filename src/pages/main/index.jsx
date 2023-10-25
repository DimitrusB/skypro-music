import { NavMenu } from "../../components/NavMenu/NavMenu";
import { AudioPlayer } from "../../components/player/Player";
import { Center } from "../../components/center/center";
import { Panelplaylist } from "../../components/righPanel/rightPanel";
import * as S from "./Main.style";

export function MainPage({setIsLogged}) {

  return (
    <header className="App-header">
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu setIsLogged={setIsLogged}/>
            <Center/>
            <Panelplaylist setIsLogged={setIsLogged} />
          </S.Main>


          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </header>
  );
}
