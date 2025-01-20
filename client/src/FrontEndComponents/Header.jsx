import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold fs-4 text-white">AMC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              &#127968; Home
            </Nav.Link>
            <Nav.Link as={Link} to="/ComplaintForm" className="text-white">
              &#9998; Complaint Registration
            </Nav.Link>
            <Nav.Link as={Link} to="/MyComplaints" className="text-white">
              &#9888; My Complaints
            </Nav.Link>
            <Nav.Link as={Link} to="/Support" className="text-white">
              &#10067; Help and Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
