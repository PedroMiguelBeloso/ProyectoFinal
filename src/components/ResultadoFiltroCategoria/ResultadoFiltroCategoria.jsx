import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { fetchProductByCategory } from '../../services/productService';


const CategoryProducts = () => {
    const { category } = useParams(); 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCategoryProducts = async () => {
            try {
                const filteredProducts = await fetchProductByCategory(category);
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products by category:', error);
            } finally {
                setLoading(false);
            }
        };

        if (category) {
            loadCategoryProducts();
        }
    }, [category]);

    if (loading) {
        return <p>Cargando productos de la categoría...</p>;
    }

    return (
        <div className="category-products">
            <h2>Productos en la categoría: {category}</h2>
            <div className="category-products-container">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                        <h3>{product.title}</h3>
                        <p className="price">Precio: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryProducts;
