import React, { useState } from "react";
import { Link } from "react-router-dom"; // 👉 Import Link pou navigation SPA
import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav>
        <div className="nav__logo">
          <Link to="/">
            StayHealthy
            <img
              src="/images/logo.png"
              alt="Doctor Icon"
              width="26"
              height="26"
              style={{ marginLeft: "5px" }}
            />
          </Link>
          <span>.</span>
        </div>

        <div className="nav__icon" onClick={handleClick}>
          <i className={isActive ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        <ul className={`nav__links ${isActive ? "active" : ""}`}>
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/appointments">Appointments</Link> {/* ✅ Koreksyon */}
          </li>
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
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
