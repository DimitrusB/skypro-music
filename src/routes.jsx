import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup"
import { MainPage } from "./pages/main";
import { SignIn } from "./pages/signin";
import { NotFoundPage } from "./pages/not_found";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

