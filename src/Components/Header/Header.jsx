import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SPIFicon from "../../Images/spifd.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "react-bootstrap";
import "./Header.css";
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
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="About" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/spif/">SPIF</NavDropdown.Item>
              <NavDropdown.Item href="/about-us/">Our Team</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/news-events/">News and Event </Nav.Link>
            <Nav.Link href="/areas-of-focus/">Area of Focus </Nav.Link>
            <Nav.Link href="/contact-us/">Contacts</Nav.Link>
            <Nav.Link href="/donation/">
              <Button className="header__dontate">Donate </Button>
            </Nav.Link>
            <Nav.Link href="/your-contributions/">
              <Button className="header__contribute">Contribute</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
