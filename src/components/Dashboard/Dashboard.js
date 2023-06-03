import "./Dashboard.css";
import { useEffect } from "react";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="dashboard-page">
      <Navbar />
      <h2>HOME PAGE</h2>
      <Footer />
    </div>
  );
};

export default Dashboard;
