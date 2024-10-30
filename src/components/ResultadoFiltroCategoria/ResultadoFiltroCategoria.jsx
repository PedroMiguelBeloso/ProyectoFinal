import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { fetchProductByCategory } from '../../services/productService';
import styles from './ResultadoBusqueda.module.css'; 
import SearchBar from '../FiltrosDeBusqueda/BarraDeBusqueda/BarraDeBusqueda.jsx'; 
import BackButton from '../BotonDeVolver';

const CategoryProducts = () => {
    const { category } = useParams(); 
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [maxPrice, setMaxPrice] = useState(Infinity); 
    const navigate = useNavigate(); 

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

    useEffect(() => {
        filterProducts(products);
    }, [products, maxPrice]); 

    const filterProducts = (products) => {
        const filtered = products.filter(product => product.price <= maxPrice); 
        setFilteredProducts(filtered);
    };

    const handlePriceChange = (e) => {
        const price = e.target.value ? parseFloat(e.target.value) : Infinity;
        setMaxPrice(price); 
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    if (loading) {
        return <p>Loading category products...</p>;
    }

    return (
        <div className={styles.categoryProducts}>
            <h2>Products in category: {category}</h2>
            <BackButton/>
            
            <SearchBar />

            <div className={styles.priceFilter}>
                <label>
                    Filter by maximum price: 
                    <input 
                        type="number" 
                        placeholder="Enter maximum price" 
                        onChange={handlePriceChange} 
                    />
                </label>
            </div>

            <div className={styles.categoryProductsContainer}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div 
                            className={styles.productCard} 
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                        >
                            <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
                            <h3>{product.title}</h3>
                            <p className={styles.price}>Price: ${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryProducts;
