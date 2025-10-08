import React from "react";
import "./Sidebar.css";
// Corrected the filenames below to use the one you have
import jack from "../../assets/profilepicture.png";
import simon from "../../assets/profilepicture.png";
import tom from "../../assets/profilepicture.png";
import megan from "../../assets/profilepicture.png";
import cameron from "../../assets/profilepicture.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faCar,
  faFutbol,
  faFilm,
  faLightbulb,
  faMusic,
  faBlog,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ sidebar, category, setCategory }) => {
  // ... component code remains the same
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <FontAwesomeIcon icon={faGamepad} />
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <FontAwesomeIcon icon={faCar} />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <FontAwesomeIcon icon={faFutbol} />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <FontAwesomeIcon icon={faFilm} />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <FontAwesomeIcon icon={faLightbulb} />
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <FontAwesomeIcon icon={faMusic} />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <FontAwesomeIcon icon={faBlog} />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <FontAwesomeIcon icon={faNewspaper} />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
