import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../../../services/productService';
import './Filtro.css';

const ProductFilter = ({ selectedCategory, onFilter }) => {
    const navigate = useNavigate(); 
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); // Asegúrate de tener esto definido

    // Función para manejar el cambio de categoría
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        onFilter(category); 
    };

    // Efecto para cargar categorías
    useEffect(() => {
        const loadProductsAndCategories = async () => {
            try {
                setLoading(true); // Inicia el loading antes de cargar los datos
                const categoriesData = await fetchCategories(); // Cambié el nombre de la variable para evitar confusiones
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error loading products and categories:', error);
            } finally {
                setLoading(false); // Finaliza el loading
            }
        };

        loadProductsAndCategories(); // Llama a la función
    }, []); // Dependencias vacías para ejecutar solo una vez al montar el componente

    return (
        <div className="product-filter">
            {loading ? ( // Muestra un mensaje mientras se carga
                <p>Cargando categorías...</p>
            ) : (
                <select 
                    className="custom-select" 
                    value={selectedCategory} 
                    onChange={handleCategoryChange}
                >
                    <option value="">Todas las categorías</option>
                    {Array.isArray(categories) && categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default ProductFilter;
