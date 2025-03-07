import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./OurTeam.css";
import Img2 from "../../Images/OurTeam1.jpeg";
import Punita from "../../Images/punitaMam.jpg";
import Sarthak from "../../Images/Sarthak-khanna.jpg";
import Dr from "../../Images/Dr.D.jpeg";

const OurTeam = () => {
  return (
    <div className="area_focus_main">
      <Header />
      <div className="BackgroundImages">
        <h2>Our Team</h2>
      </div>
      <Container className="area__focus__content">
        <Row>
          <Col xs={12} md={6}>
            <LazyLoadImage src={Img2} className="img-fluid area__img" />
          </Col>
          <Col xs={12} md={6} className="area__focus__content__text">
            <h2 className="spip__area__heading ">Who we are</h2>
            <p className="spif__area__para mt-4">
              We are a foundation that strives to create awareness regarding the
              emotional and physical needs of our elderly. Our vision is to
              create a community that takes care of the elderly, just as they
              have taken care of us. Senocare Pehal India Foundation is focused
              on improving the life for the elderly and inspires elders to look
              forward to their golden years.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="area__focus__content my-4">
        <h2 className="spip__area__heading text-center">Meet the Staff</h2>
        <Row className="mt-5">
          <Col md={4} className="img_staff_content">
            <LazyLoadImage src={Dr} className="img-fluid staff_sec_img" />
          </Col>
          <Col md={8} className="area__focus__content__text">
            <h4 className="staff_main ">Dr M.R Rajagopal</h4>
            <h6 className="staff_designation_main">Chief Advisor</h6>
            <p className="spif__area__para">
              Dr Rajagopal is the founder-chairman of “Pallium India” and the
              director of TIPS, the WHO Collaborating Centre at Trivandrum. His
              initiatives to remove regulatory barriers in availability of oral
              morphine for pain relief have contributed to simplification of
              narcotic regulations in 17 of India’s 29 states and more recently,
              to the amendment of the NDPS Act of India. His initiative has also
              contributed to the development of a Government policy on
              Palliative Care in the state of Kerala in 2008 its revision in
              2019, Government of India’s National Programme in Palliative Care
              (NPPC) in 2012, and the amendment of India’s Narcotic Act in 2014.
              In 2018, Dr Rajagopal was honoured with Padma Shri.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4} className="img_staff_content">
            <LazyLoadImage src={Punita} className="img-fluid staff_sec_img" />
          </Col>
          <Col md={8}>
            <h4 className="staff_main insP">Punita Khatter</h4>
            <h6 className="staff_designation_main">
              Chief Inspirer & Co-founder
            </h6>
            <p className="spif__area__para">
              With over 30 years of hands-on experience in the travel trade,
              Punita is a veteran in the service industry. With an honors degree
              in Psychology, Punita understands the meaning and true implication
              of the term ‘service’.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4} className="img_staff_content">
            <LazyLoadImage src={Sarthak} className="img-fluid staff_sec_img" />
          </Col>

          <Col md={8}>
            <h4 className="staff_main insP">Sarthak Khanna</h4>
            <h6 className="staff_designation_main">
              Chief People Officer & Co-founder
            </h6>
            <p className="spif__area__para">
              Sarthak has more than 15 years of work experience spanning the
              travel and hospitality industry, and has worked with large brands
              including ITC, InterContinental, and Shangri-La.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
