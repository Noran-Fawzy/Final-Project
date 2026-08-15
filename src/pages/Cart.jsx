import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <div className="container text-center">
          <i className="bi bi-cart-x empty-cart-icon"></i>
          <h2> Your Cart Is Empty</h2>
          <p> You haven't added any furniture yet.</p>
          <Link
            to="/products"
            className="btn shop-btn"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="container">
        <div className="section-title">
          <p className="text-uppercase text-muted">YOUR CART</p>
          <h1>Shopping Cart</h1>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />
                <div className="cart-item-info">
                  <p className="category">
                    {item.category}
                  </p>

                  <h5>
                    {item.title}
                  </h5>

                  <p className="price">
                    ${Number(item.price).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  <strong>
                    $
                    {(
                      Number(item.price) *
                      item.quantity
                    ).toFixed(2)}
                  </strong>
                </div>

                <button
                  className="btn btn-outline-danger"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  aria-label="Remove product"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="cart-summary">
              <h3>Cart Summary</h3>
              <div className="d-flex justify-content-between">
                <span>Items</span>
                <span>
                  {cartItems.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <span>Subtotal </span>
                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <strong>Total</strong>
                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>

              <Link
                to="/checkout"
                className="btn shop-btn w-100 mt-4"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/products"
                className="btn btn-outline-dark w-100 mt-2"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;