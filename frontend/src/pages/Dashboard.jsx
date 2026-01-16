import { useEffect, useState } from "react";
import { fetchAnalytics } from "../services/api";
import "./Dashboard.css";
import LeadsTable from "../components/LeadsTable";

const Dashboard = ({ onLogout }) => {

  const [analytics, setAnalytics] = useState(null);
  
  useEffect(() => {
    fetchAnalytics()
      .then((res) => setAnalytics(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!analytics) {
    return <p style={{ padding: 20 }}>Loading...</p>;
  }

  return (
    <div className="dashboard">
        <button
  onClick={onLogout}
  style={{
    position: "absolute",
    top: 20,
    right: 20,
    padding: "8px 14px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  }}
>
  Logout
</button>
      <h1>Lead Management Dashboard</h1>

      <div className="analytics">
        <div className="card">
          <h3>Total Leads</h3>
          <p>{analytics.totalLeads}</p>
        </div>

        <div className="card">
          <h3>Converted Leads</h3>
          <p>{analytics.convertedLeads}</p>
        </div>

        <div className="card">
          <h3>Leads by Stage</h3>
          {analytics.leadsByStage.map((item) => (
            <p key={item._id}>
              {item._id}: {item.count}
            </p>
          ))}
        </div>
      </div>
       <LeadsTable />
    </div>
  );
};

export default Dashboard;
