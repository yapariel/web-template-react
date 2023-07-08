import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

import fb from "../../Assets/Images/fb-icon.png";
import Email from "../../Assets/Images/email-icon.png";

function Footer() {
  return (
    <Container className="footer-container">
      <Row className="footer-title">
        <span className="foot-title">WEBSITE TEMPLATE</span>
      </Row>
      <Row className="footer-social">
        <img src={fb} alt="" className="fb-icon" />
        <img src={Email} alt="" className="email-icon" />
      </Row>
    </Container>
  );
}

export default Footer;
