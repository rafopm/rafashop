'use client'
import { useDispatch } from 'react-redux';
import { fetchProductById } from '@/app/redux/productsSlice';
import React, { useEffect, useState } from 'react';
import ProductCard from '@/app/components/ProductCard';

const Page = ({ params }) => {

    const match = params.id.match(/(\d+[a-zA-Z0-9]+)$/);
    const productId = match ? match[1] : null;

    const dispatch = useDispatch();
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (productId) {
                    const response = await dispatch(fetchProductById(productId));
                    setDatos(response.payload);
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };
        fetchData();
    }, [productId, dispatch]);
    return (
        <>
            {
                datos && <ProductCard item={datos} showAs="Page" />
            }

        </>
    );
};

export default Page;