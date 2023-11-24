'use client'
import { useEffect, useState, useRef } from 'react';
import Styles from '../styles/CarouselProducts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchProducts,
    selectSearchTerm,
} from "../redux/productsSlice";

function CarouselProducts() {
    const carousel = useRef(null);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);


  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
      dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const relatedProducts = filteredProducts
      .sort((a, b) => b.rating?.rate - a.rating?.rate)
      .slice(0, 10);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!relatedProducts || !relatedProducts.length) return null;

  return (
    <div className={Styles.container}>
        <h3>Tambien te puede interesar</h3>
      <div className={Styles.carousel} ref={carousel}>
        {relatedProducts.map((item) => {
          const { _id, nombre, precio, imagenes } = item;
          return (
            <div className={Styles.item} key={_id}>
              <div className={Styles.image}>
                <img src={imagenes[0].url} alt={nombre} />
              </div>
              <div className={Styles.info}>
                <span className={Styles.name}>{nombre}</span>
                <span className={Styles.price}>S/{precio}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.buttons}>
        <button onClick={handleLeftClick}>
          <img src="/img/right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/img/right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default CarouselProducts;