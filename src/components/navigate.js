import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isLogged }) => {
  if (isLogged && isLogged === "no") {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};
