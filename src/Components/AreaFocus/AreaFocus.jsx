import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./AreaFocus.css";
import Img1 from "../../Images/Are1.jpg";
import Img2 from "../../Images/Are2.jpg";
import Img3 from "../../Images/Are3.jpeg";
import Img4 from "../../Images/Are4.jpeg";

const AreaFocus = () => {
  return (
    <div className="area_focus_main">
      <Header />
      <div className="BackgroundImages">
        <h2>Area Of Focus</h2>
      </div>
      <Container className="area__focus__content">
        <Row>
          <Col xs={12} md={6}>
            <LazyLoadImage src={Img1} className="img-fluid area__img" />
          </Col>
          <Col xs={12} md={6} className="area__focus__content__text">
            <h2 className="spip__area__heading ">Research</h2>
            <p className="spif__area__para">
              Research is an imperative part of what we do. Without facts and
              information, we can’t hope to bring about change. Our current
              research projects consist of comparative studies, analysis,
              interviews and surveys in the following areas:
            </p>

            <p className="spif__area__para">
              1. Current and future challenges of our elders.
            </p>

            <p className="spif__area__para">
              2. Global best practices for elder care, especially from countries
              that excel.
            </p>

            <p className="spif__area__para">
              3. How covid has impacted elders’ vulnerabilities and life at
              large.
            </p>

            <p className="spif__area__para">
              4. Elders’ needs and challenges in rural and urban areas.
            </p>

            <p className="spif__area__para">
              5. The impact of automation/digitalization on elders.
            </p>

            <p className="spif__area__para">
              6. Impact of retirement age on the financial and emotional state
              of an ageing person.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="area__focus__content">
        <Row>
          <Col xs={12} md={6} className="area__focus__content__text">
            <h2 className="spip__area__heading ">Creating Awareness</h2>
            <p className="spif__area__para">
              Even though there is a large elderly population, we are not aware
              of the problems they face collectively. In many instances, seniors
              are unaware of their rights and opportunities. As a foundation, we
              want to create positive changes by focusing on:
            </p>

            <p className="spif__area__para">
              1. The real-time problems and the changes we need to bring about
              to ensure our elders live a secured life as citizens of India.
            </p>

            <p className="spif__area__para">
              2. Conduct campaigns to popularize “Happy Ageing” by educating the
              elderly about their “Golden Years” and encourage them to look
              forward to living their dreams, importance of vaccinations, etc
            </p>

            <p className="spif__area__para">
              Additionally, we will be working on creating awareness about:
            </p>

            <p className="spif__area__para">
              a. The importance of vaccination when ageing.
            </p>

            <p className="spif__area__para">
              b. Improve infrastructure at home and outside to make it
              elderly-friendly.
            </p>

            <p className="spif__area__para">
              c. Create buzz about the need to improve medical policy that
              includes elder health care and home care.
            </p>

            <p className="spif__area__para">
              d. Corporate participation to enhance “Elder Care Funding” under
              their company’s CSR Policy.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <LazyLoadImage src={Img2} className="img-fluid area__img" />
          </Col>
        </Row>
      </Container>

      <Container className="area__focus__content">
        <Row>
          <Col xs={12} md={6}>
            <LazyLoadImage src={Img3} className="img-fluid area__img" />
          </Col>
          <Col xs={12} md={6} className="area__focus__content__text">
            <h2 className="spip__area__heading "> On Ground Initiatives</h2>
            <p className="spif__area__para">
              While the areas that need to be worked upon are vast, no single
              entity can address them completely. Senocare plans to work on
              pressing issues that impact elders.
            </p>

            <p className="spif__area__para">
              1. Offering retirees to re-engage in sync with their interest and
              energy.
            </p>
            <p className="spif__area__para">
              2. Training non-medical attendants.
            </p>
            <p className="spif__area__para">
              3. Assisting elderly to overcome fear of technology. Help them
              learn simple applications to make them feel confident and make
              their lives easier (applications like Uber, Zomato, PayTM, have
              become a daily necessity).
            </p>
            <p className="spif__area__para">4. Daycare – social engagements.</p>
            <p className="spif__area__para">
              5. Popularize palliative care in India.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="area__focus__content">
        <Row>
          <Col xs={12} md={6} className="area__focus__content__text">
            <h2 className="spip__area__heading ">Our Initiatives</h2>
            <p className="spif__area__para">
              1. Survey – An essential part of our research service is
              conducting surveys. As a result, we have already begun a survey on
              the challenges the elderly face. We have reached out to 700 people
              from all walks of life. The survey respondents were divided into
              two groups:
            </p>

            <p className="spif__area__para">
              a. The masses (Elders, Kids, Caretakers)
            </p>
            <p className="spif__area__para">
              b. Medical professionals (50 doctors completed the survey)
            </p>
            <p className="spif__area__para">2. Online Event :</p>
            <p className="spif__area__para">
              Seniors Go Digital Campaign When Covid hit, the first victims were
              the elderly, who lived alone without support. As a result of
              digital illiteracy, simple chores like buying groceries and paying
              bills became intimidating. By conducting a campaign, we taught the
              elderly how to use online payment methods to handle their everyday
              needs, communicate with family and friends, and so much more.
            </p>
            <p className="spif__area__para">
              The Senior Citizen Day event The SPIF announced its mission in a
              memorable online event that partnered distinguished doctors from
              the field of geriatrics, palliative care, and cardiology to share
              their thoughts on caring for elders and giving them the love and
              care they deserve. Real-life role models from the ages of 91-95
              spoke to the attendees, shared their experiences about how they
              started their own business at the age of 85 and that their later
              years are truly the Golden Years. Over 400 people attended the
              online event.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <LazyLoadImage src={Img4} className="img-fluid area__img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AreaFocus;
