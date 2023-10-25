'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchProducts,
    selectSearchTerm,
} from "../redux/productsSlice";
import ProductCard from './ProductCard';

const ProductList = () => {
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

    const topRatedProducts = filteredProducts
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 10);

    return (
        <div className="container-fluid pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className=" pr-3">Productos</span></h2>
            <div className="d-flex justify-content-around flex-wrap  mx-xl-5 gap-2">

                {topRatedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        item={product}
                        showAs="Default"
                    />
                ))}


            </div>
        </div>

    );
};

export default ProductList;
