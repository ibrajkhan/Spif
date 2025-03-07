import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SPIFicon from "../../Images/spifd.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
// src\Images\spifd.jpg

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <LazyLoadImage
            alt="spif-icon"
            // height={image.height}
            src={SPIFicon}
            width={200}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <NavDropdown title="About" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">SPIF</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">News and Event </Nav.Link>
            <Nav.Link href="#pricing">Area of Focus </Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
