import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import FAQ from "./FAQ";
const RuralRiseHomepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-5 py-md-6 bg-light">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">Rural Rise Project</h1>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: "800px" }}>
            An initiative focused on leveraging existing village infrastructure
            to attract companies, fostering mutual benefits for businesses and
            rural communities alike.
          </p>

          {!isLoggedIn && (
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-4">
              <button className="btn btn-primary btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 2h8" />
                  <path d="M16 2v2" />
                  <path d="M8 2v2" />
                </svg>
                <Link
                  to="/BusinessSignUp"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Join as Business
                </Link>
              </button>
              <button className="btn btn-success btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <Link
                  to="/VillageSignup"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Join as Village
                </Link>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">About Rural Rise Project</h2>
              <p className="lead mb-4">
                Rural Rise Project is an initiative focused on leveraging
                existing village infrastructure to attract companies, fostering
                mutual benefits such as job creation, education, microbusiness
                growth, and infrastructure development.
              </p>
              <p>
                The project aims to bridge the rural-urban divide by providing
                industries with cost-effective locations while empowering local
                communities with employment and skill development. By
                integrating modern technology, logistics, and training centers,
                it enhances economic sustainability.
              </p>
              <p>
                It also promotes eco-friendly practices, ensuring minimal
                environmental impact. The project collaborates with businesses,
                government bodies, and NGOs to implement smart solutions,
                improving connectivity and quality of life in rural areas,
                fostering long-term prosperity.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-4 rounded">
                <div className="ratio ratio-16x9">
                  <div className="bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center overflow-hidden">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-secondary"
                    > */}
                    <img
                      className="w-100"
                      src={require("../Assets/images/rural_rise_village.jpg")}
                    />
                    {/* <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M12 8v4" />
                      <path d="M12 16h.01" /> */}
                    {/* </svg> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light" id="benefits">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Key Benefits</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 bg-primary bg-opacity-10">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-25 p-3 rounded-circle d-inline-flex mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Economic Development</h3>
                  <p className="text">
                    Creates jobs, fosters microbusiness growth, and develops
                    infrastructure in rural communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 bg-success bg-opacity-10">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-25 p-3 rounded-circle d-inline-flex mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-success"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Business Advantages</h3>
                  <p className="text">
                    Provides companies with cost-effective locations, skilled
                    workforce, and sustainable operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 bg-warning bg-opacity-10">
                <div className="card-body text-center p-4">
                  <div className="bg-warning bg-opacity-25 p-3 rounded-circle d-inline-flex mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-warning"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </div>
                  <h3 className="h5 fw-bold mb-3">Smart Solutions</h3>
                  <p className="text">
                    Integrates modern technology, logistics, and training
                    centers to enhance connectivity and quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-success p-2 rounded-circle me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                      </svg>
                    </div>
                    <h3 className="h5 fw-bold mb-0">
                      Education & Skill Development
                    </h3>
                  </div>
                  <p className="text">
                    Rural Rise Project establishes training centers to upskill
                    local communities, preparing them for employment
                    opportunities with partner companies. This focus on
                    education ensures sustainable economic development.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary p-2 rounded-circle me-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.29 14.27A1 1 0 0 0 2 15v5a1 1 0 0 0 1 1h5a1 1 0 0 0 .71-.29l9-9" />
                        <path d="M4 16h2v2" />
                        <path d="M18.72 2.29A1 1 0 0 0 18 2h-5a1 1 0 0 0-.71.29l-9 9" />
                        <path d="M16 6h2v2" />
                      </svg>
                    </div>
                    <h3 className="h5 fw-bold mb-0">Eco-Friendly Practices</h3>
                  </div>
                  <p className="text">
                    The project promotes environmentally sustainable business
                    operations, ensuring minimal ecological impact while
                    maximizing economic benefits for both rural communities and
                    partner companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light" id="success">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Success Stories</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <p className="text fst-italic mb-4">
                    "Partnering with Rural Rise transformed our village economy.
                    New job opportunities have reduced migration to cities, and
                    our community has developed new skills through their
                    training programs."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-success bg-opacity-25 rounded-circle p-2 me-3">
                      <span className="text-success fw-bold">RV</span>
                    </div>
                    <div>
                      <h4 className="h6 fw-bold mb-0">Rampur Village</h4>
                      <p className="small text mb-0">Rural Community Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <p className="text fst-italic mb-4">
                    "Relocating our manufacturing unit to a Rural Rise partner
                    village reduced our operational costs by 30% while giving us
                    access to a dedicated workforce. The infrastructure support
                    exceeded our expectations."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary bg-opacity-25 rounded-circle p-2 me-3">
                      <span className="text-primary fw-bold">ET</span>
                    </div>
                    <div>
                      <h4 className="h6 fw-bold mb-0">EcoTrade Solutions</h4>
                      <p className="small text mb-0">Business Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Our Collaborative Approach
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src={require("../Assets/images/developed_village.jpg")}
                alt="Collaboration"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="h4 fw-bold mb-4">
                Multi-Stakeholder Partnerships
              </h3>
              <p className="mb-4">
                Rural Rise Project works collaboratively with businesses,
                government bodies, and NGOs to implement effective solutions for
                rural development. This partnership approach ensures that all
                stakeholders contribute their expertise and resources.
              </p>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item bg-transparent">
                  <strong>Business Partners:</strong> Provide investment, job
                  opportunities, and technical expertise
                </li>
                <li className="list-group-item bg-transparent">
                  <strong>Government Bodies:</strong> Support with policy
                  framework, infrastructure, and incentives
                </li>
                <li className="list-group-item bg-transparent">
                  <strong>NGOs:</strong> Facilitate community engagement,
                  training, and sustainability initiatives
                </li>
                <li className="list-group-item bg-transparent">
                  <strong>Village Communities:</strong> Contribute local
                  knowledge, workforce, and cultural insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}

      <section
        className="py-5 bg-gradient text-white"
        style={{ background: "linear-gradient(to right, #198754, #0d6efd)" }}
      >
        <FAQ />
        <div className="container text-center text-black">
          <h2 className="fw-bold mb-4">Join the Rural Rise Movement</h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: "800px" }}>
            Be part of bridging the rural-urban divide. Together, we can create
            sustainable economic growth that benefits both businesses and rural
            communities.
          </p>

          {!isLoggedIn && (
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <button className="btn btn-light text-success btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 2h8" />
                  <path d="M16 2v2" />
                  <path d="M8 2v2" />
                </svg>
                Join as Business
              </button>
              <button className="btn btn-light text-primary btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Join as Village
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5" id="contact">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="d-flex align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-success me-2"
                >
                  <path d="M12 2v8" />
                  <path d="M12 18v4" />
                  <path d="M4.93 10.93l1.41 1.41" />
                  <path d="M17.66 11.7l1.41 1.41" />
                  <path d="M12 18a6 6 0 0 0 0-12" />
                </svg>
                <h5 className="mb-0 fw-bold">RURAL RISE</h5>
              </div>
              <p className="text">
                Bridging the rural-urban divide for sustainable prosperity.
              </p>
            </div>

            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="text-decoration-none text">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#benefits" className="text-decoration-none text">
                    Benefits
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#success" className="text-decoration-none text">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text">
                    Rural Guide
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text">
                    Business Toolkit
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#FAQ" className="text-decoration-none text">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Contact Us</h5>
              <a
                href="mailto:dixitshivam249@gmail.com"
                className="text text-decoration-none mb-2 text-light"
              >
                dixitshivam249@gmail.com
              </a>
              <a
                href="mailto:simran184953@gmail.com"
                className="text text-decoration-none mb-2 d-block text-light"
              >
                simran184953@gmail.com
              </a>
              <a
                href="mailto:info@ruralrise.in"
                className="text text-decoration-none mb-2 d-block text-light"
              >
                info@ruralrise.in
              </a>

              <a
                href="tel:+1234567890"
                className=" text-decoration-none text-light"
              >
                Call Us: +91 9720-9659-85
              </a>

              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-decoration-none text">
                  <FaFacebook />
                </a>
                <a href="#" className="text-decoration-none text">
                  <FaX />
                </a>
                <a href="#" className="text-decoration-none text">
                  <FaInstagram />
                </a>
                <a href="#" className="text-decoration-none text">
                  <LiaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="border-top border-secondary mt-4 pt-4 text-center text">
            <p>
              &copy; {new Date().getFullYear()} Rural Rise Project. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RuralRiseHomepage;
