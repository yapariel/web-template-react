import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <Container className="centered-container">
      <Navbar />
      <h2>CONTACT</h2>
      <Footer />
    </Container>
  );
};

export default Contact;
