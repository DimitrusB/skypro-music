import { useState } from "react";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { AudioPlayer } from "../../components/player/Player";
import { Center } from "../../components/center/center";
import { Panelplaylist } from "../../components/righPanel/rightPanel";
import * as S from "./Main.style";

export function MainPage() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedTrackFile, setSelectedTrackFile] = useState(null);

  const handleTrackSelection = (track, author, trackfile) => {
    setSelectedTrack(track);
    setSelectedAuthor(author);
    setSelectedTrackFile(trackfile);
  };

  if (selectedTrack) {
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
            <AudioPlayer
              track={selectedTrack}
              author={selectedAuthor}
              trackfile={selectedTrackFile}
            />
          )}
          <footer className="footer"></footer>
        </S.Container>
      </S.Wrapper>
    </header>
  );
}
