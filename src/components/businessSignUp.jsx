import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router";
const BusinessOwnerSignup = () => {
  const [formData, setFormData] = useState({
    // Personal details (required)
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",

    // Business details (optional)
    businessName: "",
    businessType: "",
    businessAddress: "",
    businessPhone: "",
    businessWebsite: "",
    yearsInOperation: "",
    employeeCount: "",
    annualRevenue: "",
    businessDescription: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required personal fields
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // Form submission would go here
      console.log("Form data submitted:", formData);
      setSubmitted(true);
    } else {
      setErrors(formErrors);
    }
    const response = fetch("http://localhost:5000/api/auth/BusinessSignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error from BusinessSignUp Fetch:", error);
      });
  };

  if (submitted) {
    return (
      <div className="container mt-5">
        <div className="card p-5 shadow">
          <div className="text-center">
            <h2 className="text-success">Registration Successful!</h2>
            <p className="mt-3">
              Thank you for registering with RURAL RISE. Your application has
              been submitted successfully.
            </p>
            <p>We will review your information and contact you shortly.</p>
            <button
              className="btn btn-primary mt-3"
              onClick={() => setSubmitted(false)}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Click here to Home Page
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white text-center">
          <Link to="/">
            <FaBackward size={25} className="float-start my-2" color="white" />
          </Link>
          <h2 className="mb-0 mx-auto">
            RURAL RISE - Business Owner Registration
          </h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <div className="mb-4">
              <h4 className="border-bottom pb-2">
                Personal Information <span className="text-danger">*</span>
              </h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="password" className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Business Information Section */}
            <div className="mb-4">
              <h4 className="border-bottom pb-2">
                Business Information{" "}
                <span className="text-muted">(Optional)</span>
              </h4>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="businessName" className="form-label">
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="businessType" className="form-label">
                    Business Type
                  </label>
                  <select
                    className="form-select"
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                  >
                    <option value="">Select Business Type</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Retail">Retail</option>
                    <option value="Food & Beverage">Food & Beverage</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Services">Services</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Technology">Technology</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="businessAddress" className="form-label">
                  Business Address
                </label>
                <textarea
                  className="form-control"
                  id="businessAddress"
                  name="businessAddress"
                  rows="2"
                  value={formData.businessAddress}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="businessPhone" className="form-label">
                    Business Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="businessPhone"
                    name="businessPhone"
                    value={formData.businessPhone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="businessWebsite" className="form-label">
                    Business Website
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="businessWebsite"
                    name="businessWebsite"
                    value={formData.businessWebsite}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="yearsInOperation" className="form-label">
                    Years in Operation
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="yearsInOperation"
                    name="yearsInOperation"
                    value={formData.yearsInOperation}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="employeeCount" className="form-label">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="employeeCount"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="annualRevenue" className="form-label">
                    Annual Revenue
                  </label>
                  <select
                    className="form-select"
                    id="annualRevenue"
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleChange}
                  >
                    <option value="">Select Revenue Range</option>
                    <option value="Under 50,000">Under 50,000</option>
                    <option value="50,000 - 500,000">50,000-5,00,000</option>
                    <option value="500,000 - 25,00,000">
                      500,000-25,00,000
                    </option>
                    <option value="25,00,000 - 50,00,000">
                      25,00,000 - 50,00,000
                    </option>
                    <option value="Over 50,00,000">Over 50,00,000</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="businessDescription" className="form-label">
                  Business Description
                </label>
                <textarea
                  className="form-control"
                  id="businessDescription"
                  name="businessDescription"
                  rows="3"
                  value={formData.businessDescription}
                  onChange={handleChange}
                  placeholder="Briefly describe your business, products/services, and target market"
                ></textarea>
              </div>
            </div>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsCheck"
                required
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I agree to the <a href="#">Terms and Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-lg">
                Register as Business Owner
              </button>
            </div>

            <div className="mt-3 text-center">
              Already have an account? <Link to="/businesslogin">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessOwnerSignup;
