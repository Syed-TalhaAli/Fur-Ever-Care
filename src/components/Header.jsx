import "../assets/styles/header.css";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Userdrop from "./Userdrop";
import { useState } from "react";

const Header = () => {
  const getUserDetails =
    JSON.parse(localStorage.getItem("fureverCareUser")) || {};
  const { userType } = getUserDetails;
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-section">
        <Link to="/home" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <nav className={`navbar ${open ? "active" : ""}`}>
        <img src={Logo} alt="logo" id="sm-logo" />

        <i
          className="fa-solid fa-xmark"
          id="fa-mark"
          onClick={() => setOpen(false)}
        ></i>

        <div className="nav-container">
          <ul className="nav-menu">
            {userType === "owner" && (
              <>
                <li className="nav-item">
                  <a href="#" className="nav-link">Pet Care</a>
                  <div className="dropdown">
                    <Link to="/petProfile" className="dropdown-item">Pet Profile</Link>
                    <Link to="/feedingguide" className="dropdown-item">Feeding Guide</Link>
                    <Link to="/health" className="dropdown-item">Health Tips</Link>
                    <Link to="/training" className="dropdown-item">Training Tips</Link>
                  </div>
                </li>

                <li className="nav-item">
                  <Link to="/showCaseProduct" className="nav-link">Pet Product Showcase</Link>
                </li>

                <li className="nav-item">
                  <Link to="/emergency" className="nav-link">Emergency & Vet</Link>
                </li>

                <li className="nav-item">
                  <Link to="/feedback" className="nav-link">Feedback</Link>
                </li>

                <li className="nav-item">
                  <Link to="/about" className="nav-link">About Us</Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact Us</Link>
                </li>
              </>
            )}

            {userType === "vet" && (
              <li className="nav-item">
                <Link to="/profile" className="nav-link">Profile</Link>
              </li>
            )}

            {userType === "volunteer" && (
              <li className="nav-item">
                <Link to="/petshellter" className="nav-link">Pet Adoption</Link>
              </li>
            )}

            <li className="nav-item">
              <Userdrop />
            </li>
          </ul>
        </div>
      </nav>

      <i
        className="fa-solid fa-bars"
        onClick={() => setOpen(true)}
        id="fa-bar"
      ></i>
    </header>
  );
};

export default Header;
