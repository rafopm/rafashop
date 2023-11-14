'use client'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectProducts,selectSearchTerm } from '../../redux/productsSlice';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  console.log(products)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>Boton agregar producto / input para filtrar productos</div>
      <div>
        <div className="row">
        <div className="col">Código</div>
          <div className="col">Nombre</div>
          <div className="col">Categoría</div>
          <div className="col">Marca</div>
          <div className="col">Opciones</div>
        </div>
        {products.map((product) => (
          <div className="row" key={product._id}>
            <div className="col">{product._id}</div>
            <div className="col">{product.nombre}</div>
            <div className="col">{product.categoria}</div>
            <div className="col">{product.marca}</div>
            <div className="col">Editar / Eliminar</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;