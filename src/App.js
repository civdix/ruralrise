import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import villageDashboard from "./components/villageDashboard";
import VillagerRegistrationForm from "./components/villagersignup";
import VillagePortal from "./components/VillagePortal";
import BusinessOwnerSignup from "./components/businessSignUp";
import VillageRegistrationForm from "./components/villageLandListingRegistration";
import VillagesList from "./components/villageList";
import BusinessLogin from "./components/businesLogin";
import RuralRiseBusinessDashboard from "./components/businessDashboard";
import ContactUs from "./components/ContactUs";
import VillagerLogin from "./components/villagerlogin";
import VillagerDashboard from "./components/villageDashboard";
import RuralContext from "./components/context/ruralContext";
import ProtectedLayout from "./ProtectedLayout";
const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(RuralContext);

  useEffect(() => {
    // Validate token and set loggedIn state
    const token = localStorage.getItem("token");
    if (token) {
      // Add token validation logic here
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/VillagerSignup"
            element={<VillagerRegistrationForm />}
          />
          <Route path="/Businesslogin" element={<BusinessLogin />} />
          <Route path="/BusinessSignup" element={<BusinessOwnerSignup />} />
          <Route path="/Villagelist" element={<VillagesList />} />

          <Route
            path="/VillageRegistration"
            element={<VillageRegistrationForm />}
          />
          <Route path="/VillageLogin" element={<VillagerLogin />} />
          <Route path="/ContactUs" element={<ContactUs />} />

          <Route element={<ProtectedLayout />}>
            <Route
              path="/businessDashboard"
              element={<RuralRiseBusinessDashboard />}
            />
            <Route path="/village-portal" element={<VillagePortal />} />
            <Route path="/VillageDashBoard" element={<VillagerDashboard />} />
          </Route>
          <Route path="*" element={<Home />} />
          {/* <Route path="/VillageDashboard" element={<villageDashboard />} /> */}

          {/* Redirect to home if not logged in */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
