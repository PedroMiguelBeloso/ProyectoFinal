import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : []; // Cargar el carrito desde localStorage al inicializar
    });
    const [cartQuantity, setCartQuantity] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);


    // Función para agregar un item al carrito
    const addItem = (item) => {
        if (!isInCart(item.id) && item.quantityToAdd > 0) {
            setCart((prevCart) => [...prevCart, item]);

        } else {
            console.log("Articulo previamente agregado o la cantidad seleccionada fue 0");
        }
    };

    // Función para eliminar un item del carrito
    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    };

    // Función para limpiar el carrito
    const clear = () => {
        setCart([]);
    };

    // Verificar si un item ya está en el carrito
    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    // Calcular la cantidad total de items en el carrito
    const calcQuantity = () => {
        const quantity = cart.reduce((total, item) => total + item.quantityToAdd, 0);
        setCartQuantity(quantity);
    };

    // Calcular el total del carrito
    const calcTotal = () => {
        const total = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantityToAdd), 0);
        setPriceTotal(total);
    };

    // Efecto para calcular la cantidad y el total cada vez que cambia el carrito
    useEffect(() => {
        calcQuantity();
        calcTotal();
        // Guardar el carrito en localStorage cada vez que cambia
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(JSON.parse(localStorage.getItem("cart")));

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
