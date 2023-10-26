import { NavMenu } from "../../components/NavMenu/NavMenu";
import { AudioPlayer } from "../../components/player/Player";
import { Center } from "../../components/center/center";
import { Panelplaylist } from "../../components/righPanel/rightPanel";
import * as S from "./Main.style";
import { useContext, useEffect } from "react";
import UserContext from "../../components/UserContext";
import iconSprite from "./../../img/icon/sprite.svg";

export function MainPage({setIsLogged}) {

  const { whiteTheme, setWhiteTheme } = useContext(UserContext);

  useEffect(() =>{
    const theme = localStorage.getItem('theme');
    if (theme) {
      setWhiteTheme(theme === 'white' ? true : false);
    }
  },[]);

  function handleChangeTheme() {
    if(whiteTheme === false){
      setWhiteTheme(true);
      localStorage.setItem('theme', 'white');
    } else {
      setWhiteTheme(false);
      localStorage.setItem('theme', 'dark');
    }
  }


  return (
    <header className="App-header">
      <S.Wrapper>
        <S.Container whiteTheme={whiteTheme}>
        <S.ChangeThemeButton  onClick={handleChangeTheme} >
        <title>{whiteTheme ? "Темная тема" : "Светлая тема"}</title>
        <use
                        xlinkHref={`${iconSprite}${
                          whiteTheme ? "#icon-white" : "#icon-black"
                        }`}
                      ></use>
        </S.ChangeThemeButton>
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
