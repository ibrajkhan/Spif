import { Container, Row, Col } from "react-bootstrap";
import EnquiryForm from "../EnquiryForm/EnquiryForm";
import Header from "../Header/Header";
import "./Contact.css";
import Email from "../../Images/email (1).png";
import Phone from "../../Images/telephone (2).png";

import loction from "../../Images/location.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div>
        <Header />
        <div className="BackgroundImagesContacts">
          <h2>Contact</h2>
        </div>
        <div className="EnquiryForm">
          <EnquiryForm />
        </div>
        <Container>
          <Row>
            <Col xs={12} md={4} className="Contact__icon__section">
              <div>
                <div className="contact__section__icon">
                  <LazyLoadImage src={Email} className="contact__icon" />
                </div>
                <h4 className="Contact_main">Send us an email</h4>
                <p className="Contact_details">info@senocarepif.org</p>
              </div>
            </Col>
            <Col xs={12} md={4} className="Contact__icon__section">
              <div>
                <div className="contact__section__icon">
                  <LazyLoadImage src={Phone} className="contact__icon" />
                </div>
                <h4 className="Contact_main">Call Us On</h4>
                <p className="Contact_details">8800 700 100</p>
              </div>
            </Col>
            <Col xs={12} md={4} className="Contact__icon__section">
              <div>
                <div className="contact__section__icon">
                  <LazyLoadImage src={loction} className="contact__icon" />
                </div>
                <h4 className="Contact_main">Address</h4>
                <p className="Contact_details">
                  802, 08th floor, JMD Regent square, MG Road, Gurgaon Haryana
                  122002
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
