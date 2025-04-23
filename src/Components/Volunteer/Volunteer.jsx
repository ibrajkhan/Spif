import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Volunteer.css";
import VolunteerFrom from "./VolunteerForm";

const Volunteer = () => {
  return (
    <>
      <div>
        <Header />
        <div className="BackgroundImagesVolunteer">
          <h2>Volunteer</h2>
        </div>
        <div className="area__focus__content">
          <VolunteerFrom />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Volunteer;
