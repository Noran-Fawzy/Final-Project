import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
        >
        Furniture Store
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
              >
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-3 align-items-center">

            <Link
              to="/login"
              className="nav-icon"
            >
              <i className="bi bi-person"></i>
            </Link>

            <Link
              to="/wishlist"
              className="nav-icon position-relative"
            >
              <i className="bi bi-heart"></i>
              {wishlist.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="nav-icon position-relative"
            >
              <i className="bi bi-cart3"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;