import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h3>Furniture Store</h3>
            <p>
              Beautiful furniture for beautiful homes. <br />
              Discover our collection and create
              your perfect space.
            </p>
          </div>

          <div className="col-lg-2 col-md-4 mb-4">
            <h5>Links</h5>
            <Link to="/">Home</Link>
            <Link to="/products">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-lg-3 col-md-4 mb-4">
            <h5>Account</h5>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart</Link>
          </div>

          <div className="col-lg-3 col-md-4 mb-4">
            <h5>Newsletter</h5>
            <p>
              Subscribe to get updates about
              our latest products.
            </p>

            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
              />

              <button className="btn btn-dark">Subscribe</button>
            </div>
          </div>
        </div>

        <hr/>

        <div className="text-center py-3">
        <p className="mb-0"> &copy; {new Date().getFullYear()} Furniture Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;