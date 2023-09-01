import { Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/signup"
import { MainPage } from "./pages/main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

