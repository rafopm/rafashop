import React, { useState } from 'react'
import Styles from '../../styles/Product.module.css'
import ProductForm from './ProductForm';

const ProductRow = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    console.log('Item', item)

    if (status === 'loading') {
        return <div>Cargando...</div>;
    }

    const handleOpenModal = (itemForm) => {
        console.log('ProductId', itemForm)
        setSelectedProduct(itemForm);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (

        <div className={`row ${Styles.filas}`} key={item._id}>
            <div className={`col ${Styles.opciones}`}>
                <button onClick={() => handleOpenModal(item._id)}>Editar</button>
                <button >Eliminar</button></div>
            <div className={`col ${Styles.codigo}`}>{item._id}</div>
            <div className="col">{item?.nombre}</div>
            <div className="col">{item?.categoria?.nombre}</div>
            <div className="col">{item?.marca?.nombre}</div>
            {isModalOpen && (

                <ProductForm onClose={handleCloseModal} itemForm={item} />


            )}
        </div>

    )
}

export default ProductRow