import React, { useState, useEffect } from "react";
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
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Validate token and set loggedIn state
    const token = localStorage.getItem("token");
    if (token) {
      // Add token validation logic here
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/VillageRegistration"
            element={<VillageRegistrationForm />}
          />
          <Route
            path="/VillagerSignup"
            element={<VillagerRegistrationForm />}
          />
          <Route path="/Businesslogin" element={<BusinessLogin />} />
          <Route
            path="/businessDashboard"
            element={<RuralRiseBusinessDashboard />}
          />

          <Route path="/BusinessSignup" element={<BusinessOwnerSignup />} />
          <Route path="/village-portal" element={<VillagePortal />} />
          <Route path="/Villagelist" element={<VillagesList />} />
          {/* <Route path="/VillageDashboard" element={<villageDashboard />} /> */}

          {/* Redirect to home if not logged in */}
          {loggedIn ? null : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
