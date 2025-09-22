import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Login Successful!");
    }
  };

  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text"><h2>Login</h2></div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          </div>

          <div className="btn-group">
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="reset" className="btn btn-danger" onClick={() => setFormData({ email: "", password: "" })}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
