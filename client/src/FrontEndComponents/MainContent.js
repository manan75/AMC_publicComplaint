import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">AMC</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#"> Home</Nav.Link>
          <Nav.Link href="#">My Complaints</Nav.Link>
          <Nav.Link href="#">Complaint Registration</Nav.Link>
          <Nav.Link href="#"> Help and Support</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#">Login</Nav.Link>
          <Nav.Link href="#">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

const MainContent = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <h1>Tell us about your Problems</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={6}>
          <Button variant="primary" className="w-100">
            Instructions
          </Button>
        </Col>
        <Col xs={6}>
          <Button variant="secondary" className="w-100">
            Upload Documents
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <Container>
        <p>&copy; 2023 AMC. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

const MainPage = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default MainPage;