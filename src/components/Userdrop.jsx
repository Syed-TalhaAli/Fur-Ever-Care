import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/userdrop.css";
import Loader from "./Loader";

const Userdrop = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getUserDetails = JSON.parse(localStorage.getItem("fureverCareUser")) || {};
  const { name, userType,} = getUserDetails;

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("fureverCareUser");
      setIsDropdownOpen(false);
      setTimeout(() => navigate("/"), 1000);
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleViewProfile = () => {
    setIsDropdownOpen(false);
    navigate("/profile");
  };

  const handleSettings = () => {
    setIsDropdownOpen(false);
    navigate("/settings");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!name) return null;

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <button
        className={`user-button ${isDropdownOpen ? "active" : ""}`}
        onClick={toggleDropdown}
      >
        <div className="user-avatar">{name ? name[0].toUpperCase() : "U"}</div>
        <span className="user-name">{name}</span>
        <span className={`dropdown-arrow ${isDropdownOpen ? "rotate" : ""}`}>▼</span>
      </button>

      <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
        <div className="user-info">
          <div className="avatar-large">{name ? name[0].toUpperCase() : "U"}</div>
          <div className="username">{name}</div>
          {userType && <div className="user-type">{userType}</div>}
        </div>
        <button onClick={handleLogout} className="dropdown-item logout">
          <span className="log-icon"><i className="fa-solid fa-right-from-bracket"></i></span> Logout
        </button>
      </div>
    </div>
  );
};

export default Userdrop;
