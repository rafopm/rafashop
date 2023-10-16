'use client'
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout,user } = useAuth0();

  user && console.log("Autenticado:", isAuthenticated, "Usuario:", user.name);

  
  if (isAuthenticated) {
    return <button className=" border-0 "  style={{ marginRight: '10px' }}  onClick={() => logout()}>Logout</button>;
  }

  return <button className=" border-0 "   style={{ marginRight: '10px' }}  onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;