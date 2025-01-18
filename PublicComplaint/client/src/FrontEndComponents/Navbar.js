import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Link } from 'react-router-dom';


function NavbarMain() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">AMC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">
            &#127968; Home
            </Nav.Link>
            <Nav.Link href="#features" className="text-white">
              <Link to='/ComplaintForm'>
            &#9998; Complaint Registration
            </Link>
            </Nav.Link>
            <Nav.Link href="#mycomplaints" className="text-white">
            &#9888;  My Complaints
            </Nav.Link>
            <Nav.Link href="#support" className="text-white">
            &#10067; Help and Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
