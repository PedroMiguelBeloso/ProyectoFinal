import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import './ProductList.css'; 
    import ProductFilter from '../FiltroDeBusqueda/Filtro.jsx'; 
    import SearchBar from '../FiltroDeBusqueda/BarraDeBusqueda.jsx'; 

    const ProductList = () => {
        const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(true);
        const [filteredProducts, setFilteredProducts] = useState([]);
        const [categories, setCategories] = useState([]);
        const [selectedCategory, setSelectedCategory] = useState(''); 
        const [searchTerm, setSearchTerm] = useState(''); 
        

        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await axios.get('https://dummyjson.com/products');
                    setProducts(response.data.products);
                    setFilteredProducts(response.data.products);
                    const uniqueCategories = [...new Set(response.data.products.map(product => product.category))];
                    setCategories(uniqueCategories);
                } catch (error) {
                    console.error('Error fetching products:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchProducts();
        }, []);
      
        const handleSearch = (term) => {
            setSearchTerm(term); 
            const filtered = products.filter(product => 
                product.title.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredProducts(filtered);
        };

        
        const handleFilter = (term, category) => {
            setSearchTerm(term); 
            setSelectedCategory(category); 
            const filtered = products.filter(product => {
                const matchesSearchTerm = product.title.toLowerCase().includes(term.toLowerCase());
                const matchesCategory = category ? product.category === category : true;
                return matchesSearchTerm && matchesCategory;
            });
            setFilteredProducts(filtered);
        };


        if (loading) {
            return <p>Cargando productos...</p>;
        }

        return (
          
            <div className="product-list">
                {}
                <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
                <ProductFilter categories={categories} onFilter={handleFilter} />

                {}
                {searchTerm === '' && selectedCategory === '' && (
                    <div className="all-products-container">
                        <div className="carousel">
                            <div className="carousel-track">
                                {filteredProducts.map(product => (
                                    <div className="product-card" key={product.id}>
                                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                                        <h3>{product.title}</h3> {}
                                        <p className="price">Precio: ${product.price}</p> {}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {}
                {selectedCategory === '' && categories.map(category => (
                    <div key={category} className="category-container">
                        <h2 className="category-title">{category}</h2>
                        <div className="category-row">
                            {products.filter(product => product.category === category).map(product => (
                                <div className="product-card" key={product.id}>
                                    <img src={product.thumbnail} alt={product.title} className="product-image" />
                                    <h3>{product.title}</h3>
                                    <p className="price">Precio: ${product.price}</p> {}
                                    <p className="product-category">Categoría: {category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}


                {}
                {selectedCategory && (
                    <div className="category-container">
                        <h2 className="category-title">{selectedCategory}</h2>
                        <div className="category-row">
                        {filteredProducts.filter(product => product.category === selectedCategory).map(product =>(
                                    <div className="product-card" key={product.id}>
                                        <img src={product.thumbnail} alt={product.title} className="product-image" />
                                        <h3>{product.title}</h3> {}
                                        <p className="price">Precio: ${product.price}</p> {}
                                    </div>
                                
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    export default ProductList;

