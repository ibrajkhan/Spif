import { Container, Row, Col, Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MainImages from "../../Images/spifMain.jpeg";
import "./Home.css";
import PersonalCare from "../../Images/personalCare.png";
import trustedPartner from "../../Images/trustedPartner.png";
import multipleCare from "../../Images/multipleCare.png";
import carePac from "../../Images/CarePac.jpeg";
import carePac2 from "../../Images/CarePac2.jpeg";
import carePac3 from "../../Images/CarPac3.jpeg";
import carePac4 from "../../Images/CarPac4.jpeg";
import EnquiryForm from "../EnquiryForm/EnquiryForm";
import Staff from "./Staff/Staff";

// import MainImages from "../../Images/spifMain.jpeg";

const Home = () => {
  return (
    <>
      <div className="background_primary">
        <Container className="pt-5 ">
          <Row>
            <Col>
              <h3 className="primary__color mb-4">
                Our Cause – Senocare Pehal India Foundation
              </h3>
            </Col>
          </Row>

          <Row className="g-0 align-items-stretch">
            <Col xs={12} md={6} className="d-flex">
              <LazyLoadImage src={MainImages} className="img-fluid w-100" />
            </Col>
            <Col
              xs={12}
              md={6}
              className="col_back py-5 px-5 d-flex flex-column col_back">
              <p>
                We take pride that India ranks amongst the world's youngest
                nations but often forget to acknowledge that we also house the
                world's second-largest elderly population. India is expected to
                have nearly 20% of the world's 60 years+. By 2050 India will
                house the largest number of older adults in the world! It is
                also a fact that while the population of India is ageing, it
                ranks at the 132nd position on the "Elder Population Happiness
                Quotient"!
                <Button className="mt-4">Read More</Button>
              </p>
            </Col>
          </Row>

          <Row className="d-flex justify-content-evenly container_div">
            <Col xs={12} md={6} lg={4} className="services__card pt-4">
              <LazyLoadImage
                src={PersonalCare}
                className="img-fluid serices__icon"
              />
              <h4>Research</h4>
              <p>
                Research is an imperative part of what we do. Without facts and
                information, we can’t hope to bring about change.
              </p>
              <Button>Read More</Button>
            </Col>

            <Col xs={12} md={6} lg={4} className="services__card pt-4">
              <LazyLoadImage
                src={trustedPartner}
                className="img-fluid serices__icon"
              />
              <h4>Creating Awareness</h4>
              <p>
                Even though there is a large elderly population, we are not
                aware of the problems they face collectively.
              </p>
              <Button>Read More</Button>
            </Col>
            <Col xs={12} md={6} lg={4} className="services__card pt-4">
              <LazyLoadImage
                src={multipleCare}
                className="img-fluid serices__icon"
              />
              <h4>On Ground Initiatives</h4>
              <p>
                While the areas that need to be worked upon are vast, no single
                entity can address them completely.
              </p>
              <Button>Read More</Button>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="g-0 align-items-stretch">
            <Col xs={12} md={6} className="d-flex">
              <LazyLoadImage src={carePac} className="img-fluid w-100" />
            </Col>
            <Col
              xs={12}
              md={6}
              className="col_back py-5 px-5 d-flex flex-column col_back">
              <h3>Who We Are</h3>
              <i className="mb-3">
                Not just a social initiative...a voice for the elderly in India
              </i>
              <p className="para">
                We are a foundation that strives to create awareness regarding
                the emotional and physical needs of our elderly. Our vision is
                to create a community that takes care of the elderly, just as
                they have taken care of us. Senocare Pehal India Foundation is
                focused on improving the life for the elderly and inspires
                elders to look forward to their golden years.
              </p>
            </Col>
          </Row>

          <Row className="g-0 align-items-stretch">
            <Col
              xs={12}
              md={6}
              className="col_back py-5 px-5 d-flex flex-column col_back">
              <h3>What spurred us?</h3>
              <i className="mb-3">
                It took a pandemic for a burning issue to come to the fore
              </i>
              <p className="para">
                While we preach respect, selfless care, compassion, and love for
                our elders, we often fail to follow through when it comes to
                living up to this ideal. Working commitments can make staying
                with elderly parents and relatives difficult. Education,
                marriage, and many other things leave people with no choice but
                to move away from home. At SPIF, we acknowledged the urgent need
                to address the required change to ensure our elders feel more
                secure during old age. At SPIF, we hope to inspire many (if not
                all), to take part and do all they can for the elderly.
              </p>
            </Col>
            <Col xs={12} md={6} className="d-flex">
              <LazyLoadImage src={carePac2} className="img-fluid w-100" />
            </Col>
          </Row>
        </Container>
        <Container className="background_primary container_div">
          <Row>
            <Col xs={12} md={6} className="inner__content">
              <div>
                <h3 className="spif__vision__heading">SPIF’s Vision</h3>
                <i className="spif__vision__italic">
                  Reinvigorate values and tradition that have taken a back seat
                </i>
                <p className="spif__vision__para">
                  Ensure that our elders “golden years” are lived to the fullest
                  regardless of their socio-economic status and India rises to
                  make a place where elders feel empowered, safe and secure,
                  leading a better life during their golden years.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <LazyLoadImage src={carePac4} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="container_div">
        <Row>
          <Col xs={12} md={6}>
            <LazyLoadImage src={carePac3} className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="inner__content">
            <div>
              <h3 className="spif__vision__heading">Mission</h3>
              <i className="spif__vision__italic">
                Promote strategic approach to happy ageing by:
              </i>
              <p className="spif__vision__para">
                Bring about a change in the mindset of our elders and make them
                believe that their golden years are a period to look forward to
                and live their unrealised dreams. As a Foundation, we look
                forward to offering our resources and time. We are dedicated to
                these core areas:
              </p>
              <p className="spif__vision__para">1. Research</p>
              <p className="spif__vision__para">2. Creating Awareness</p>
              <p className="spif__vision__para">3. On-ground Initiatives</p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Enquiry Form */}
      <EnquiryForm />
      <Staff />
    </>
  );
};

export default Home;
