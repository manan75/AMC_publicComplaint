import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { faHome, faFileAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">AMC</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
          <Nav.Link href="#">My Complaints</Nav.Link>
          <Nav.Link href="#">Complaint Registration</Nav.Link>
          <Nav.Link href="#"><FontAwesomeIcon icon={faQuestionCircle} /> Help and Support</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">Login</Nav.Link>
          <Nav.Link href="#">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

