import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const savedUser =
      localStorage.getItem("user");
    if (!savedUser) {
      alert(
        "No account found. Please create an account first."
      );
      return;
    }

    const user = JSON.parse(savedUser);
    if (
      user.email === email &&
      user.password === password
    ) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );
      alert(
        "Login successful Welcome to Furniture Store"
      );
      navigate("/");
    } else {
      alert(
        "Invalid email or password."
      );
    }
  }

  return (
    <section className="auth-page">
      <div className="container">
        <div className="auth-card">
          <div className="text-center mb-4">
            <h1> Welcome Back </h1>
            <p> Login to your Furniture Store account</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label"> Email </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label"> Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>

            <button
              type="submit"
              className="btn shop-btn w-100"
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Login
            </button>
          </form>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;