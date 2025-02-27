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

import VillagePortal from "./components/VillagePortal";
import BusinessOwnerSignup from "./components/businessSignUp";
import VillageRegistrationForm from "./components/villageSignUp";
import VillagesList from "./components/villageList";
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

          <Route path="/VillageSignup" element={<VillageRegistrationForm />} />
          <Route path="/BusinessSignup" element={<BusinessOwnerSignup />} />
          <Route path="/village-portal" element={<VillagePortal />} />
          <Route path="/Villagelist" element={<VillagesList />} />
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
