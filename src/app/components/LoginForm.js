'use client'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Styles from '../styles/LoginForm.module.css';
import { loginUser, selectUser, selectLoginStatus, selectLoginError, selectLoginErrorMessage } from '../redux/loginSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie';
import RegistrationForm from './RegistrationForm';


const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loginStatus = useSelector(selectLoginStatus);
  const loginError = useSelector(selectLoginError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [cookies, setCookie] = useCookies(['userLogin']);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const loginErrorMessage = useSelector(selectLoginErrorMessage);

  useEffect(() => {
    if (cookies.userLogin) {
      onClose();
    }
    if (user) {
      setCookie('userLogin', user);
    }
  }, [cookies.userLogin, onClose, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const handleRegistrationClick = () => {
    setShowLoginForm(false);
    setShowRegistrationForm(true);
  };

  const handleCloseLoginForm = () => {
    onClose();
  };

  return (
    <div className={Styles.modalBackground}>
      <div className={Styles.modal}>
        {showLoginForm && (
          <>
            <div className={Styles.closeButtonContainer}>
              <Button variant="link" className={Styles.closeButton} onClick={handleCloseLoginForm}>
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <div className="input-group">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button variant="light" onClick={() => setShowPassword(!showPassword)}>
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </Button>
                </div>
              </Form.Group>
              <div>
                {loginStatus === 'failed' && <div className={Styles.errorMessage}>{loginErrorMessage}</div>}
              </div>
              <div className={Styles.buttonContainer}>
                <Button variant="primary" type="submit" disabled={loginStatus === 'loading'}>
                  {loginStatus === 'loading' ? 'Loading...' : 'Iniciar sesión'}
                </Button>
                <Button variant="primary" onClick={handleRegistrationClick} disabled={loginStatus === 'loading'}>
                  {loginStatus === 'loading' ? 'Loading...' : 'Registrar'}
                </Button>

              </div>
            </Form>
          </>
        )}
      </div>
      {showRegistrationForm && <RegistrationForm onClose={onClose} />}
    </div>
  );
};

export default LoginForm;