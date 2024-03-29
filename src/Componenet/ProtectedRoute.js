import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user.email);
  if (!user) {
    return <Navigate to="/citySelect" />;
  }
  return children;
};

export default ProtectedRoute;