import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductFilter = ({ categories, selectedCategory, onFilter }) => {
    const navigate = useNavigate(); 

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        onFilter(category); 
    };

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
