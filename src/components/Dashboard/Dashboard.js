import "./Dashboard.css";
import { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Container className="dashboard-page">
      <Navbar />
      <Row>
        <Col>
          <h2>THIS IS A STARTER WEBSITE</h2>
          <p>CALABLE FEATURES</p>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Dashboard;
