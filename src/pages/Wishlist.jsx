import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const {
    addToCart,
  } = useCart();

  // Empty Wishlist
  if (wishlist.length === 0) {
    return (
      <section className="wishlist-page">
        <div className="container text-center">
          <i className="bi bi-heart empty-wishlist-icon"></i>
          <h2> Your Wishlist Is Empty</h2>
          <p> Save your favorite furniture here.</p>
          <Link
            to="/products"
            className="btn shop-btn"
          >
            Explore Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="wishlist-page">
      <div className="container">

        {/* TITLE */}
        <div className="section-title">
          <h1>My Wishlist</h1>
          <p> Your favorite furniture</p>
        </div>

        {/* PRODUCTS */}
        <div className="row">
          {wishlist.map((product) => (
            <div
              className="col-lg-3 col-md-6 mb-4"
              key={product.id}
            >
              <div className="product-card">

                {/* IMAGE */}
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                {/* INFO */}
                <div className="product-info">
                  <h5>
                    {product.title.length > 25
                      ? product.title.substring(0, 25) + "..."
                      : product.title}
                  </h5>

                  <p className="category">
                    {product.category}
                  </p>

                  <p className="price">
                    ${product.price.toFixed(2)}
                  </p>

                  {/* BUTTONS */}
                  <div className="d-flex gap-2">

                    {/* VIEW DETAILS */}
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-dark btn-sm"
                    >
                      View Details
                    </Link>

                    {/* ADD TO CART */}
                    <button
                      className="btn btn-dark btn-sm"
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      <i className="bi bi-cart-plus"></i>
                    </button>

                    {/* REMOVE */}
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() =>
                        removeFromWishlist(product.id)
                      }
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Wishlist;