import { useState } from "react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import UserContext from '../src/components/UserContext';
import { AudioPlayer } from "./components/player/Player";



function App() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [filteredTracks, setFilteredTracks] = useState([]);
  const resetEmail = () => {
    setEmail('');
  };



  return (
    <UserContext.Provider value={{ filteredTracks, setFilteredTracks, email, setEmail,resetEmail, token, setToken  }}>
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

