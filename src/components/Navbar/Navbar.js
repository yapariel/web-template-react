import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import logo from "../../Assets/Images/logo2.png";
import { Container, Col, Row } from "react-bootstrap";

function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Container className="navbar">
          <Row className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={logo} className="nav_logo-img" />
              TEMPLATE.
            </Link>

            <Col className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </Col>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  SERVICES
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </Row>
        </Container>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
