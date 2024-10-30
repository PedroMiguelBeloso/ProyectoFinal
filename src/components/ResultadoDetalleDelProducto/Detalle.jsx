import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { fetchProductById } from '../../services/productService.js'; 
import  './Detalle.css';
import BackButton from '../BotonDeVolver';

const ProductDetail = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const productData = await fetchProductById(id);
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        getProduct();
    }, [id]);

    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        
        <div className="product-detail-container">
            <BackButton/>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <p className="rating">Rating: {product.rating}</p>
        </div>
    );
    
};

export default ProductDetail;
