// src/components/AccountSettings.jsx
import React, { useEffect, useState } from "react";
import "../styles/App.css";
import profile from "../assets/profile.jpg";

function AccountSettings() {
  const [user, setUser] = useState({ username: "", email: "" });

  useEffect(() => {
    const loggedInUser =
      JSON.parse(localStorage.getItem("loggedInUser")) ||
      JSON.parse(localStorage.getItem("user"));

    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div className="account-settings-container">
      <h1 className="account-title">Account Settings</h1>
      <div className="profile-section">
        <div className="avatar-container">
          <img src={profile} alt="Profile Avatar" className="avatar" />
          <span className="social-icon">
            <i className="fa-solid fa-camera"></i>
          </span>
        </div>
        <div className="profile-info">
          <h2 className="name">{user.username || "Guest"}</h2>
          <p className="email">{user.email || "No email provided"}</p>
        </div>
      </div>
      <hr className="divider" />
      <p className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      <hr className="divider" />
    </div>
  );
}

export default AccountSettings;
