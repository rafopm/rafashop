'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct, fetchProductById } from '../../redux/productsSlice';
import Styles from '../../styles/ProductForm.module.css';

const ProductForm = ({ onClose, productId }) => {
    const [productData, setProductData] = useState(null);
    const [formData, setFormData] = useState({});

    const dispatch = useDispatch();

    const fetchProduct = async (productId) => {
        try {
            const response = await dispatch(fetchProductById(productId));
            setProductData(response.payload);
        } catch (error) {
            // Manejo de errores
        }
    };

    useEffect(() => {
        setFormData(productData || {});
    }, [productData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('imagen')) {
            const index = Number(name.substring(6));
            setFormData((prevData) => ({
                ...prevData,
                imagenes: {
                    ...prevData.imagenes,
                    [index]: value,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productId) {
            dispatch(updateProduct(formData));
        } else {
            dispatch(addProduct(formData));
        }
        onClose();
    };

    return (
        <div className={`modal ${Styles.modal}`}>
            <div className={`modalContent ${Styles.modalContent}`}>
                <span className={Styles.close} onClick={onClose}>
                    &times;
                </span>
                <h2>{productId ? 'Editar Producto' : 'Agregar Producto'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className={Styles.formGroup}>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="descripcion">Descripción</label>
                        <input
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            value={formData.descripcion || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="categoria">Categoría</label>
                        <input
                            type="text"
                            id="categoria"
                            name="categoria"
                            value={formData.categoria || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="marca">Marca</label>
                        <input
                            type="text"
                            id="marca"
                            name="marca"
                            value={formData.marca || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="modelo">Modelo</label>
                        <input
                            type="text"
                            id="modelo"
                            name="modelo"
                            value={formData.modelo || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="precio">Precio</label>
                        <input
                            type="number"
                            id="precio"
                            name="precio"
                            value={formData.precio || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="descuentos">Descuentos</label>
                        <input
                            type="text"
                            id="descuentos"
                            name="descuentos"
                            value={formData.descuentos || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="imagenes">Imágenes</label>
                        {Array.from(Array(3)).map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                id={`imagen${index}`}
                                name={`imagen${index}`}
                                value={formData.imagenes && formData.imagenes[index] ? formData.imagenes[index] : ''}
                                onChange={handleChange}
                                required
                            />
                        ))}
                    </div>
                    <div className={Styles.formGroup}>
                        <div className={Styles.botones}>
                            <button type="submit">{productId ? 'Guardar Cambios' : 'Agregar Producto'}</button>
                            <button onClick={onClose}>Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;