import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup"
import { MainPage } from "./pages/main";
import { SignIn } from "./pages/signin";
import { NotFoundPage } from "./pages/not_found";
import { ProtectedRoute } from "./components/navigate";
import { FavoritesTracks } from "./pages/favorites";
import { Category } from "./pages/category";
import { AudioPlayer } from "./components/player/Player";




export const AppRoutes = ({ isLogged, setIsLogged }) => {

  return (
    
    <Routes>
      <Route path="/" element={<ProtectedRoute isLogged={isLogged} />}>
        <Route index element={<MainPage setIsLogged={setIsLogged} />} />
        <Route path="favorites" element={<FavoritesTracks setIsLogged={setIsLogged} />} />
        <Route path="category/:id" element={<Category setIsLogged={setIsLogged} />} />
        <Route path="audioplayer" element={<AudioPlayer />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn setIsLogged={setIsLogged} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

