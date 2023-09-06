import { useState } from "react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import UserContext from '../src/components/UserContext';


function App() {
  const [email, setEmail] = useState('');
  const resetEmail = () => {
    setEmail('');
  };



  return (
    <UserContext.Provider value={{ email, setEmail,resetEmail }}>
    <BrowserRouter>
      <div className="App">
        <AppRoutes user={email}/>
      </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

