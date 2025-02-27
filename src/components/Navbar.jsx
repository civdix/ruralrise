import React, { useEffect } from "react";
import { Link } from "react-router";
import {
  FaDonate,
  FaHome,
  FaPhone,
  FaPlus,
  FaRegUserCircle,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { GrContact, GrResources } from "react-icons/gr";
import { MdContactPage, MdOutlineContactSupport } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { FcGallery } from "react-icons/fc";
// import Notification from "./Notification";
// import CalcContext from "./calcContext/calcContext";
import "../Styles/navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/#">
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
          <span className="fw-bold">RURAL RISE</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/VillageList">
                Villages Listing
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#benefits">
                Benefits
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#success">
                Success Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
          <button className="btn btn-success">Log In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
