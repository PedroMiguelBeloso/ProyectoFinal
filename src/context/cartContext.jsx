import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const [cartQuantity, setCartQuantity] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);


  
    const addItem = (item) => {
        if (!isInCart(item.id) && item.quantityToAdd > 0) {
            setCart((prevCart) => [...prevCart, item]);

        } 
    };

    
    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    };

    
    const clear = () => {
        setCart([]);
    };

    
    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    
    const calcQuantity = () => {
        const quantity = cart.reduce((total, item) => total + item.quantityToAdd, 0);
        setCartQuantity(quantity);
    };

    
    const calcTotal = () => {
        const total = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantityToAdd), 0);
        setPriceTotal(total);
    };

    
    useEffect(() => {
        calcQuantity();
        calcTotal();
        
        localStorage.setItem("cart", JSON.stringify(cart));

    }, [cart]);

    return (
        <>
            <CartContext.Provider value={{
                cart, setCart, addItem, removeItem, clear, cartQuantity, priceTotal
            }}>
                {children}
            </CartContext.Provider>
        </>
    );
};

export default CartContextProvider;
