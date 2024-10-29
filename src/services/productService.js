import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};



export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        const categories = response.data.map(category => category.name);
        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchProductByCategory = async (category) => {
    try {
        const response = await axios.get(`${API_URL}/category/${category}`);
        return response.data.products;
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
};


export const fetchProductsByPrice = async (maxPrice) => {
    try {
        const response = await axios.get(API_URL);
        const products = response.data.products;
        const filteredProducts = products.filter(product => product.price <= maxPrice);
        return filteredProducts;
    } catch (error) {
        console.error('Error fetching products by price:', error);
        throw error;
    }
};
export const fetchProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
};
