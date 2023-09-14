import { useState } from "react";
import { NavMenu } from "../../components/NavMenu";
import { AudioPlayer } from "../../components/Player";
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

  if (setSelectedTrack) {
    console.log(selectedTrack);
  }
  if (selectedAuthor) {
    console.log(selectedAuthor);
  }

  return (
    <header className="App-header">
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <Center onTrackSelection={handleTrackSelection} />
            <Panelplaylist />
          </S.Main>
          {selectedTrack && selectedAuthor && (
            <AudioPlayer track={selectedTrack} author={selectedAuthor} />
          )}
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </header>
  );
}
