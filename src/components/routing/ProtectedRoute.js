import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/esm/Spinner";
import NavbarMenu from "../layout/NavbarMenu";

const ProtectedRoute = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }
  // return <Route {...rest} element= {isAuthenticated ? <Component {...rest}/> : navigate('/login')}/> not use in react v6
  return isAuthenticated ? <><NavbarMenu></NavbarMenu><Outlet /></> : <Navigate to="/login" />;  // must return a Component, not function
}; 

export default ProtectedRoute;
