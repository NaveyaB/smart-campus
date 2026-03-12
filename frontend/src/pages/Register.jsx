import { useState } from "react";
import "../style/register.css";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Register Data:", formData);

    // future backend API call here
    // fetch("/api/register",{method:"POST"})
  };

  return (
    <div className="register-container">

      <h1>Admin Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <p>Already have an account? <a href="/login">Login</a></p>

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default Register;