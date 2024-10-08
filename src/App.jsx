    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './shared/Navbar'; 
    import Sidebar from './components/Sidebar/Sidebar';
    import ProductList from './components/ProductList/ProductList';
    import Footer from './shared/Footer/footer.jsx';
    import Header from './shared/Header/Header.jsx';
    import SearchResults from './components/ResultadoBarraDeBusqueda/ResultadoBusqueda.jsx'; 
    import CategoryProducts from './components/ResultadoFiltroCategoria/ResultadoFiltroCategoria.jsx'; 
    import './App.css';

    function App() {
        return (
            <Router> {}
                <div className="App">
                    <Header />
                    <div className="d-flex">
                        <Sidebar />
                        <div className="content">
                            <Routes>
                                {}
                                <Route path="/" element={<ProductList />} />
                                
                                {}
                                <Route path="/search/:term" element={<SearchResults />} />
                                
                                {}
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
