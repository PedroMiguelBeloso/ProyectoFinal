import React, { useState } from 'react';
import './BarraDeBusqueda.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, ''); 
  };

  return (
    <div className="search-bar text-center">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;

  