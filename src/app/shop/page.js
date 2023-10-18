'use client'

//import { getItems } from "../../services/ItemService";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {
    deleteProduct,
    fetchProducts,
    selectSearchTerm,
} from "../redux/productsSlice";
import ProductCard from "../components/ProductCard";


//import styleItems from "../../styles/product.module.css";

export default function Shop() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    const theme = useSelector((state) => state.theme);

    const [loading, setLoading] = useState(true);

    const searchTerm = useSelector(selectSearchTerm); // nuevo selector

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDeleteProduct = (productId) => {
        dispatch(deleteProduct(productId));
    };

    const handleSearchTermChange = (e) => {
        dispatch(updateSearchTerm(e.target.value)); // nueva acción
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>

            <div className="d-flex flex-wrap  mx-xl-5 gap-2 mt-5">
                <h3>Productos:</h3>
                <p>

                </p>
            </div>
            <div >
                {status === "loading" && (
                    <div>
                        Loading...
                    </div>
                )}
                {status === "failed" && <p>{error}</p>}
                {status === "succeeded" &&
                    (filteredProducts.length === 0 ? (
                        <p>No tenemos regalos con ese nombre.</p>
                    ) : (
                        <div className="d-flex justify-content-around flex-wrap  mx-xl-5 gap-2">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    item={product}
                                    showAs="Default"
                                />
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
}
 