// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

// Function component for Sign Up form
const Sign_Up = () => {
  // State variables using useState hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showerr, setShowerr] = useState(''); // State to show error messages
  const navigate = useNavigate(); // Navigation hook from react-router

  // 👉 Real register function (using backend API)
  const register = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setShowerr(''); // reset error msg

    try {
      // API Call to register user
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          phone: phone,
        }),
      });

      const json = await response.json(); // Parse the response JSON

      if (response.ok && json.authtoken) {
        // Store user data in session storage
        sessionStorage.setItem("auth-token", json.authtoken);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("phone", phone);
        sessionStorage.setItem("email", email);

        // Redirect user to home page
        navigate("/");
        window.location.reload(); // Refresh the page
      } else {
        // Handle errors from backend
        if (json.errors) {
          setShowerr(json.errors[0].msg); 
        } else if (json.error) {
          setShowerr(json.error);
        } else {
          setShowerr("Registration failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("❌ Error registering:", error);
      setShowerr("Server unreachable. Please try again later.");
    }
  };

  // JSX to render the Sign Up form
  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-form">
          <form method="POST" onSubmit={register}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number"
                maxLength="10"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
              {showerr && (
                <div className="err" style={{ color: 'red', marginTop: '5px' }}>
                  {showerr}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" className="btn btn-danger">Reset</button>
            </div>

            <p style={{ marginTop: "15px", textAlign: "center" }}>
              Already have an account? <Link to="/login">Login Here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign_Up; // Export the Sign_Up component for use in other components
