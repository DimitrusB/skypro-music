import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup"
import { MainPage } from "./pages/main";
import { SignIn } from "./pages/signin";
import { NotFoundPage } from "./pages/not_found";
import { ProtectedRoute } from "./components/navigate";
import { FavoritesTracks } from "./pages/favorites";
import { Category } from "./pages/category";

export const AppRoutes = ({ user }) => {

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute user={user} element={<MainPage />} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/favorites" element={<ProtectedRoute user={user} element={<FavoritesTracks />} />}/>
      <Route path="/category/1" element={<ProtectedRoute user={user} element={<Category />} />}/>
      <Route path="/category/2" element={<ProtectedRoute user={user} element={<Category />} />}/>
      <Route path="/category/3" element={<ProtectedRoute user={user} element={<Category />} />}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

