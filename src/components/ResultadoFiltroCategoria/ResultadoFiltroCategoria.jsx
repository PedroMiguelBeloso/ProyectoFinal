import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { fetchProductByCategory } from '../../services/productService';
import styles from './ResultadoBusqueda.module.css'; // Suponiendo que usas CSS Modules para estilo
import SearchBar from '../FiltrosDeBusqueda/BarraDeBusqueda/BarraDeBusqueda.jsx'; // Asegúrate de que la ruta sea correcta

const CategoryProducts = () => {
    const { category } = useParams(); 
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [maxPrice, setMaxPrice] = useState(Infinity); // Estado para el precio máximo

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
    }, [products, maxPrice]); // Incluye `maxPrice` como dependencia

    const filterProducts = (products) => {
        const filtered = products.filter(product => product.price <= maxPrice); // Filtrar por precio
        setFilteredProducts(filtered);
    };

    const handlePriceChange = (e) => {
        const price = e.target.value ? parseFloat(e.target.value) : Infinity;
        setMaxPrice(price); // Actualiza el estado del precio máximo
    };

    if (loading) {
        return <p>Cargando productos de la categoría...</p>;
    }

    return (
        <div className={styles.categoryProducts}>
            <h2>Productos en la categoría: {category}</h2>
            
            {/* Agrega el componente SearchBar aquí */}
            <SearchBar />

            {/* Filtro por precio */}
            <div className={styles.priceFilter}>
                <label>
                    Filtrar por precio máximo: 
                    <input 
                        type="number" 
                        placeholder="Ingrese precio máximo" 
                        onChange={handlePriceChange} 
                    />
                </label>
            </div>

            <div className={styles.categoryProductsContainer}>
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

export default CategoryProducts;
