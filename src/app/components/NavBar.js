'use client'
import React from 'react'
import { Container, Row, Col, Button, Collapse, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaBars, FaAngleDown, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Overlay from 'react-bootstrap/Overlay';

const NavBar = () => {
    const [show, setShow] = React.useState(false);
    const target = React.useRef(null);

    const handleToggle = () => {
        setShow(!show);
    };
    return (
        <Container fluid className="bg-dark mb-30">
            <Row className="px-xl-5">
                <Col lg={3} className="d-none d-lg-block">
                    <div ref={target} style={{ height: '100%' }}>
                        <Button
                            className="d-flex align-items-center justify-content-between  w-100 rounded-0"

                            onClick={handleToggle}
                            style={{ padding: '0 30px', "background-color": "#FFD333", border: 'none', height: '100%', color: '#ffffff' }}
                        >
                            <h6 className="text-dark m-0 d-flex align-items-center gap-1">
                                <FaBars className="mr-2 ml-2" />
                                Categories
                            </h6>
                            <FaAngleDown className="text-dark" />
                        </Button>
                        <Overlay target={target.current} show={show} placement="bottom">
                            {(props) => (
                                <Dropdown.Menu {...props} className="position-fixed" style={{ border: 'none', width: '300px !important', width: '288px', left: '60px' }}>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            )}
                        </Overlay>
                    </div>
                </Col>
                <Col lg={9}>
                    <Navbar expand="lg" bg="dark" variant="dark" className="py-3 py-lg-0 px-0">
                        <Navbar.Brand href="" className="text-decoration-none d-block d-lg-none">
                            <span className="h1 text-uppercase text-dark  px-2" style={{ "background-color": "#fff"}}>RAFA</span>
                            <span className="h1 text-uppercase text-light px-2 ml-n1" style={{ "background-color": "#FFD333"}}>SHOP</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="navbarCollapse" className="justify-content-between">
                            <Nav className="navbar-nav mr-auto py-0">
                                <Nav.Link href="index.html" className="nav-item nav-link active">Home</Nav.Link>
                                <Nav.Link href="shop.html" className="nav-item nav-link">Shop</Nav.Link>
                                <Nav.Link href="detail.html" className="nav-item nav-link">Shop Detail</Nav.Link>
                                <NavDropdown title="Pages" id="nav-dropdown" >
                                    <NavDropdown.Item href="cart.html" >Shopping Cart</NavDropdown.Item>
                                    <NavDropdown.Item href="checkout.html">Checkout</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="contact.html" className="nav-item nav-link">Contact</Nav.Link>
                            </Nav>
                            <Nav className="navbar-nav ml-auto py-0 d-none  d-lg-flex gap-3 align-items-center"  style={{ height: '65px' }}>
                                <Nav.Link href="" className="btn px-0 ">
                                    <FaHeart  style={{ color: '#FFD333',marginRight:'5px' }}/>
                                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}> 0</span>
                                </Nav.Link>
                                <Nav.Link href="" className="btn px-0 ">
                                    <FaShoppingCart style={{ color: '#FFD333',marginRight:'5px' }}/>
                                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}> 0</span>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default NavBar