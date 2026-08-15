import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();
export function WishlistProvider({ children }) {
const [wishlist, setWishlist] = useState(() => {
const savedWishlist =
      localStorage.getItem("wishlist");
    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  function updateWishlist(updatedWishlist) {
    setWishlist(updatedWishlist);
    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  }

  function toggleWishlist(product) {
    const exists = wishlist.some(
      (item) => item.id === product.id
    );

    let updatedWishlist;

    if (exists) {
      updatedWishlist = wishlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedWishlist = [
        ...wishlist,
        product,
      ];
    }
    updateWishlist(updatedWishlist);
  }

  function isInWishlist(id) {
    return wishlist.some(
      (item) => item.id === id
    );
  }

  function removeFromWishlist(id) {
    const updatedWishlist =
      wishlist.filter(
        (item) => item.id !== id
      );
    updateWishlist(updatedWishlist);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}