import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar'; 
import ProductList from './components/ProductList/ProductList';
import SearchResults from './components/ResultadoBarraDeBusqueda/ResultadoBusqueda.jsx'; 
import CategoryProducts from './components/ResultadoFiltroCategoria/ResultadoFiltroCategoria.jsx'; 
import ProductDetail from './components/ResultadoDetalleDelProducto/Detalle.jsx'; 
import Footer from './shared/Footer/footer.jsx'; 
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="d-flex">
                    <div className="content">
                        <Routes>
                            {/* Ruta para la lista de productos */}
                            <Route path="/" element={<ProductList />} />
                            
                            {/* Ruta para resultados de búsqueda */}
                            <Route path="/search/:term" element={<SearchResults />} />
                            
                            {/* Ruta para productos por categoría */}
                            <Route path="/category/:category" element={<CategoryProducts />} />

                            {/* Ruta para los detalles de un producto */}
                            <Route path="/product/:id" element={<ProductDetail />} />
                        </Routes>
                    </div>
                </div>
                <Footer /> 
            </div>
        </Router>
    );
}

export default App;
