import React, { useState } from 'react';
import { fetchProductsByPrice } from '../../../services/productService.js'; 
import './FiltroPorPrecio.css'; // Asegúrate de que tu archivo CSS esté vinculado correctamente

const FiltroPorPrecio = () => {
    const [maxPrice, setMaxPrice] = useState(100); 
    const [products, setProducts] = useState([]);

    const handlePriceChange = (e) => {
        setMaxPrice(e.target.value); 
    };

    const handleSearch = async () => {
        try {
            const filteredProducts = await fetchProductsByPrice(maxPrice);
            setProducts(filteredProducts); 
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <h2>Filtrar productos por precio deseado</h2>
            <label>
                Precio máximo:
                <input 
                    type="number" 
                    value={maxPrice} 
                    onChange={handlePriceChange} 
                />
            </label>
            <button onClick={handleSearch}>Buscar</button>

            <div>
                <h3>Productos filtrados:</h3>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FiltroPorPrecio; 
