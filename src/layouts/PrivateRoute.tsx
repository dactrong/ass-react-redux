import React from "react";
import { Navigate } from "react-router-dom";

type LayoutPrivateProps = {
  children: React.ReactElement;
};

const LayoutPrivate = ({ children }: LayoutPrivateProps) => {
  if (localStorage.getItem("user")) {
    const { user } = JSON.parse(localStorage.getItem("user") as string);
    if (!user?.role) {
      return <Navigate to="/" />;
    }
    return children;
  } else {
    return <Navigate to="/" />;
  }

  // if (!isAdmin.role) return <Navigate to="/login" />;
};

export default LayoutPrivate;
