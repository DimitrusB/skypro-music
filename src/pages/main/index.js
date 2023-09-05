
import { NavMenu } from "../../components/NavMenu";
import { AudioPlayer } from "../../components/Player";
import { Center } from "../../components/center";
import { Panelplaylist } from "../../components/rightPanel";
import * as S from "../../components/styled/Main.style" 

export function MainPage (){
    return(
<header className="App-header">
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
        </header>
    )
}