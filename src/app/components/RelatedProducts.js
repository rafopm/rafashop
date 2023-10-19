'use client'
import { Container, Row, Col, Button } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchProducts,
    selectSearchTerm,
} from "../redux/productsSlice";
import ProductCard from './ProductCard';
import Styles from '../styles/RelatedProducts.module.css'

const RelatedProducts = () => {
    const carousel = useRef(null);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    const [showButtons, setShowButtons] = useState(false);

    const searchTerm = useSelector(selectSearchTerm);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const related = filteredProducts
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 10);



    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };


    return (
        <div fluid className="py-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className=" pr-3">Productos relacionados</span>
            </h2>
            <Row className="px-xl-5">
                <Col>
                    <div className={Styles.carousel} ref={carousel}>
                        {related.map((product, index) => (
                            <ProductCard
                                className={`${Styles.item} ${showButtons ? Styles.visible : ''}`}

                                key={product.id}
                                item={product}
                                showAs="Default"
                            />
                        ))}
                    </div>
                    <div className={Styles.buttons}>
                        <button onClick={handleLeftClick}>
                            <img src="/img/right_chevron_icon.png" alt="Scroll Left" />
                        </button>
                        <button onClick={handleRightClick}>
                            <img src="/img/right_chevron_icon.png" alt="Scroll Right" />
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default RelatedProducts;