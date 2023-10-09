'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import Styles from '../styles/ProductList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSyncAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    console.log(products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container-fluid pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className=" pr-3">Productos</span></h2>
            <div className="d-flex justify-content-around flex-wrap  mx-xl-5 gap-2">
                {products.map((product) => (
                    <Card style={{ maxWidth: '350px', padding: "20px" }} key={product.id}>
                        <div className={Styles.imageContainer}>
                            <Card.Img variant="top" src={product.image} className={Styles.image} />
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
                                <a className="btn btn-outline-dark btn-square" href="">
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                            </div>
                        </div>
                        <Card.Body className='text-center'>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <div>$ {product.price}</div>
                                <div>
                                    <Rating rate={product.rating.rate} />
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>

    );
};

export default ProductList;
