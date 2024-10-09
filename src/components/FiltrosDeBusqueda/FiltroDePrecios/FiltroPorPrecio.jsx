import React from 'react';

const FiltroPorPrecio = ({ onPriceFilter }) => {
  const handlePriceChange = (e) => {
    const selectedPrice = e.target.value;
    onPriceFilter(selectedPrice); // Llama a la función que manejará el filtrado
  };

  return (
    <div className="price-filter">
      <select className="form-control" onChange={handlePriceChange}>
        <option value="">Selecciona un rango de precio</option>
        <option value="10">Menos de $10</option>
        <option value="100">Menos de $100</option>
        <option value="1000">Menos de $1000</option>
      </select>
    </div>
  );
};

export default FiltroPorPrecio;
