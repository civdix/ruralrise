import React, { useState, useContext } from "react";
import RuralContext from "./context/ruralContext";
import { Link, useNavigate } from "react-router-dom";

const BusinessLogin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setBusiness } = useContext(RuralContext);

  // const { setBusiness } = useContext(RuralContext);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/businessLogin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Store auth token or navigate to dashboard
        localStorage.setItem("businesstoken", data.token);
        setBusiness(data.business);
        localStorage.setItem("buisness", data.business);
        navigate("/businessDashboard");
      } else {
        setError(data.message || "Login failed! Please try again.");
      }
    } catch (err) {
      setError("Network error! Please try again later.");
      console.log(err);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Rural Rise Business Login</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <Link href="#">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessLogin;
