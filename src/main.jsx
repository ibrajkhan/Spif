import { StrictMode, React } from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Spif from "./Components/Spif/Spif.jsx";
import OurTeam from "./Components/OurTeam/OurTeam.jsx";
import NewsEvents from "./Components/NewsEvents/NewsEvents.jsx";
import AreaFocus from "./Components/AreaFocus/AreaFocus.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Donation from "./Components/Donation/Donation.jsx";
import YourContribution from "./Components/YourContribution/YourContribution.jsx";
import Volunteer from "./Components/Volunteer/Volunteer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/spif/",
    element: <Spif />,
  },
  {
    path: "/about-us/",
    element: <OurTeam />,
  },
  {
    path: "/news-events/",
    element: <NewsEvents />,
  },
  {
    path: "/areas-of-focus/",
    element: <AreaFocus />,
  },
  {
    path: "/contact-us/",
    element: <Contact />,
  },
  {
    path: "/donation/",
    element: <Donation />,
  },

  {
    path: "/your-contributions/",
    element: <YourContribution />,
  },

  {
    path: "/volunteer/",
    element: <Volunteer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
