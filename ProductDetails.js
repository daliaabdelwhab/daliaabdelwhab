import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const ProductDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="container">
            {loading ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Category: {product.category}</p>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;