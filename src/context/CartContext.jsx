import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
const [cartItems, setCartItems] = useState(() => {
const savedCart = localStorage.getItem("cart");
    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  function updateCart(updatedCart) {
    setCartItems(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  }

  function addToCart(product) {
    const existingProduct = cartItems.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    }
    updateCart(updatedCart);
  }

  function removeFromCart(id) {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );
    updateCart(updatedCart);
  }

  function increaseQuantity(id) {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
    updateCart(updatedCart);
  }


  function decreaseQuantity(id) {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  }

  const cartCount = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}