import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Donation.css";
import DonationForm from "./DonationForm";
// import VolunteerFrom from "./Donation";

const Donation = () => {
  return (
    <>
      <div>
        <Header />
        <div className="BackgroundImages">
          <h2>Donation</h2>
        </div>
        <div className="area__focus__content">
          <DonationForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donation;
