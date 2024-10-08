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