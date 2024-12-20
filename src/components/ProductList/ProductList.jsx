import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import SearchBar from '../FiltrosDeBusqueda/BarraDeBusqueda/BarraDeBusqueda'; 
import './ProductList.css'; 
import { fetchCategories, fetchProducts } from '../../services/productService';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadProductsAndCategories = async () => {
            try {
                const products = await fetchProducts();
                setProducts(products);
            } catch (error) {
                console.error('Error loading products and categories:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProductsAndCategories();
    }, []);

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return `${title.substring(0, maxLength)}...`;
        }
        return title;
    };

    const productsByCategory = products.reduce((acc, product) => {
        const category = product.category || 'Without category';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    if (loading) {
        return <p>Loading products...</p>;
    }

    return (
        <div className="product-list">
            
            <SearchBar />
            <div className="all-products-container">
                <div className="carousel">
                    <div className="carousel-track">
                        {products.map(product => (
                            <div className="product-card" key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.thumbnail} alt={product.title} className="product-image" />
                                    <h3>{truncateTitle(product.title, 20)}</h3>
                                    <p className="price">Price: ${product.price}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                
                {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
                    <div key={category} className="category-section">
                        <h2>{category}</h2>
                        <div className="category-products">
                            {categoryProducts.map(product => (
                                <div className="product-card" key={product.id}>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                                        <h3>{truncateTitle(product.title, 20)}</h3>
                                        <p className="price">Price: ${product.price}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
