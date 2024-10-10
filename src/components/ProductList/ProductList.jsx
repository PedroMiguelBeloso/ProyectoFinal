import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link para navegación
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

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="product-list">
            <SearchBar />
            <div className="all-products-container">
                <div className="carousel">
                    <div className="carousel-track">
                        {products.map(product => (
                            <div className="product-card" key={product.id}>
                                <Link to={`/product/${product.id}`}> {/* Enlace a la página de detalles */}
                                    <img src={product.thumbnail} alt={product.title} className="product-image" />
                                    <h3>{truncateTitle(product.title, 20)}</h3>
                                    <p className="price">Precio: ${product.price}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
