import Header from "../Header/Header";
import "./YourContribution.css";
import VolunteerFrom from "../Volunteer/VolunteerForm";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer/Footer";

const YourContribution = () => {
  return (
    <>
      <div>
        <Header />
        <div className="BackgroundImagesContributions">
          <h2>Your Contribution</h2>
        </div>

        <Container className="area__focus__content">
          <Row>
            <Col className="area__focus__content__text">
              <h2 className="spip__area__heading pb-3">
                How can you contribute ?
              </h2>

              <h4 className="heading_fourth">Corporate</h4>
              <p className="spif__area__para">
                If you are a decision-maker in the corporate world, we invite
                you to include elder care in your corporate social
                responsibility initiatives. In addition, our volunteer program
                allows employees to spend a certain number of hours interacting
                with elders as part of a mandated community service program. You
                are welcome to contact us here if you wish to make a difference
                in the lives of elders.
              </p>

              <h4 className="heading_fourth">Individuals</h4>
              <p className="spif__area__para">
                It is possible to volunteer in many ways if you, too, are
                shocked and moved by the plight of our elders and want to do
                something to help. Here is a list of opportunities.
              </p>
              <ul className="ul__spif">
                <li>
                  {" "}
                  Become a caregiver for our elderly who are lonely and alone.
                </li>

                <li> Refer a Care Champ.</li>
                <li>Write for our blog.</li>
                <li>Show us your talent and benefit our elders.</li>
                <li>
                  Help us with our Digital Literacy initiatives for elders.
                </li>
                <li>
                  Offer to shop for elders living by themselves in your
                  vicinity.
                </li>
                <li>
                  Speak up – especially if you have expertise in any areas
                  related to eldercare – physically, mentally, emotionally,
                  financially, and legally.
                </li>
                <li>
                  Contribute- Even a small amount will help us better the lives
                  of our elderly.
                </li>
                <li>
                  Give- You can give them a wheelchair, blankets, walking stick,
                  or clothes that will make them feel good and comfortable at
                  the same time.
                </li>
              </ul>
              <p className="spif__area__para">
                Furthermore, you can also support our elderly by donating your
                time, money, resources and your expertise. Let us know your
                contact information here, and we will contact you as soon as
                possible.
              </p>
            </Col>
          </Row>
        </Container>

        <div className="area__focus__content">
          <VolunteerFrom />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default YourContribution;
