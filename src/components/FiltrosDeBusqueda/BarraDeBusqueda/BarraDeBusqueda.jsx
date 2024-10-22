import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductFilter from '../FiltroDeCategoria/Filtro.jsx'; 
import FiltroPorPrecio from '../FiltroDePrecios/FiltroPorPrecio.jsx';
import './BarraDeBusqueda.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category) {
      navigate(`/category/${category}`);
    } else {
      navigate('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter the name of a product or its category here and press enter.."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    
      <ProductFilter 
        selectedCategory={selectedCategory} 
        onFilter={handleCategoryChange} 
      />
    </div>
  );
};

export default SearchBar;
