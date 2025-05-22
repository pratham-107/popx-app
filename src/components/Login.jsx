// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real app, this would be an API call
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.email === email) {
      // Simulate successful login
      localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      navigate("/account");
    } else {
      alert("Email not found. Please sign up first.");
    }
  };

  return (
    <div className="app-container">
      <div className="mobile-frame">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="welcome-text">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
