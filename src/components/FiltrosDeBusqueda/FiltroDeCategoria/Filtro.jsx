import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../../../services/productService';
import './Filtro.css';

const ProductFilter = ({ selectedCategory, onFilter }) => {
    const navigate = useNavigate(); 
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true); 

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        onFilter(category); 
    };

    useEffect(() => {
        const loadProductsAndCategories = async () => {
            try {
                setLoading(true); 
                const categoriesData = await fetchCategories(); 
                setCategories(categoriesData);
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
            {loading ? ( 
               
                <p>Loading categories...</p>
                
            ) : (
                
                <select 
                    
                    className="custom-select" 
                    value={selectedCategory} 
                    onChange={handleCategoryChange}
                >
                    <option value="">All categories</option>
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
