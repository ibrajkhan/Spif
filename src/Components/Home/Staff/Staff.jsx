import { Container, Row, Col } from "react-bootstrap";
import "../Staff/staff.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DrImg from "../../../Images/Dr.D.jpeg";
import Punita from "../../../Images/punitaMam.jpg";
import Sarthak from "../../../Images/Sarthak-Khanna.jpg";

const Staff = () => {
  return (
    <Container>
      <Row>
        <Col className="card__content" xs={12} md={4}>
          <div>
            <div className="img__content_staff">
              <LazyLoadImage src={DrImg} className="img-fluid img__staff" />
            </div>
            <h4 className="staff_name">Dr M.R Rajagopal</h4>
            <h6 className="staff_designation">Chief Advisor</h6>
            <p className="staff_content_text">
              Dr Rajagopal is the founder-chairman of “Pallium India” and the
              director of TIPS, the WHO Collaborating Centre at Trivandrum.
            </p>
            <div className="logoSocialNetwork">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   x="0px"
                  //   y="0px"

                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  style={{ fill: "#c5cbd0", marginRight: "15px" }}>
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  style={{ fill: "#c5cbd0" }}>
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Col>
        <Col className="card__content" xs={12} md={4}>
          <div>
            <div className="img__content_staff">
              <LazyLoadImage src={Punita} className="img-fluid img__staff" />
            </div>

            <h4 className="staff_name"> Punita Khatter</h4>
            <h6 className="staff_designation">Chief Inspirer & Co-founder</h6>
            <p className="staff_content_text">
              With over 30 years of hands-on experience in the travel trade,
              Punita is a veteran in the service industry.
            </p>
            <div className="logoSocialNetwork">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   x="0px"
                  //   y="0px"

                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  style={{ fill: "#c5cbd0", marginRight: "15px" }}>
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  style={{ fill: "#c5cbd0" }}>
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Col>

        <Col className="card__content" xs={12} md={4}>
          <div>
            <div className="img__content_staff">
              <LazyLoadImage src={Sarthak} className="img-fluid img__staff" />
            </div>

            <h4 className="staff_name">Sarthak Khanna</h4>
            <h6 className="staff_designation">
              Chief People Officer & Co-founder
            </h6>
            <p className="staff_content_text">
              Sarthak has more than 15 years of work experience spanning the
              travel and hospitality industry
            </p>
            <div className="logoSocialNetwork">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  //   x="0px"
                  //   y="0px"

                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  style={{ fill: "#c5cbd0", marginRight: "15px" }}>
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  style={{ fill: "#c5cbd0" }}>
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Staff;
