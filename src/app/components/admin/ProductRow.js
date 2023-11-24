'use client'

import React, { useState, useEffect } from 'react';
import Styles from '../../styles/Product.module.css';
import ProductForm from './ProductForm';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductById,updateProduct } from '../../redux/productsSlice';
import { updateProductAsync } from '../../redux/productsSlice';

const ProductRow = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [selectedProduct, setSelectedProduct] = useState(null);
  const selectedProduct = useSelector((state) => state.products.selectedProduct); // Use useSelector to get the latest state
  const enableDisableButtonName = item?.activo ? "Deshabilitar" : "Habilitar";
  const isActive = item?.activo ? true : false;
  const status = useSelector((state) => state.products.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if ( !selectedProduct) {
      console.log('Fetching product details...',item._id);
      dispatch(fetchProductById(item._id));
    }
  }, [isModalOpen, selectedProduct]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log('Select Product', selectedProduct);
  console.log('Item Product', item);

  const handleEnableDisable = async () => {
    const updatedProduct = {
      id: item._id,
      body: {
        ...item,
        activo: !item.activo,
      },
    };
    const response = await dispatch(updateProductAsync(updatedProduct));
    console.log('updateProduct response:', response);
  };

  return (
    <div className={`row ${isActive ? Styles.greenRow : Styles.redRow}`} key={item?._id}>

      <div className={`col ${Styles.opciones}`}>
        <button className={Styles.boton} onClick={handleOpenModal}>Editar</button>
        <button className={Styles.boton} onClick={handleEnableDisable}>{enableDisableButtonName}</button>

      </div>
      <div className={`col ${Styles.codigo}`}>{item?._id}</div>
      <div className="col">{item?.nombre}</div>
      <div className="col">{item?.precio}</div>
      <div className="col">{item?.descuentos}</div>
      {isModalOpen && (
        <ProductForm onClose={handleCloseModal} itemForm={ item} />
      )}
    </div>
  );
};

export default ProductRow;