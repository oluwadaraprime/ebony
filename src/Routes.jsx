import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Headernew = React.lazy(() => import("pages/Headernew"));
const HomepageNEWSix = React.lazy(() => import("pages/HomepageNEWSix"));
const Header = React.lazy(() => import("pages/Header"));
const HeaderOne = React.lazy(() => import("pages/HeaderOne"));
const HomepageNEWFive = React.lazy(() => import("pages/HomepageNEWFive"));
const Contactus = React.lazy(() => import("pages/Contactus"));
const Aboutusnonprofitorganisationsdropdown = React.lazy(() =>
  import("pages/Aboutusnonprofitorganisationsdropdown")
);
const Aboutuseducationalinstitutedropdown = React.lazy(() =>
  import("pages/Aboutuseducationalinstitutedropdown")
);
const Aboutusbusinessesdropdown = React.lazy(() =>
  import("pages/Aboutusbusinessesdropdown")
);
const Aboutusdefault = React.lazy(() => import("pages/Aboutusdefault"));
const Servicestechnicaldeopdown = React.lazy(() =>
  import("pages/Servicestechnicaldeopdown")
);
const Serviceswebappdropdown = React.lazy(() =>
  import("pages/Serviceswebappdropdown")
);
const Servicesonboardingdropdown = React.lazy(() =>
  import("pages/Servicesonboardingdropdown")
);
const Servicesdigitaldropdown = React.lazy(() =>
  import("pages/Servicesdigitaldropdown")
);
const ServicesOne = React.lazy(() => import("pages/ServicesOne"));
const Mainhomepage = React.lazy(() => import("pages/Mainhomepage"));
const ContactusOne = React.lazy(() => import("pages/ContactusOne"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Services = React.lazy(() => import("pages/Services"));
const Animatedstartinghomepage = React.lazy(() =>
  import("pages/Animatedstartinghomepage")
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Animatedstartinghomepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactusone" element={<ContactusOne />} />
          <Route path="/mainhomepage" element={<Mainhomepage />} />
          <Route path="/servicesone" element={<ServicesOne />} />
          <Route
            path="/servicesdigitaldropdown"
            element={<Servicesdigitaldropdown />}
          />
          <Route
            path="/servicesonboardingdropdown"
            element={<Servicesonboardingdropdown />}
          />
          <Route
            path="/serviceswebappdropdown"
            element={<Serviceswebappdropdown />}
          />
          <Route
            path="/servicestechnicaldeopdown"
            element={<Servicestechnicaldeopdown />}
          />
          <Route path="/aboutusdefault" element={<Aboutusdefault />} />
          <Route
            path="/aboutusbusinessesdropdown"
            element={<Aboutusbusinessesdropdown />}
          />
          <Route
            path="/aboutuseducationalinstitutedropdown"
            element={<Aboutuseducationalinstitutedropdown />}
          />
          <Route
            path="/aboutusnonprofitorganisationsdropdown"
            element={<Aboutusnonprofitorganisationsdropdown />}
          />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/homepagenewfive" element={<HomepageNEWFive />} />
          <Route path="/headerone" element={<HeaderOne />} />
          <Route path="/header" element={<Header />} />
          <Route path="/homepagenewsix" element={<HomepageNEWSix />} />
          <Route path="/headernew" element={<Headernew />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
