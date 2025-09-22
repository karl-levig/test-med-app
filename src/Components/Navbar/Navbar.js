import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  // State pou kontwole si meni an ouvè oswa fèmen
  const [isActive, setIsActive] = useState(true);

  // Fonksyon pou jere klik sou icon nav la
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav>
        <div className="nav__logo">
          <a href="/">
            StayHealthy
            <img
              src="images/logo.png"
              alt="Doctor Icon"
              width="26"
              height="26"
              style={{ marginLeft: "5px" }}
            />
          </a>
          <span>.</span>
        </div>

        <div className="nav__icon" onClick={handleClick}>
          <i className={isActive ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        <ul className={`nav__links ${isActive ? "active" : ""}`}>
          <li className="link">
            <a href="../Landing_Page/LandingPage.html">Home</a>
          </li>
          <li className="link">
            <a href="#">Appointments</a>
          </li>
          <li className="link">
            <a href="../Sign_Up/Sign_Up.html">
              <button className="btn1">Sign Up</button>
            </a>
          </li>
          <li className="link">
            <a href="../Login/Login.html">
              <button className="btn1">Login</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
