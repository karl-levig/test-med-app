import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    const email = sessionStorage.getItem("email");

    if (token && email) {
      setIsLoggedIn(true);
      const nameFromEmail = email.split("@")[0]; // pran pati avan @
      setUserName(nameFromEmail);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav>
      {/* Logo */}
      <div className="nav__logo">
        <Link to="/">StayHealthy 🧑‍⚕️</Link>
      </div>

      {/* Links */}
      <ul className="nav__links">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/appointments">Appointments</Link>
        </li>

        {/* Kondisyon pou Login / Logout */}
        {isLoggedIn ? (
          <li className="link user-info">
            <span className="welcome-text">Welcome, {userName}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li className="link">
              <Link to="/signup">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
