import React from "react";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Footer = () => {
  return (
    <>
      <div className="donate__section ">
        <h3>Call Us! 8800-700-100</h3>
        <div>
          <Nav.Link href="/donation/">
            <Button className="donateButton">Donate </Button>
          </Nav.Link>
        </div>
      </div>
      <Container fluid className="footer">
        <Row>
          <Col lg={6} xs={12} md={6}>
            <h3>Contact Info</h3>
            <div className="add"></div>
            <div className="grid_footer">
              <div className="header_text address address__bar">
                <a
                  href="https://www.google.com/maps/place/Senocare/@28.4809995,77.084956,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1f2a705659a7:0xea5edef1a22b60e9!8m2!3d28.4809995!4d77.084956!16s%2Fg%2F11n0b0mqbt?entry=ttu"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noopener noreferrer">
                  <p>
                    802, 08th floor, JMD Regent square, MG Road, Gurgaon Haryana
                    122002
                  </p>
                </a>
                <p>For any feedback or concerns, call us on</p>
                <p>Contact us at info@senocarepif.org</p>
                <p>Open 8am to 6pm, Monday to Friday</p>
                {/* <p>Phone: +91 124 4666185, +91 124 4666186</p> */}
              </div>
            </div>
          </Col>
          <Col lg={3} xs={12} md={6}>
            <h3>Useful Links </h3> <div className="add"></div>
            <div className="grid_footer">
              <div className="header_text address">
                <p className="link">
                  <Nav.Link href="/about-us/">About Us</Nav.Link>
                </p>

                {/* <Link to="/our-team">
                  <HashLink to="/our-team/#team">
                    <p className="link">Team</p>
                
                </Link> */}

                <p className="link">
                  <Nav.Link href="/spif/">SPIF</Nav.Link>
                </p>

                <p className="link">
                  <Nav.Link href="/about-us/">Our Team</Nav.Link>
                </p>

                <p className="link">
                  <Nav.Link href="/news-events/">News & Events</Nav.Link>
                </p>

                <p className="link">
                  <Nav.Link href="/areas-of-focus/">Area of Focus</Nav.Link>
                </p>
                <p className="link">
                  <Nav.Link href="/volunteer/">Volunteer</Nav.Link>
                </p>
                <p className="link">
                  <Nav.Link href="/contact-us/">Contact </Nav.Link>
                </p>
              </div>
            </div>
          </Col>
          {/* <Col lg={2} xs={12} md={6}>
            <h3>Our Menu</h3>
            <div className="add"></div>
            <div className="grid_footer">
              <div className="header_text address">
                <p className="link">Voluntree With Us</p>

                <p className="link">Privacy Policy</p>

                <p className="link">Term & Conditions</p>

                <p className="link">Disclaimer</p>
              </div>
            </div>
          </Col> */}
          <Col lg={3} xs={12} md={6}>
            <h3>Connect With Us</h3>
            <div className="add"></div>
            <div className="gird_footer">
              <div className="header_text address ">
                <p className="media__icon">
                  <a
                    href="https://www.facebook.com/senocareservices"
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="36"
                      width="35"
                      viewBox="0 0 448 512">
                      <path
                        fill="#fff"
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/senocare-services/mycompany/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="36"
                      width="35"
                      viewBox="0 0 448 512">
                      <path
                        fill="#fff"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/senocareservices/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="36"
                      width="35"
                      viewBox="0 0 448 512">
                      <path
                        fill="#fff"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer_copyright">
        <p>&copy;SPIF. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
