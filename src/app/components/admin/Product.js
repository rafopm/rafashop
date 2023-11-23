'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectProducts, selectSearchTerm } from '../../redux/productsSlice';
import Styles from '../../styles/Product.module.css';
import ProductForm from './ProductForm';
import ProductRow from './ProductRow';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productId, setProductId] = useState(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  console.log(products)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Cargando...</div>;
  }

  const handleOpenModal = (productId) => {
    console.log('ProductId', productId)
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(fetchProducts());
  };

  const handleCloseModalAdd = () => {
    setIsAddingProduct(false);
  };

  const handleAddProduct = () => {
    setIsAddingProduct(true);
  };

  return (
    <div>
      <div><button onClick={handleAddProduct}>Agregar producto</button> / input para filtrar productos</div>
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
              <>
                <ProductRow item={product} />
              </>
            ))}
          </div>
        </div>
      </div>
      {isAddingProduct && <ProductForm onClose={handleCloseModalAdd}/>}
    </div>
  );
};

export default Product;