// src/pages/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate saving user to localStorage
    const userData = {
      username: formData.fullName,
      email: formData.email,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // Navigate to account settings
    navigate("/account");
  };

  return (
    <div className="app-container">
      <div className="mobile-frame">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone number*</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="1234567890"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email address*</label>
            <input
              type="email"
              name="email"
              placeholder="marry@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Company name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Company Inc."
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Are you an Agency?*</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                  required
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
