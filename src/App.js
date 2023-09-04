import { useState } from "react";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";


function App() {
  const [user, setUser] = useState({
    email: '',});

  return (

      <BrowserRouter>
        <div className="App">
          <AppRoutes user={user}/>
        </div>
      </BrowserRouter>

  );
}

export default App;
