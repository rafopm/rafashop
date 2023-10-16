'use client'
import React from 'react'
import { Col, Carousel } from 'react-bootstrap';
import Styles from '../styles/Carousel.module.css'

const CarouselHome = () => {
    const carouselItems = [
        {
            image: 'img/carousel-1.jpg',
            title: '.',
            description: '.',
        },
        {
            image: 'img/carousel-2.jpg',
            title: '.',
            description: '.',
        },
        {
            image: 'img/carousel-3.jpg',
            title: '.',
            description: '.',
        },
    ];

    return (
        <div className={Styles.container}>

            <div className={Styles.carouselContainer}>
                <Carousel className={Styles.carousel}>
                    {carouselItems.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img className="w-100 h-100" src={item.image} alt={`Carousel ${index + 1}`} style={{ objectFit: 'cover' }} />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className={Styles.offers}>
                <div className="product-offer mb-30 position-relative" >
                    <img className="img-fluid" src="img/offer-1.jpg" alt="" />
                    <div className={Styles.offerText}>
                        <h6 className="text-white text-uppercase">Ahorra 10%</h6>
                        <h3 className="text-white mb-3">Oferta de Temporada</h3>
                        <a href="" className="btn btn-primary rounded-0 border-0" style={{ backgroundColor: "#FFD333", color: "#000" }}>Compra ya</a>
                    </div>
                </div>
                <div className="product-offer mb-30 position-relative" >
                    <img className="img-fluid" src="img/offer-2.jpg" alt="" />
                    <div className={Styles.offerText}>
                        <h6 className="text-white text-uppercase">Ahorra 20%</h6>
                        <h3 className="text-white mb-3">Oferta de Aniversario</h3>
                        <a href="" className="btn btn-primary rounded-0 border-0" style={{ backgroundColor: "#FFD333", color: "#000" }}>Compra ya</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CarouselHome;