import { useEffect, useState } from "react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../src/components/UserContext";
import { AudioPlayer } from "./components/player/Player";
import clientStorage from "./utils/client-storage";

function App() {
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Все");
  const [selectedYear, setSelectedYear] = useState("Все");
  const [selectedTracks, setSelectedTracks] = useState("Все");
  const [isLogged, setIsLogged] = useState(null);
  const email = clientStorage.getEmailUser();

  useEffect(() => {
    if (email) {
      setIsLogged("yes");
    } else {
      setIsLogged("no");
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        filteredTracks,
        setFilteredTracks,
        selectedGenre,
        setSelectedGenre,
        selectedYear,
        setSelectedYear,
        selectedTracks,
        setSelectedTracks,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <AppRoutes isLogged={isLogged} setIsLogged={setIsLogged} />
          {isLogged && isLogged === "yes" && <AudioPlayer />}
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
