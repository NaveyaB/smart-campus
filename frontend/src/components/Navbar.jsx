import { useNavigate } from "react-router-dom";
function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (

    <div style={{
      height: "60px",
      background: "#1e293b",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px"
    }}>

      <h2>Smart Campus</h2>

      <div style={{display:"flex", gap:"20px"}}>

        <span>Admin</span>

        <button
          onClick={logout}
          style={{
            background:"red",
            color:"white",
            border:"none",
            padding:"6px 12px",
            cursor:"pointer"
          }}
        >
          Logout
        </button>

      </div>

    </div>

  );
}

export default Navbar;