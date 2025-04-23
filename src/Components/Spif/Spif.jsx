import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./Spif.css";
import Img1 from "../../Images/SpifContent.jpg";
import Img2 from "../../Images/Spif2.jpeg";
import Footer from "../Footer/Footer";

const Spif = () => {
  return (
    <>
      <div className="area_focus_main">
        <Header />
        <div className="BackgroundImagesSpif">
          <h2>SPIF</h2>
        </div>
        <Container className="area__focus__content">
          <Row>
            <Col xs={12} md={6}>
              <LazyLoadImage src={Img1} className="img-fluid area__img" />
            </Col>
            <Col xs={12} md={6} className="area__focus__content__text">
              <h2 className="spip__area__heading ">
                The stark reality behind India’s ageing population.
              </h2>
              <p className="spif__area__para mt-4">
                Every Indian parent strives to give their kids the best
                education to help them live their dreams. In pursuit of these
                dreams, many kids, (much to their dislike) are forced to stay
                away from their parents. And for some, if it isn’t the lure of a
                jet-set life, then the process of living their own lives,
                starting their own families and shouldering responsibilities
                makes them forget those who brought them up – leaving them to
                fend for themselves at a time when they need so much support!
              </p>

              <p className="spif__area__para">
                Senocare Pehal India Foundation (SPIF)
              </p>

              <p className="spif__area__para">
                In early 2020, awakened by the plight of the elderly’ during
                Covid19, the SPIF team set out to help our elders in the short
                term. They soon realized that they had embarked on a journey of
                no return! The plight of our elders was palpable. “There is no
                compelling cause as noble as eldercare, and no journey as
                humbling, as the journey to care for our elders” Punita Khatter.
              </p>

              <p className="spif__area__para">
                SPIF has been set up to bring about a paradigm change in the way
                we care for our elders and in the way our elders live their
                golden years. The change we want: Every citizen is made aware of
                the importance of providing our elders with an environment in
                which they feel secure and safe as they age. We believe in the
                concept of “Happy Ageing” by making everyone, including our
                elders, understand why 65 to 80+ years are referred to as the
                “Golden Years” of life.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="area__focus__content">
          <Row>
            <Col xs={12} md={6}>
              <LazyLoadImage src={Img2} className="img-fluid area__img" />
            </Col>

            <Col xs={12} md={6} className="area__focus__content__text">
              <p className="spif__area__para">
                At SPIF, efforts are being made to identify and understand the
                real-time challenges of the ageing generation. To gain a
                comprehensive view of the pain areas of the elderly, we are
                reaching out to people from varied demographics. SPIF hopes to
                make “Elder Care” a collective responsibility of both the
                government and the people. Data is being collected across
                different states spanning working kids, elderly parents, retired
                professionals, medical professionals, and caregivers.
              </p>

              <p className="spif__area__para">
                Some of SPIF’s, research findings are alarming:
              </p>

              <ul className="ul__spif">
                <li>
                  80% of the urban population has never heard of geriatric
                  doctors.
                </li>
                <li>
                  Around 70% of people are unaware that old people’s immunity
                  decreases with age, and they should get vaccinated around 60
                  years of age.
                </li>
                <li>
                  Technology is becoming a great challenge for our elders.
                </li>
                <li>
                  India ranks at number 132 on the Elder Population Happiness
                  Quotient.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Spif;
