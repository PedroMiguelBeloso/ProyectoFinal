import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductFilter from '../FiltroDeCategoria/Filtro.jsx'; 
import './BarraDeBusqueda.css';

const SearchBar = ({ categories }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category) {
      navigate(`/category/${category}`); // Navega a la categoría seleccionada
    } else {
      navigate('/'); // Redirige a la página principal si no hay categoría seleccionada
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim() !== '') {
      navigate(`/search/${searchTerm}`); // Navega a la ruta de búsqueda
      // No alteramos selectedCategory aquí para mantener su valor
    }
  };

  return (
    <div className="search-bar text-center">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      
      <ProductFilter 
        categories={categories} // Asegúrate de que se pasan todas las categorías
        selectedCategory={selectedCategory} // Mantiene la categoría seleccionada
        onFilter={handleCategoryChange} 
      />
    </div>
  );
};

export default SearchBar;
