import { useState } from "react";
import { NavMenu } from "../../components/NavMenu";
import { AudioPlayer } from "../../components/Player";
import { getAllTracks } from "../../components/api";
import { Center } from "../../components/center";
import { Panelplaylist } from "../../components/rightPanel";
import * as S from "./Main.style";

export function MainPage() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleTrackSelection = (track, author) => {
    setSelectedTrack(track);
    setSelectedAuthor(author);
  };


  // Получение данных из API.
  getAllTracks()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error}`);
    });

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
