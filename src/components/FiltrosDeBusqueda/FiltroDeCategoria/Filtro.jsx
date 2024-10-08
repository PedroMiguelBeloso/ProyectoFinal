import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../../../services/productService';

const ProductFilter = ({ selectedCategory, onFilter }) => {
    const navigate = useNavigate(); 
    const [categories, setCategories] = useState([]);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        onFilter(category); 
    };

    useEffect(() => {
        const loadProductsAndCategories = async () => {
            try {
                const categories = await fetchCategories();
                setCategories(categories);
            } catch (error) {
                console.error('Error loading products and categories:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProductsAndCategories();
    }, []);

    return (
        <div className="product-filter">
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Todas las categorías</option>
                {Array.isArray(categories) && categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProductFilter;
