'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, loginUser, logoutUser } from '../redux/loginSlice';
import { useCookies } from 'react-cookie';

function LoginButton({ onClick }) {
  const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
  const user = useSelector((state) => selectUser(state)); // Utilizar el selector dentro de useSelector

  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.userLogin) {
      dispatch(loginUser(cookies.userLogin));
    } else {
      dispatch(logoutUser());
    }
  }, [cookies.userLogin, dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    // Eliminar la cookie de inicio de sesión
    removeCookie('userLogin');
    // Realizar cualquier otra acción necesaria para cerrar sesión
    // ...
  };

  console.log('userLogin', user);

  return (
    <div>
      <button onClick={user ? handleLogout : onClick}>
        {user ? <span>Log out</span> : <span>Log in</span>}
      </button>
    </div>
  );
}

export default LoginButton;