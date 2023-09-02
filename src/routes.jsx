import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup"
import { MainPage } from "./pages/main";
import { SignIn } from "./pages/signin";
import { NotFoundPage } from "./pages/not_found";
import { ProtectedRoute } from "./components/navigate";

export const AppRoutes = ({ user }) => {

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute user={user} element={<MainPage />} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

