import React from "react";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./About.css";
import { Container } from "react-bootstrap";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <Container className="centered-container">
      <Navbar />
      <h2>ABOUT</h2>
      <Footer />
    </Container>
  );
};

export default About;
