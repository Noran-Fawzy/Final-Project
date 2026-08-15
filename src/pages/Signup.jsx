import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    // Check if an account already exists
    const existingUser =
      localStorage.getItem("user");
    if (existingUser) {
      const user = JSON.parse(existingUser);

      if (user.email === email) {
        alert(
          "An account with this email already exists."
        );
        return;
      }
    }

    // Create new user
    const newUser = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );

    alert(
      "Account created successfully!"
    );

    navigate("/login");
  }

  return (
  <section className="auth-page">
      <div className="container">
        <div className="auth-card">

          {/* TITLE */}
          <div className="text-center mb-4">
            <h1> Create Account</h1>
            <p>Join Furniture Store today </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSignup}>

            {/* NAME */}
            <div className="mb-3">
              <label className="form-label"> Name </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />
            </div>

            {/* EMAIL */}
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

            {/* PASSWORD */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Create a password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                minLength={6}
                required
              />
            </div>

            {/* SIGN UP BUTTON */}
            <button
              type="submit"
              className="btn shop-btn w-100"
            >
              <i className="bi bi-person-plus me-2"></i>
              Create Account
            </button>
          </form>

          {/* LOGIN */}
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;