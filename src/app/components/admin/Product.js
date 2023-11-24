'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectProducts, selectSearchTerm, updateProduct } from '../../redux/productsSlice';
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
  const [searchTerm, setSearchTerm] = useState('');

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
    // Reemplaza la llamada a fetchProducts por dispatch(updateProduct) con el producto actualizado
    if (selectedProductId) {
      dispatch(updateProduct(response)); // Asegúrate de tener la respuesta (response) del servidor al agregar o actualizar el producto
    }
  };

  const handleCloseModalAdd = () => {
    setIsAddingProduct(false);
  };

  const handleAddProduct = () => {
    setIsAddingProduct(true);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className={Styles.addProduct}>
        <button className={Styles.boton} onClick={handleAddProduct}>Agregar producto</button>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Buscar por nombre"
        />
      </div>
      <div className={Styles.container}>
        <div className={Styles.tableContainer}>
          <div className={Styles.table}>
            <div className={`row ${Styles.filas}`}>
              <div className="col">Opciones</div>
              <div className={`col ${Styles.codigo}`}>Código</div>
              <div className="col">Nombre</div>
              <div className="col">Precio</div>
              <div className="col">Descuento (%)</div>
            </div>
            {products
              .filter((product) =>
                product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((product) => (
                <ProductRow key={product._id} item={product} />
              ))}
          </div>
        </div>
      </div>
      {isAddingProduct && <ProductForm onClose={handleCloseModalAdd} />}
    </div>
  );
};

export default Product;