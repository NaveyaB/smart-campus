import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/login.css";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
  e.preventDefault();

  console.log(formData);

  navigate("/dashboard");   // this moves page
};

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );

    localStorage.setItem("token", res.data.token);

    alert("Login Success");
  };

  return (
<div className="login-container">
<h2>Login</h2>

<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />

<button>Login</button>
</div>
   
  );
}

export default Login;