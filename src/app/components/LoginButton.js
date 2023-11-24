'use client'
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, loginUser, cookieUser, logoutUser } from '../redux/loginSlice';
import { useCookies } from 'react-cookie';
import jwt from 'jsonwebtoken';
import Dropdown from 'react-bootstrap/Dropdown';
import Styles from '../styles/LoginButton.module.css';


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
  return (
    <div>
      {user ?
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className={Styles.dropdownToggleCustom}>
            {user.nombres} {/* Mostrar el nombre del usuario si existe */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/adm">Administrar</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Cerrar sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        :
        <span onClick={onClick}>Iniciar sesión</span>
      }
    </div>
  );
}

export default LoginButton;