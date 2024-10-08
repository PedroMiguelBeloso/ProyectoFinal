        import React from 'react';
        import './Navbar.css'; 

        const Navbar = () => {
            return (
                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">PNT2</a>
                    <div className="navbar-buttons">
                        <button className="nav-button">Inicio</button>
                        <button className="nav-button">Ofertas</button>
                    </div>
                </div>
            </nav>
        );
    };
    
    export default Navbar;