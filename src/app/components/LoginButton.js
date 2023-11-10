'use client'
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, loginUser, cookieUser, logoutUser } from '../redux/loginSlice';
import { useCookies } from 'react-cookie';
import jwt from 'jsonwebtoken';

function LoginButton({ onClick }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(['userLogin']);
  const cookieRef = useRef(cookies.userLogin); // Crea una referencia para la cookie



  useEffect(() => {

    cookieRef.current = cookies.userLogin;
    if (!user && cookieRef.current) {
      const decodedToken = jwt.decode(cookieRef.current.token);
      const expirationDate = new Date((decodedToken.exp) * 1000);
      const currentDate = new Date();
      console.log('expirationDAte', currentDate, '---', expirationDate);
      if (currentDate > expirationDate) {
        removeCookie('userLogin');
      } else {
        dispatch(cookieUser(cookieRef.current));
      }

    }


  }, [user, dispatch, cookies.userLogin, cookieRef]);


  const handleLogout = () => {
    removeCookie('userLogin');
    dispatch(logoutUser());
    // Elimina la cookie al hacer logout
  };

  console.log('2', cookieRef.currentUser)
  console.log('3', cookies.userLogin)
  console.log('user:', user)
  return (
    <div>
      <button onClick={user ? handleLogout : onClick}>
        {user ? <span>Log out</span> : <span>Log in</span>}
      </button>
    </div>
  );
}

export default LoginButton;