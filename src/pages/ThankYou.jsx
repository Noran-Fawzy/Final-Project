import { Link } from "react-router-dom";

function ThankYou() {
  const savedOrder =
    localStorage.getItem("lastOrder");

  const order = savedOrder
    ? JSON.parse(savedOrder)
    : null;

  return (
    <section className="thank-you-page">
      <div className="container text-center">

        {/* SUCCESS ICON */}
        <div className="thank-you-icon">
          <i className="bi bi-check-circle"></i>
        </div>

        {/* TITLE */}
        <h1>Thank You</h1>

        {order ? (
          <>
            <p> Your order has been placed successfully.</p>
            <p>
              Thank you,{" "}
              <strong>
                {order.customer.name}
              </strong>
            </p>

            {/* ORDER TOTAL */}
            <div className="thank-you-summary">
              <p className="mb-1">Order Total</p>
              <h3>
                ${order.total.toFixed(2)}
              </h3>
            </div>
          </>
        ) : (
          <p>Your order has been placed successfully. </p>
        )}

        {/* BACK HOME */}
        <Link
          to="/"
          className="btn shop-btn mt-3"
        >
          <i className="bi bi-house me-2"></i>
          Back To Home
        </Link>
      </div>
    </section>
  );
}

export default ThankYou;