import React from "react";
import { Navigate, useLocation } from "react-router-dom";



export default function RequireAuth({ children, authenticated }) {
 
  let location = useLocation();

  /* si no hay identificación, retorna a login */
  if (!authenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  /* si hay autentificación, va a la página "hija" */
   return children
}
