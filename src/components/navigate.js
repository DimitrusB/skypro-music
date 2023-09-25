import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, element }) => {
  if (!user) {
    return <Navigate to="/signin" />;
  }

  return element;
};
