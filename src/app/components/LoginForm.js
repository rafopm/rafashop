'use client'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Styles from '../styles/LoginForm.module.css';
import { loginUser, selectUser, selectLoginStatus, selectLoginError } from '../redux/loginSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useCookies } from 'react-cookie';

const LoginForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loginStatus = useSelector(selectLoginStatus);
  const loginError = useSelector(selectLoginError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [cookies, setCookie] = useCookies(['userLogin']);

  useEffect(() => {
    if (cookies.userLogin) {
      onClose();
    }
  }, [cookies.userLogin, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setCookie('userLogin', user);
  };

  return (
    <div className={Styles.modalBackground}>
      <div className={Styles.modal}>
        <button onClick={onClose}>Cerrar</button>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="light" onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </Button>
            </div>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loginStatus === 'loading'}>
            {loginStatus === 'loading' ? 'Loading...' : 'Submit'}
          </Button>
          {loginStatus === 'failed' && <div className="error-message">{loginError}</div>}
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;