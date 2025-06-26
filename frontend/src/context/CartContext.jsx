import React, {createContext, useContext, useState, useEffect} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (error) {
                console.error("Error loading cart from localStorage:", error);
                setCartItems([]);
            }
        }
    }, []);

    // Save cart to localStorage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart or increment quantity if item already exists
    const addToCart = (product, quantity = 1) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? {...item, quantity: item.quantity + quantity}
                        : item
                );
            } else {
                return [...prevItems, {...product, quantity}];
            }
        });
    };

    // Remove item from cart completely
    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };

    // Update quantity of specific item
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? {...item, quantity: newQuantity} : item
            )
        );
    };

    // Clear entire cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Toggle cart drawer/modal
    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    // Calculate total number of items in cart
    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Calculate total price of cart
    const getTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    // Check if specific item is in cart
    const isInCart = (productId) => {
        return cartItems.some((item) => item.id === productId);
    };

    // Get quantity of specific item in cart
    const getItemQuantity = (productId) => {
        const item = cartItems.find((item) => item.id === productId);
        return item ? item.quantity : 0;
    };

    const value = {
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        getTotalItems,
        getTotalPrice,
        isInCart,
        getItemQuantity,
        setIsCartOpen,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
