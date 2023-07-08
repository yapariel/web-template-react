import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Services.css";
import { Container } from "react-bootstrap";

const Services = () => {
  useEffect(() => {
    document.title = "Services";
  }, []);

  return (
    <Container className="centered-container">
      <Navbar />
      <h2>SERVICES</h2>
      <Footer />
    </Container>
  );
};

export default Services;
