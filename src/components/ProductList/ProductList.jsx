import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../FiltrosDeBusqueda/BarraDeBusqueda/BarraDeBusqueda'; 
import './ProductList.css'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
                
                const uniqueCategories = [...new Set(response.data.products.map(product => product.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            return `${title.substring(0, maxLength)}...`;
        }
        return title;
    };

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="product-list">
            <SearchBar categories={categories} />
            <div className="all-products-container">
                <div className="carousel">
                    <div className="carousel-track">
                        {products.map(product => (
                            <div className="product-card" key={product.id}>
                                <img src={product.thumbnail} alt={product.title} className="product-image" />
                                <h3>{truncateTitle(product.title, 20)}</h3>
                                <p className="price">Precio: ${product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="category-products">
                    {categories.map(category => (
                        <div key={category} className="category-section">
                            <h2>{category}</h2>
                            <div className="category-products-container">
                                {products
                                    .filter(product => product.category === category)
                                    .map(product => (
                                        <div className="product-card" key={product.id}>
                                            <img src={product.thumbnail} alt={product.title} className="product-image" />
                                            <h3>{truncateTitle(product.title, 20)}</h3>
                                            <p className="price">Precio: ${product.price}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
