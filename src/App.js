import { useState } from "react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import UserContext from '../src/components/UserContext';
import { AudioPlayer } from "./components/player/Player";



function App() {
  const [filteredTracks, setFilteredTracks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Все");
  const [selectedYear, setSelectedYear] = useState("Все");
  const [selectedTracks, setSelectedTracks] = useState("Все");
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const resetEmail = () => {
    setEmail('');
  };



  return (
    <UserContext.Provider value={{ filteredTracks, setFilteredTracks, selectedGenre, setSelectedGenre, selectedYear, setSelectedYear, selectedTracks, setSelectedTracks, email, setEmail,resetEmail, token, setToken  }}>
    <BrowserRouter>
      <div className="App">
        <AppRoutes user={email}/>
        {email && <AudioPlayer/>}
      </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

