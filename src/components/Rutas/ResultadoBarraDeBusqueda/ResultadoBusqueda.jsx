import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../../FiltrosDeBusqueda/BarraDeBusqueda/BarraDeBusqueda';

const SearchResults = ({ categories }) => {
    const { term } = useParams(); // Obtiene el término de búsqueda de los parámetros de la URL
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
    }, []); // Solo se llama una vez al montar el componente

    useEffect(() => {
        // Filtrar productos cada vez que cambie el término
        filterProducts(products, term);
    }, [term, products]); // Volver a filtrar si cambian los productos o el término

    const filterProducts = (products, term) => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(term.toLowerCase()) ||
            product.category.toLowerCase() === term.toLowerCase()
        );
        setFilteredProducts(filtered);
    };

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div className="search-results">
            <SearchBar categories={categories} />
            <h2>Resultados de búsqueda para "{term}"</h2> {/* Mostrar el término actual de búsqueda */}
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div className="product-card" key={product.id}>
                            <img src={product.thumbnail} alt={product.title} className="product-image" />
                            <h3>{product.title}</h3>
                            <p className="price">Precio: ${product.price}</p>
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
