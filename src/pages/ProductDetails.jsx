import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import productsData from "../data/products.json";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  // Find product by ID
  const product = productsData.find(
    (item) => item.id === Number(id)
  );

  // Product not found
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2> Product Not Found</h2>
      </div>
    );
  }

  return (
    <section className="product-details">
      <div className="container">
        <div className="row align-items-center">

          {/* ================= IMAGE ================= */}
          <div className="col-lg-6">
            <div className="details-image">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>

          {/* ================= DETAILS ================= */}
          <div className="col-lg-6">
            <p className="text-uppercase text-muted">
              {product.category}
            </p>

            <h1> {product.title} </h1>
            <h3 className="product-price">
              ${product.price.toFixed(2)}
            </h3>

            <p className="product-description">
              {product.description}
            </p>

            {/* ================= BUTTONS ================= */}
            <div className="d-flex gap-2">

              {/* ADD TO CART */}
              <button
                className="btn shop-btn"
                onClick={() => addToCart(product)}
              >
                <i className="bi bi-cart-plus me-2"></i>
                Add to Cart
              </button>

              {/* WISHLIST */}
              <button
                className="btn wishlist-detail-btn"
                onClick={() =>
                  toggleWishlist(product)
                }
                title={
                  isInWishlist(product.id)
                    ? "Remove from wishlist"
                    : "Add to wishlist"
                }
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;