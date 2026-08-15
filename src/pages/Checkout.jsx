import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();
  const {
    cartItems,
    cartTotal,
  } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const order = {
      customer: formData,
      items: cartItems,
      total: cartTotal,
      date: new Date().toISOString(),
    };

    localStorage.setItem(
      "lastOrder",
      JSON.stringify(order)
    );
    navigate("/thank-you");
  }

  if (cartItems.length === 0) {
    return (
      <section className="checkout-page">
        <div className="container text-center">
          <i className="bi bi-cart-x fs-1"></i>
          <h2 className="mt-3">Your Cart Is Empty</h2>
          <p> Add some furniture before checking out.</p>
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
    <section className="checkout-page">
      <div className="container">
        <div className="section-title">
          <p className="text-uppercase text-muted">CHECKOUT</p>
          <h1> Complete Your Order</h1>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="checkout-card">
              <h3> Shipping Information </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label"> Full Name </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn shop-btn w-100 mt-3"
                >
                  <i className="bi bi-check2-circle me-2"></i>Place Order
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="cart-summary">
              <h3>Order Summary</h3>
              {cartItems.map((item) => (
                <div
                  className="checkout-item"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="checkout-item-info">
                    <h6>
                      {item.title.length > 25
                        ? item.title.substring(0, 25) + "..."
                        : item.title}
                    </h6>

                    <small>
                      {item.category}
                    </small>

                    <p>
                      ${Number(item.price).toFixed(2)}
                      {" × "}
                      {item.quantity}
                    </p>
                  </div>

                  <strong>
                    $
                    {(
                      Number(item.price) *
                      item.quantity
                    ).toFixed(2)}
                  </strong>
                </div>
              ))}

              <hr />

              <div className="d-flex justify-content-between">
                <span> Subtotal</span>
                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span>Shipping </span>
                <span> Free</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <strong> Total</strong>
                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;