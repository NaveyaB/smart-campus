import { useState } from "react";
import axios from "axios";

function Login() {

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

    <div>
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>

        <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button>Login</button>

      </form>

    </div>

  );
}

export default Login;