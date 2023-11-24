'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../redux/brandsSlice';
import { addProduct, updateProductAsync, updateProduct, fetchProductById } from '../../redux/productsSlice';
import Styles from '../../styles/ProductForm.module.css';

const ProductForm = ({ onClose, itemForm }) => {
    const [productData, setProductData] = useState({});
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const brands = useSelector((state) => state.brands.brands);
    const categories = useSelector((state) => state.categories.categories);

    const [id, setId] = useState(itemForm?._id || '');
    const [nombre, setNombre] = useState(itemForm?.nombre || '');
    const [descripcion, setDescripcion] = useState(itemForm?.descripcion || '');
    const [categoria, setCategoria] = useState(itemForm?.categoria || null);
    const [marca, setMarca] = useState(itemForm?.marca || null);
    const [descuentos, setDescuentos] = useState(itemForm?.descuentos || '');
    const [detalles, setDetalles] = useState(itemForm?.detalles || '');
    const [detallesToShow, setDetallesToShow] = useState(itemForm?.detalles || '');
    const [detallesToSubmit, setDetallesToSubmit] = useState(itemForm?.detalles || '');
    const [stock, setStock] = useState(itemForm?.stock || '');
    const [imagenes, setImagenes] = useState(itemForm?.imagenes || [{ url: '', descripcion: '' }, { url: '', descripcion: '' }, { url: '', descripcion: '' }]);

    const [modelo, setModelo] = useState(itemForm?.modelo || '');
    const [precio, setPrecio] = useState(itemForm?.precio || '');

    const [activo, setActivo] = useState(itemForm?.activo || '');

    //const decodedHTML = itemForm ? Buffer.from(itemForm.detalles, 'base64').toString('utf-8') : '';

    useEffect(() => {
        dispatch(fetchBrands());
    }, [dispatch]);

    useEffect(() => {
        if (itemForm) {
            setNombre(itemForm.nombre || '');
            setDescripcion(itemForm.descripcion || '');
            setCategoria(itemForm.categoria || '');
            setMarca(itemForm.marca || '');
            setDescuentos(itemForm.descuentos || '');
            setDetalles(itemForm.detalles || '');
            setDetallesToSubmit(itemForm.detalles || '');

            // Almacenar la versión codificada de los detalles
            const decodedHTML = Buffer.from(itemForm.detalles, 'base64').toString('utf-8');
            //const encodedHTML = Buffer.from(itemForm.detalles, 'base64').toString('utf-8');
            setDetallesToShow(decodedHTML);

            setStock(itemForm.stock || '');
            setModelo(itemForm.modelo || '');
            setPrecio(itemForm.precio || '');
            setImagenes(itemForm.imagenes || [{ url: '', descripcion: '' }, { url: '', descripcion: '' }, { url: '', descripcion: '' }]);

            setActivo(itemForm.activo || '');
        }
    }, [itemForm]);

    const handleChangeNombre = (e) => {
        setNombre(e.target.value);
    };
    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value);
    };
    // const handleChangeCategoria = (e) => {
    //     const selectedCategoria = categories.find(category => category._id === e.target.value);
    //     setCategoria(selectedCategoria?._id || '');
    // };

    const handleChangeCategoria = (e) => {
        const selectedCategoria = categories.find(category => category._id === e.target.value);
        setCategoria(selectedCategoria || null);
    };

    const handleChangeMarca = (e) => {
        const selectedMarca = brands.find(brand => brand._id === e.target.value);
        setMarca(selectedMarca || null);
    };

    const handleChangeDescuentos = (e) => {
        setDescuentos(e.target.value);
    };
    const handleChangeDetalles = (e) => {
        const rawHTML = e.target.value;
        setDetallesToSubmit(rawHTML);
        setDetallesToShow(rawHTML);
    };

    const handleChangeStock = (e) => {
        setStock(e.target.value);
    };

    const handleChangeModelo = (e) => {
        setModelo(e.target.value);
    };
    const handleChangePrecio = (e) => {
        setPrecio(e.target.value);
    };

    const handleChangeImagenes = (e, index) => {
        const newImagenes = [...imagenes];
        newImagenes[index] = { ...newImagenes[index], url: e.target.value, descripcion: `Imagen de ${nombre}` };
        setImagenes(newImagenes);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const encodedDetalles = Buffer.from(detallesToSubmit).toString('base64');
        const formData = {
            nombre,
            descripcion,
            categoria: categoria ? categoria._id : null,
            marca: marca ? marca._id : null,
            descuentos,
            detalles: encodedDetalles,
            imagenes: imagenes,
            modelo,
            precio,
            activo: true,
        };

        console.log('formData:', formData);

        try {
            if (itemForm) {
                const updatedProduct = {
                    id: itemForm._id,
                    body: formData,
                };

                const response = await dispatch(updateProductAsync(updatedProduct));
                console.log('updateProduct response:', response);
            } else {
                console.log('post', formData);
                const response = await dispatch(addProduct(formData));
                console.log('addProduct response:', response);
            }
            dispatch(updateProduct(response));
            onClose();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={`modal ${Styles.modal}`}>
            <br></br>
            <div className={`modalContent ${Styles.modalContent}`}>
                <span className={Styles.close} onClick={onClose}>

                </span>
                <h2>{itemForm ? 'Editar Producto' : 'Agregar Producto'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className={Styles.formGroup}>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre || ''}
                            onChange={handleChangeNombre}

                        />
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="descripcion">Descripción</label>
                        <input
                            type="text"
                            id="descripcion"
                            name="descripcion"
                            value={descripcion || ''}
                            onChange={handleChangeDescripcion}

                        />
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="categoria">Categoría</label>
                        <select
                            id="categoria"
                            name="categoria"
                            value={categoria ? categoria._id : ''}
                            onChange={handleChangeCategoria}

                        >
                            <option value="" disabled>Selecciona una categoría</option>
                            {categories.map((category) => (
                                <option value={category._id} key={category._id}>
                                    {category.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={`${Styles.formGroup} ${Styles.row}`}>
                        <div className={Styles.half}>
                            <label htmlFor="marca">Marca</label>
                            <select
                                id="marca"
                                name="marca"
                                value={marca ? marca._id : ''}
                                onChange={handleChangeMarca}

                            >
                                <option value="" disabled>Selecciona una marca</option>
                                {brands.map((brand) => (
                                    <option value={brand._id} key={brand._id}>
                                        {brand.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={Styles.half}>
                            <label htmlFor="modelo">Modelo</label>
                            <input
                                type="text"
                                id="modelo"
                                name="modelo"
                                value={modelo}
                                onChange={handleChangeModelo}

                            />
                        </div>
                    </div>
                    <div className={`${Styles.formGroup} ${Styles.row}`}>
                        <div className={Styles.half}>
                            <label htmlFor="precio">Precio</label>
                            <input
                                type="number"
                                id="precio"
                                name="precio"
                                value={precio}
                                onChange={handleChangePrecio}

                            />
                        </div>
                        <div className={Styles.half}>
                            <label htmlFor="descuentos">Descuento (%)</label>
                            <input
                                type="text"
                                id="descuentos"
                                name="descuentos"
                                value={descuentos}
                                onChange={handleChangeDescuentos}

                            />
                        </div>
                        <div className={Styles.half}>
                            <label htmlFor="nuevoprecio">Nuevo Precio</label>
                            <input
                                type="text"
                                id="nuevoprecio"
                                name="precio"
                                value={precio - precio * descuentos / 100}
                                onChange={handleChangePrecio}

                            />
                        </div>
                    </div>

                    <div className={Styles.formGroup}>
                        <label htmlFor="imagenes">Imágenes</label>
                        {Array.from(Array(3)).map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                id={`imagen${index}`}
                                name={`imagen${index}`}
                                value={imagenes[index]?.url || ''}
                                onChange={(e) => handleChangeImagenes(e, index)}
                            />
                        ))}
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="detalles">Detalles adicionales</label>
                        <textarea
                            id="detalles"
                            name="detalles"
                            value={detallesToShow}
                            onChange={handleChangeDetalles}
                        ></textarea>
                    </div>

                    <div className={Styles.formGroup}>
                        <div className={Styles.botones}>
                            <button type="submit">{itemForm ? 'Guardar Cambios' : 'Agregar Producto'}</button>
                            <button onClick={onClose}>Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ProductForm;