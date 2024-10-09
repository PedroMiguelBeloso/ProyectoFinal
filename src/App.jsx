    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './shared/Navbar'; 
    import ProductList from './components/ProductList/ProductList';
    import Footer from './shared/Footer/footer.jsx';
    import SearchResults from './components/Rutas/ResultadoBarraDeBusqueda/ResultadoBusqueda.jsx'; 
    import CategoryProducts from './components/Rutas/ResultadoFiltroCategoria/ResultadoFiltroCategoria.jsx'; 
    import './App.css';

    function App() {
        return (
            <Router> {}
                <div className="App">
            
                    <Navbar />
                    <div className="d-flex">
                        
                        <div className="content">
                            <Routes>
                                
                                <Route path="/" element={<ProductList />} />
                                
                                
                                <Route path="/search/:term" element={<SearchResults />} />
                                
                                
                                <Route path="/category/:category" element={<CategoryProducts />} />
                            </Routes>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }

    export default App;
