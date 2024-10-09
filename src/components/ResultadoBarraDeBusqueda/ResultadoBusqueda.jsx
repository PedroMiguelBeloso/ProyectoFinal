import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../FiltrosDeBusqueda/BarraDeBusqueda/BarraDeBusqueda';
import styles from './ResultadoBusqueda.module.css'; 

const SearchResults = ({ categories }) => {
    const { term } = useParams(); 
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [maxPrice, setMaxPrice] = useState(Infinity); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); 

    useEffect(() => {
        filterProducts(products, term);
    }, [term, products, maxPrice]); 

    const filterProducts = (products, term) => {
        const filtered = products.filter(product =>
            (product.title.toLowerCase().includes(term.toLowerCase()) ||
            product.category.toLowerCase() === term.toLowerCase()) &&
            product.price <= maxPrice 
        );
        setFilteredProducts(filtered);
    };

    const handlePriceChange = (e) => {
        const price = e.target.value ? parseFloat(e.target.value) : Infinity;
        setMaxPrice(price); 
    };

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className={styles.searchResults}>
            <SearchBar categories={categories} />
            <h2>Resultados de búsqueda para "{term}"</h2> {}
            
            {}
            <div className={styles.priceFilter}>
                <label>
                    Filtrar por precio máximo deseado: 
                    <input 
                        type="number" 
                        placeholder="Ingrese precio máximo" 
                        onChange={handlePriceChange} 
                    />
                </label>
            </div>

            <div className={styles.productGrid}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div className={styles.productCard} key={product.id}>
                            <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
                            <h3>{product.title}</h3>
                            <p className={styles.price}>Precio: ${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron productos.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
