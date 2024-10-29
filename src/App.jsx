import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar'; 
import ProductList from './components/ProductList/ProductList';
import SearchResults from './components/ResultadoBarraDeBusqueda/ResultadoBusqueda.jsx'; 
import CategoryProducts from './components/ResultadoFiltroCategoria/ResultadoFiltroCategoria.jsx'; 
import ProductDetail from './components/ResultadoDetalleDelProducto/Detalle.jsx'; 
import Footer from './shared/Footer/footer.jsx';
import AboutUs from './components/AboutUs/AboutUs'; 
import ContactResult from './components/ContactResult/ContactResult.jsx'; 
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="d-flex">
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                            <Route path="/search/:term" element={<SearchResults />} />
                            <Route path="/category/:category" element={<CategoryProducts />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/contact" element={<ContactResult />} /> 
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
