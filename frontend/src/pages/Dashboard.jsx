import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard(){

  return(

    <div>

      <Navbar />

      <div style={{display:"flex"}}>
        <Sidebar />

        <div style={{padding:"20px"}}>
          <h1>Dashboard Overview</h1>
        </div>

      </div>

    </div>

  );
}

export default Dashboard;