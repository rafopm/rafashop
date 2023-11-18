'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectProducts, selectSearchTerm } from '../../redux/productsSlice';
import Styles from '../../styles/Product.module.css';
import ProductForm from './ProductForm';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productId, setProductId] = useState(null);

  console.log(products)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Cargando...</div>;
  }

  const handleOpenModal = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div><button onClick={handleOpenModal}>Agregar producto</button> / input para filtrar productos</div>
      <div className={Styles.container}>
        <div className={Styles.tableContainer}>
          <div className={Styles.table}>
            <div className={`row ${Styles.filas}`}>
              <div className="col">Opciones</div>
              <div className={`col ${Styles.codigo}`}>Código</div>
              <div className="col">Nombre</div>
              <div className="col">Categoría</div>
              <div className="col">Marca</div>
            </div>
            {products.map((product) => (
              <div className={`row ${Styles.filas}`} key={product._id}>
                <div className={`col ${Styles.opciones}`}>
                  <button onClick={() => handleOpenModal(product._id)}>Editar</button>
                  <button >Eliminar</button></div>
                <div className={`col ${Styles.codigo}`}>{product._id}</div>
                <div className="col">{product.nombre}</div>
                <div className="col">{product.categoria.nombre}</div>
                <div className="col">{product.marca.nombre}</div>

              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (

          <ProductForm onClose={handleCloseModal} productId={selectedProductId} />


      )}
    </div>
  );
};

export default Product;