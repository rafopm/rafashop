'use client'
import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Collapse, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaBars, FaAngleDown, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Overlay from 'react-bootstrap/Overlay';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categoriesSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);
    const status = useSelector((state) => state.categories.status);
    const error = useSelector((state) => state.categories.error);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <Container fluid className="bg-dark mb-30 position-relative z-index-3">
            <Row className="px-xl-5">
                {/* <Col lg={3} className="d-none d-lg-block">

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="rounded-0 position-relative d-flex align-items-center justify-content-center"
                            style={{ backgroundColor: "#FFD333", border: 'none', height: '65px', color: '#000', width: '288px' }} >
                            <FaBars /><span className=" m-2"> Categorias</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="rounded-0" style={{ border: 'none', width: '288px' }}>
                            {categories.map((category) => (
                                <Dropdown.Item href="#/action-1" key={category._id}>{category.nombre}</Dropdown.Item>
                            ))}

                        </Dropdown.Menu>
                    </Dropdown>

                </Col> */}

                <Col lg={9}>
                    <Navbar expand="lg" bg="dark" variant="dark" className="py-3 py-lg-0 px-0">
                        <Navbar.Brand href="" className="text-decoration-none d-block d-lg-none">
                            <span className="h1 text-uppercase text-dark  px-2" style={{ "backgroundColor": "#fff" }}>RAFA</span>
                            <span className="h1 text-uppercase text-light px-2 ml-n1" style={{ "backgroundColor": "#FFD333" }}>SHOP</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="navbarCollapse" className="justify-content-between " style={{ height: '65px' }}>
                            <Nav className="navbar-nav mr-auto py-0">
                                <Nav.Link href="/" className="nav-item nav-link active">Inicio</Nav.Link>
                                <Nav.Link href="/shop" className="nav-item nav-link">Catálogo</Nav.Link>
                                
                                <Nav.Link href="/contact" className="nav-item nav-link">Contacto</Nav.Link>
                            </Nav>
                            {/* <Nav className="navbar-nav ml-auto py-0 d-none  d-lg-flex gap-3 align-items-center" style={{ height: '65px' }}>
                                <Nav.Link href="" className="btn px-0 ">
                                    <FaHeart style={{ color: '#FFD333', marginRight: '5px' }} />
                                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}> 0</span>
                                </Nav.Link>
                                <Nav.Link href="" className="btn px-0 ">
                                    <FaShoppingCart style={{ color: '#FFD333', marginRight: '5px' }} />
                                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}> 0</span>
                                </Nav.Link>
                            </Nav> */}
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default NavBar