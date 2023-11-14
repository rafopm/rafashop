'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Styles from '../styles/RegistrationForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { registerUser, selectStatus } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const RegistrationForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('buyer');
    const [showPassword, setShowPassword] = useState(false);
    const status = useSelector(selectStatus);
    const [nombresError, setNombresError] = useState('');
    const [apellidosError, setApellidosError] = useState('');
    const [dniError, setDniError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showComponent, setShowComponent] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar que todos los campos estén llenos
        if (!nombres || !apellidos || !dni || !password) {
            setNombresError('Ingrese sus nombres');
            setApellidosError('Ingrese sus apellidos');
            setDniError('Ingrese su DNI');
            setPasswordError('Ingrese su contraseña');
            return;
        }
        // Validar formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Ingrese un correo electrónico válido');
            return;
        }
        dispatch(registerUser({ nombres, apellidos, dni, email, password, rol }));
    };

    const handleCloseForm = () => {
        setShowComponent(false);
        onClose();
    };

    return (
        <>
            {showComponent && (
                <div className={Styles.modalBackground}>
                    <div className={Styles.modal}>
                        <div className={Styles.closeButtonContainer}>
                            <Button variant="link" className={Styles.closeButton} onClick={handleCloseForm}>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </div>
                        {status === 'loading' && <div>Cargando...</div>}
                        {status === 'succeeded' && <div>¡Registro exitoso!</div>}
                        {status === 'failed' && <div className="">Error al registrar</div>}
                        {status !== 'succeeded' && (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tus nombres" value={nombres} onChange={(e) => setNombres(e.target.value)} />
                                    {!nombres && <div className={Styles.errorMensaje}>{nombresError}</div>}
                                </Form.Group>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tus apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                                    {!apellidos && <div className={Styles.errorMensaje}>{apellidosError}</div>}
                                </Form.Group>
                                <Form.Group controlId="formDni">
                                    <Form.Label>DNI</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tu DNI" value={dni} onChange={(e) => setDni(e.target.value)} />
                                    {!dni && <div className={Styles.errorMensaje}>{dniError}</div>}
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresa tu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {!email && <div className={Styles.errorMensaje}>{emailError}</div>}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
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
                                    {!password && <div className={Styles.errorMensaje}>{passwordError}</div>}
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Registrarse
                                </Button>
                            </Form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default RegistrationForm;