import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            'cart', 
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

    function addToCart(product) {
        const existingProduct = cartItems.find(
            item => item.id === product.id
        )
        if (existingProduct) {
            const updatedCart = cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            setCartItems(updatedCart)
        } else {
            setCartItems([
                ...cartItems,
                {
                    ...product,
                    quantity: 1
                }
            ])
        }
    }

    function removeFromCart(id) {
        const updatedCart = cartItems.filter(
            item => item.id !== id
        )
        setCartItems(updatedCart)
    }

    function increaseQuantity(id) {
        const updatedCart = cartItems.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
        setCartItems(updatedCart)
    }

    function decreaseQuantity(id) {
        const item = cartItems.find(
            item => item.id === id
        )
        if (!item) return
        if (item.quantity === 1) {
            removeFromCart(id)
            return
        }
        const updatedCart = cartItems.map(item =>
            item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1
                }
                : item
        )
        setCartItems(updatedCart)
    }

    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    )

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}