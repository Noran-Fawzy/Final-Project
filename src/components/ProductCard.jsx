import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="product-card">
        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
          />
          <button
            className="wishlist-btn"
            onClick={() =>
              toggleWishlist(product)
            }
            aria-label="Add to wishlist"
          >
            <i
              className={
                isInWishlist(product.id)
                  ? "bi bi-heart-fill"
                  : "bi bi-heart"
              }
            ></i>
          </button>
        </div>

        <div className="product-info">
          <p className="category">
            {product.category}
          </p>

          <h5>
            {product.title.length > 30
              ? product.title.substring(0, 30) + "..."
              : product.title}
          </h5>

          <p className="price">
            ${Number(product.price).toFixed(2)}
          </p>

          <div className="d-flex gap-2">
            <Link
              to={`/product/${product.id}`}
              className="btn btn-outline-dark btn-sm flex-grow-1"
            >
              View Details
            </Link>

            <button
              className="btn btn-dark btn-sm"
              onClick={() =>
                addToCart(product)
              }
              aria-label="Add to cart"
            >
              <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;