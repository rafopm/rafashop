import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import Styles from '../styles/ProductCard.module.css'
import { convertToPath } from "../lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSyncAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Container, Row, Col, Carousel, Button, Form } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RelatedProducts from './RelatedProducts';
import CarouselProducts from './CarouselProducts';

const ProductCard = ({ item, showAs, qty }) => {
    const decodedHTML = Buffer.from(item.detalles, 'base64').toString('utf-8');


    const generateWhatsAppLink = () => {
        const number = "51123456789";
        const url = `https://wa.me/${number}?text=${encodeURIComponent(
            `¡Hola! Estoy interesad@ en el producto ${item.title} que vi en tu sitio web. ¿Me puedes proporcionar más información? ${window.location.href}`
        )}`;
        window.open(url, "_blank");
    };


    if (showAs === "Page") {
        return (
            <>
                <Container fluid className="pb-5 mt-5">
                    <Row className="px-xl-5">
                        <Col lg={5} className="mb-30">
                            <Carousel id="product-carousel" className="carousel slide" data-ride="carousel">


                                {item.imagenes.map((imagen, index) => (
                                    <Carousel.Item key={index}>
                                        <img className="w-100 h-100" src={imagen.url} alt={imagen.description} style={{ objectFit: 'cover' }} />
                                        <Carousel.Caption>
                                            
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col lg={7} className="h-auto mb-30">
                            <div className="h-100 bg-light p-30">
                                <h3>{item.nombre}</h3>
                                <div className="d-flex mb-3">
                                    <div className="text-primary mr-2">
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star"></small>
                                        <small className="fas fa-star-half-alt"></small>
                                        <small className="far fa-star"></small>
                                    </div>
                                    <small className="pt-1">(99 Reviews)</small>
                                </div>
                                <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                                <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                                    clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                                    Nonumy</p>
                                <div className="d-flex mb-3">
                                    <strong className="text-dark mr-3">Sizes:</strong>
                                    <Form>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Form.Check
                                                type="radio"
                                                id="size-1"
                                                name="size"
                                                label="XS"
                                                className="custom-control-input"
                                            />
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Form.Check
                                                type="radio"
                                                id="size-2"
                                                name="size"
                                                label="S"
                                                className="custom-control-input"
                                            />
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Form.Check
                                                type="radio"
                                                id="size-3"
                                                name="size"
                                                label="M"
                                                className="custom-control-input"
                                            />
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Form.Check
                                                type="radio"
                                                id="size-4"
                                                name="size"
                                                label="L"
                                                className="custom-control-input"
                                            />
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Form.Check
                                                type="radio"
                                                id="size-5"
                                                name="size"
                                                label="XL"
                                                className="custom-control-input"
                                            />
                                        </div>
                                    </Form>
                                </div>
                                <div className="d-flex mb-4">
                                    <strong className="text-dark mr-3">Colors:</strong>
                                    <Form>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Form.Check
                                                type="radio"
                                                id="color-1"
                                                name="color"
                                                label="Black"
                                                className="custom-control-input"
                                            />
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Form.Check
                                                type="radio"
                                                id="color-2"
                                                name="color"
                                                label="White"
                                                className="custom-control-input"
                                            />
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Form.Check
                                                type="radio"
                                                id="color-3"
                                                name="color"
                                                label="Red"
                                                className="custom-control-input"
                                            />
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Form.Check
                                                type="radio"
                                                id="color-4"
                                                name="color"
                                                label="Blue"
                                                className="custom-control-input"
                                            />
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <Form.Check
                                                type="radio"
                                                id="color-5"
                                                name="color"
                                                label="Green"
                                                className="custom-control-input"
                                            />
                                        </div>
                                    </Form>
                                </div>
                                <div className="d-flex align-items-center mb-4 pt-2">
                                    <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                                        <div className="input-group-btn">
                                            <Button className="btn btn-primary btn-minus">
                                                <i className="fa fa-minus"></i>
                                            </Button>
                                        </div>
                                        <input type="text" className="form-control bg-secondary border-0 text-center" value="1" />
                                        <div className="input-group-btn">
                                            <Button className="btn btn-primary btn-plus">
                                                <i className="fa fa-plus"></i>
                                            </Button>
                                        </div>
                                    </div>
                                    <Button className="btn btn-primary px-3">
                                        <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                                    </Button>
                                </div>
                                <div className="d-flex pt-2">
                                    <strong className="text-dark mr-2">Share on:</strong>
                                    <div className="d-inline-flex">
                                        <a className="text-dark px-2" href="">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a className="text-dark px-2" href="">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a className="text-dark px-2" href="">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a className="text-dark px-2" href="">
                                            <i className="fab fa-pinterest"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="px-xl-5">
                        <Col>
                            <Tabs
                                defaultActiveKey="profile"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Especificaciones">
                                    <div dangerouslySetInnerHTML={{ __html: decodedHTML }} />
                                </Tab>
                                <Tab eventKey="profile" title="Detalles adicionales">
                                    {item.informacion_adicional}
                                </Tab>

                            </Tabs>
                        </Col>
                    </Row>
                </Container>
                <CarouselProducts />
            </>
        );
    }

    if (showAs === "ListItem") {
        return (
            <Card style={{ maxWidth: '350px', padding: "20px" }} >
                <div>
                    <Card.Img variant="top" src={item.image} />
                </div>
                <div>
                    <h3>
                        <div>{item.nombre}</div>
                    </h3>

                    <div>{item.precio}</div>
                    {qty === 0 ? "" : <div>{qty} units</div>}
                    {qty === 0 ? "" : <div>Subtotal: ${qty * item.precio}</div>}
                </div>
            </Card>
        );
    }

    return (
        <Card style={{ maxWidth: '350px', padding: "20px" }} >
            <div className={Styles.imageContainer}>
                <Card.Img variant="top" src={item.imagenes[0].url} className={Styles.image} />
                <div className={Styles.productAction}>
                    <a className="btn btn-outline-dark btn-square" href="">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                    <a className="btn btn-outline-dark btn-square" href="">
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    {/* <a className="btn btn-outline-dark btn-square" href="">
                                    <FontAwesomeIcon icon={faSyncAlt} />
                                </a> */}
                    <Link className="btn btn-outline-dark btn-square" href={`/shop/${convertToPath(item.nombre)}-${item._id}`}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Link>
                </div>
            </div>
            <Card.Body className='text-center'>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                    <span>$ {item.precio.valor}</span>
                    <span>
                        <Rating rate={item.rating.rate} />
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductCard