import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import profile_icon from "../../assets/profilepicture.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faVideo,
  faTh,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <div
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        <Link to="/">
          <img className="logo" src={logo} alt="CherryTube Logo" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>

      <div className="nav-right flex-div">
        <FontAwesomeIcon icon={faVideo} />
        <FontAwesomeIcon icon={faTh} />
        <FontAwesomeIcon icon={faBell} />
        <img className="user-icon" src={profile_icon} alt="User Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
